import { IUser } from "../model/user.model";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
export interface IUserRepository {
    create(data: CreateUserDTO): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    findById(id: string): Promise<IUser>;
    update(id: string, data: UpdateUserDTO): Promise<IUser | null>;
    delete(id: string): Promise<void>;
}