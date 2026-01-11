//importações
import pool from "../config/db.js";

// Função para registrar um novo usuário
async function registerUser(nome, email, senha) {
    const client = await pool.connect();
    try {  
        // Insere o novo usuário no banco de dados
        const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id';
        // Valores a serem inseridos
        const values = [nome, email, senha];
        // Executa a query
        const res = await client.query(query, values);
        // Retorna o ID do novo usuário
        return res.rows[0].id;
    } catch (err) {
        // Erro ao cadastrar o usuario
        console.error('Erro ao registrar usuário:', err)
        throw err;
    } finally {
        // Libera o cliente de volta para o pool
        client.release();
    }
}
export default{ registerUser };