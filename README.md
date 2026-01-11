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

1. Acesse a pasta do backend:
   Instale as dependências:
   npm install
   
---
  
2. Configure o arquivo .env na raiz da pasta backend com as suas credenciais:
      **Snippet de código**
   **----------------------**
  DB_HOST=localhost
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  DB_NAME=EasyService
  DB_PORT=5432
  JWT_SECRET=sua_chave_secreta
   **----------------------**

---
3. Execute as migrations no seu banco de dados para criar as tabelas.
---
4. Inicie o servidor:
   npm run dev ou nodemon
