import { Request, Response } from "express";
import { UserService } from "../../../application/use-cases/users.service";

export class CreateUserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;
            const user = await this.userService.createUser(name, email, password);
            res.status(201).json(user); // sem return aqui
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    }
}
