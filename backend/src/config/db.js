//Importação dos módulos necessários
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração para carregar variáveis de ambiente do .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

// Criação do pool de conexões com o banco de dados PostgreSQL
const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,      
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,  
  password: String(process.env.DB_PASSWORD),
  port: process.env.DB_PORT,
});

// Teste  de conexão
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ ERRO AO CONECTAR NO BANCO:', err.message);
  } else {
    console.log('✅ CONEXÃO COM POSTGRES ESTABELECIDA!');
  }
});

export default pool;