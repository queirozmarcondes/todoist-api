import { IUser } from '../../domain/entities/user.model';
import { IUserRepository } from '../../domain/interfaces/repositories/interface.user.repository';
import { IUserService } from '../../domain/interfaces/services/interface.user.service';
import { CreateUserDTO, UpdateUserDTO } from '../../domain/dto/user.dto';
import bcrypt from 'bcryptjs';
import logger from '../../infrastructure/logger/winston.setup';

export class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository) { }

    async createUser(name: string, email: string, password: string): Promise<IUser> {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            logger.warn(`[UserService] Tentativa de cadastro com e-mail já existente: ${email}`);
            throw new Error('Usuário já cadastrado com este e-mail.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: CreateUserDTO = { name, email, password: hashedPassword };
        return this.userRepository.create(newUser);
    }


    async getUserById(userId: string): Promise<IUser | null> {
        try {
            return await this.userRepository.findById(userId);
        } catch {
            return null;
        }
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        try {
            return await this.userRepository.findByEmail(email);
        } catch {
            return null;
        }
    }

    async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        return this.userRepository.update(userId, updateData as UpdateUserDTO);
    }

    async deleteUser(userId: string): Promise<boolean> {
        try {
            await this.userRepository.delete(userId);
            return true;
        } catch {
            return false;
        }
    }
}
