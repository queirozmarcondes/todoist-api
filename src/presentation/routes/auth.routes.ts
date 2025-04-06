import { Router } from "express";
import { AuthController } from "../controllers/auth/auth.controller";
import { AuthService } from "../../infrastructure/auth/jwt.auth.service";
import { authenticate } from "../middlewares/auth.middleware";
import { UserRepository } from "../../infrastructure/database/repositories/user.repository";

// Instanciando uma vez o UserRepository e o AuthService
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

// Instanciando o AuthController uma vez
const authController = new AuthController(authService);

export const router = Router();

// Rota para login de usuário - Usando POST
router.post("/", async (req, res) => {
    await authController.login(req, res);
});

// Rota para logout de usuário - Usando POST
router.post("/", authenticate, async (req, res) => {
    await authController.logout(req, res);
});

// Rota para refresh de token de usuário - Usando POST
router.post("/", async (req, res) => {
    await authController.refreshToken(req, res);
});


const authUserRoutes = router;

export { authUserRoutes } 