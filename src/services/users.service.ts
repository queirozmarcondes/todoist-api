import { User, IUser } from "../model/user.model";
import bcrypt from "bcryptjs";

export class UserService {
    async createUser(name: string, email: string, password: string): Promise<IUser> {
        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("Usuário já cadastrado com este e-mail.");
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar novo usuário
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        return newUser;
    }

    async getUserById(userId: string): Promise<IUser | null> {
        return await User.findById(userId);
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({ email });
    }

    async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    async deleteUser(userId: string): Promise<boolean> {
        const deletedUser = await User.findByIdAndDelete(userId);
        return !!deletedUser;
    }
}
