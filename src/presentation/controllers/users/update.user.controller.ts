import { Request, Response } from "express";
import { UserService } from "../../../application/use-cases/users.service";

export class UpdateUserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário da URL
            const updateData = req.body; // Obtém os dados de atualização do corpo da requisição
            const updatedUser = await this.userService.updateUser(userId, updateData);

            res.status(200).json(updatedUser);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}
