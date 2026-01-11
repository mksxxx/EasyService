//importações
import app from "./src/app.js";

//Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});
