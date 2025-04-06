import { Router } from "express";
import asyncHandler from "express-async-handler";

import { CreateUserController } from "../controllers/users/create.user.controller";
import { GetUserByIdController } from "../controllers/users/get.user.by.id.controller";
import { UpdateUserController } from "../controllers/users/update.user.controller";
import { DeleteUserController } from "../controllers/users/delete.user.controller";

import { UserService } from "../../application/use-cases/users.service";
import { UserRepository } from "../../infrastructure/database/repositories/user.repository";

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

const createUserController = new CreateUserController(userService);
const getUserByIdController = new GetUserByIdController(userService);
const updateUserController = new UpdateUserController(userService);
const deleteUserController = new DeleteUserController(userService);

router.post("/", asyncHandler(createUserController.handle.bind(createUserController)));
router.get("/:id", asyncHandler(getUserByIdController.handle.bind(getUserByIdController)));
router.put("/:id", asyncHandler(updateUserController.handle.bind(updateUserController)));
router.delete("/:id", asyncHandler(deleteUserController.handle.bind(deleteUserController)));

export { router as userRoutes };
