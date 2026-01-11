//Importações
import registration_user from "../service/registration_user.js";
import bcrypt from "bcrypt";

//Função para registrar um novo usuário
async function userRegister(req, res) {
    // Extrai os dados do corpo da requisição
    const { nome, email, senha} = req.body

    try {
        // Verifica se os campos obrigatórios foram preenchidos
        if (!nome || !email || !senha) {
            return res.status(400).json({
                error: 'Nome, email e senha são obrigatórios'
            })
        }
        // Hash da senha antes de salvar
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(senha, saltRounds);

        // Registra o usuário no banco de dados
        const userId = await registration_user.registerUser(nome, email, passwordHash)
        // Sucesso na criação do usuário
        res.status(201).json({ 
            message: 'Usuário criado com sucesso',
            userId: userId 
        })

    } catch (err) {
        // Verifica se o email já está cadastrado
        if (err.code === '23505') {
            return res.status(409).json({
                error: 'Email já cadastrado'
            })
        }
        // Erro ao cadastrar o usuario
        console.error('Erro ao registrar usuário:', err)
        return res.status(500).json({
            error: 'Erro interno do servidor'
        })
    }
}

    export default { userRegister };