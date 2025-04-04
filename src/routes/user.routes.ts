// userRoutes.ts

import { Router } from "express";
import { CreateUserController } from "../controllers/create.user.controller";
import { GetUserByIdController } from "../controllers/get.user.by.id.controller";
import { UpdateUserController } from "../controllers/update.user.controller";
import { DeleteUserController } from "../controllers/delete.user.controller";
import { UserService } from "../services/users.service";

const userService = new UserService();

export const router = Router();

// Rota para criação de usuário - Usando POST
router.post("/", async (req, res) => {
    const controller = new CreateUserController(userService);
    await controller.handle(req, res);
});

// Rota para obter um usuário específico por ID - Usando GET
router.get("/:id", async (req, res) => {
    const controller = new GetUserByIdController(userService);
    await controller.handle(req, res);
});

// Rota para atualizar um usuário - Usando PUT
router.put("/:id", async (req, res) => {
    const controller = new UpdateUserController(userService);
    await controller.handle(req, res);
});

// Rota para deletar um usuário - Usando DELETE
router.delete("/:id", async (req, res) => {
    const controller = new DeleteUserController(userService);
    await controller.handle(req, res);
});

const userRoutes = router;

export { userRoutes }