//Importações
import { Router } from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
import { verificarToken } from '../middlewares/authMiddleware.js';

//Criação das rotas
const router = Router();

//Rota de verificação do servidor
router.get("/health", (req, res) => {
    return res.status(200).json({
        status: "Server ok"
    })
})

//Rotas de usuário
router.post("/register", userController.userRegister)
//Rotas de autenticação
router.post("/login", authController.login)

export default router;