import { Request, Response } from "express";
import { UserService } from "../services/users.service";

export class GetUserByIdController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário da URL
            const user = await this.userService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }

            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}
