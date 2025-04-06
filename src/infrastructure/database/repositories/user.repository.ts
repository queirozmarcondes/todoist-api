import { IUser } from "../../../domain/entities/user.model";
import { User } from "../schemas/user.model";
import { CreateUserDTO, UpdateUserDTO } from "../../../domain/dto/user.dto";
import { IUserRepository } from "../../../domain/interfaces/repositories/interface.user.repository";
import logger from "../../logger/winston.setup";

// Erros personalizados
class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UserNotFoundError";
    }
}

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

export class UserRepository implements IUserRepository {
    async create(data: CreateUserDTO): Promise<IUser> {
        try {
            // Validação adicional (exemplo)
            if (!data.email || !data.password) {
                throw new ValidationError("Email and password are required");
            }

            const user = new User(data);
            await user.save();
            logger.info(`User created: ${user.email}`); // Log de sucesso
            return user;
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Failed to create user: ${error.message}`);
                throw new Error(`Failed to create user: ${error.message}`);
            } else {
                logger.error(`Failed to create user: ${error}`);
                throw new Error(`Failed to create user: ${error}`);
            }
        }
    }

    async findByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await User.findOne({ email });
            return user; // Se não achar, retorna null — isso é esperado
        } catch (error) {
            logger.error(`[UserRepository] Erro ao buscar usuário por email ${email}: ${error}`);
            throw new Error(`Erro ao buscar usuário por email: ${error}`);
        }
    }

    async findById(id: string): Promise<IUser> {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw new UserNotFoundError(`User with ID ${id} not found`);
            }
            return user;
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Failed to create user: ${error.message}`);
                throw new Error(`Failed to create user: ${error.message}`);
            } else {
                logger.error(`Failed to create user: ${error}`);
                throw new Error(`Failed to create user: ${error}`);
            }
        }
    }

    async update(id: string, data: UpdateUserDTO): Promise<IUser | null> {
        try {
            const user = await User.findByIdAndUpdate(id, data, { new: true });
            if (!user) {
                throw new UserNotFoundError(`User with ID ${id} not found`);
            }
            logger.info(`User updated: ${user.email}`); // Log de sucesso
            return user;
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Failed to create user: ${error.message}`);
                throw new Error(`Failed to create user: ${error.message}`);
            } else {
                logger.error(`Failed to create user: ${error}`);
                throw new Error(`Failed to create user: ${error}`);
            }
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                throw new UserNotFoundError(`User with ID ${id} not found`);
            }
            logger.info(`User deleted: ${user.email}`); // Log de sucesso
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Failed to create user: ${error.message}`);
                throw new Error(`Failed to create user: ${error.message}`);
            } else {
                logger.error(`Failed to create user: ${error}`);
                throw new Error(`Failed to create user: ${error}`);
            }
        }
    }
}