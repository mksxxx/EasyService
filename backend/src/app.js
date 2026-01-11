//importações
import  express  from "express";
import dotenv from "dotenv";
import router from "./router/Router.js";
import cors from "cors";

//Configurações iniciais
dotenv.config();
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

export default app;