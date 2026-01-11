# 🛠️ EasyService - Sistema de Gestão de Serviços

O **EasyService** é uma aplicação completa para gerenciamento de serviços, contando com um backend robusto em Node.js e autenticação segura.

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** (Ambiente de execução)
- **Express** (Framework web)
- **PostgreSQL** (Banco de dados relacional)
- **Bcrypt** (Criptografia de senhas)
- **JWT (JSON Web Token)** (Autenticação e segurança)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

### Frontend
- **Vue.js**
---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

---

## 🔧 Configuração do Backend

1. Acesse a pasta do backend: <br>
   Instale as dependências:  <br>
   npm install
   
---
  
2. Configure o arquivo .env na raiz da pasta backend com as suas credenciais: <br> <br>
**Snippet de código** <br>
  - DB_HOST=localhost <br>
  - DB_USER=seu_usuario <br>
  - DB_PASSWORD=sua_senha <br>
  - DB_NAME=EasyService <br>
  - DB_PORT=5432 <br>
  - JWT_SECRET=sua_chave_secreta <br>

---
3. Execute as migrations no seu banco de dados para criar as tabelas: <br>
  db-migrate up
---
4. Inicie o servidor: <br>
   npm run dev ou nodemon
