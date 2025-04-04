import { Request, Response } from "express";
import { UserService } from "../services/users.service";

export class DeleteUserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário da URL
            const deleted = await this.userService.deleteUser(userId);

            if (!deleted) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }

            return res.status(204).send(); // Retorna 204 No Content (sucesso)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
