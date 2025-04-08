import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { authConfig } from "../configs/jwt.js";
import { IUserRepository } from "../../domain/interfaces/repositories/interface.user.repository.js";
import { IUser } from "../../domain/entities/user.model.js";

interface JwtPayload {
    id: string;
}

export class AuthService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    async login(
        email: string,
        password: string,
    ): Promise<{ accessToken: string; refreshToken: string; user: Partial<IUser> } | null> {
        const user = await this.userRepository.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return null;
        }

        const accessToken = jwt.sign({ id: user._id }, authConfig.jwtSecret, {
            expiresIn: "15m",
        });

        const refreshToken = jwt.sign({ id: user._id }, authConfig.jwtRefreshSecret, {
            expiresIn: "7d",
        });

        // Retorna os tokens e dados do usuário (sem senha!)
        const { _id, name, email: userEmail } = user;

        return {
            accessToken,
            refreshToken,
            user: {
                id: _id,
                name,
                email: userEmail,
            },
        };
    }


    async refreshToken(
        refreshToken: string,
    ): Promise<{ accessToken: string } | null> {
        try {
            // Verifica se o refresh token é válido
            const decoded = jwt.verify(
                refreshToken,
                authConfig.jwtRefreshSecret,
            ) as JwtPayload;

            // Gera um novo access token
            const accessToken = jwt.sign({ id: decoded.id }, authConfig.jwtSecret, {
                expiresIn: "15m",
            });

            return { accessToken };
        } catch (error) {
            return null;
        }
    }

    async validateToken(token: string): Promise<JwtPayload | null> {
        try {
            const decoded = jwt.verify(token, authConfig.jwtSecret) as JwtPayload;
            return decoded;
        } catch (error) {
            return null;
        }
    }
}