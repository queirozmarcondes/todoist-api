import { Request, Response } from "express";
import { UserService } from "../services/users.service";

export class CreateUserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body;
            const user = await this.userService.createUser(name, email, password);
            return res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
