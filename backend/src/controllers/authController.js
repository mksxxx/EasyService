//Importações
import auth_user from "../service/auth_user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Função de login
async function login(req, res) {
    const { email, senha } = req.body;

    try {
        // Verifica se os campos foram preenchidos
        if (!email || !senha) {
            return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
        }

        // Busca o usuário no banco
        const user = await auth_user.loginUser(email);

        if (!user) {
            return res.status(401).json({ error: "E-mail ou senha incorretos" });
        }

        console.log("Usuário retornado do banco:", user);

        // Compara a senha digitada com o hash do banco
        const passwordMatch = await bcrypt.compare(senha, user.senha);

        if (!passwordMatch) {
            return res.status(401).json({ error: "E-mail ou senha incorretos" });
        }

        // Gera o token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        //  Sucesso no login
        res.status(200).json({
            message: "Login realizado com sucesso!",
            token: token,
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email
            }
        });

    } catch (err) {
        // Erro no processo de login
        console.error("Erro no login:", err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export default { login };