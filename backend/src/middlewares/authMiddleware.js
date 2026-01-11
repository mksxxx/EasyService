//Importações
import jwt from 'jsonwebtoken';

// Middleware para verificar o token JWT
export const verificarToken = (req, res, next) => {
    // Pega o token 
    const authHeader = req.headers['authorization'];
    
    // Verifica se o token está presente
    const token = authHeader && authHeader.split(' ')[1];

    //Erro se não tiver token
    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    }

    try {
        // Valida o token usando a sua chave secreta
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        //  Adiciona os dados do usuário verificado dentro da requisição
        req.user = verified;
        
        // Libera para a próxima função
        next();
    } catch (err) {
        // Token inválido ou expirado
        res.status(403).json({ error: 'Token inválido ou expirado.' });
    }
};