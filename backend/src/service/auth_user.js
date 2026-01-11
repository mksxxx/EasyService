//Importações
import pool from '../config/db.js';

// Função para buscar um usuário pelo email
async function loginUser(email) {
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const result = await pool.query(query, [email]);
    
    // Retorna o usuário encontrado ou null
    return result.rows[0]; 
}

export default { loginUser };