import { IUser } from '../../entities/user.model';

export interface IUserService {
    createUser(name: string, email: string, password: string): Promise<IUser>;
    getUserById(userId: string): Promise<IUser | null>;
    getUserByEmail(email: string): Promise<IUser | null>;
    updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null>;
    deleteUser(userId: string): Promise<boolean>;
}
