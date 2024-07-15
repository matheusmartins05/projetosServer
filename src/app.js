import express from 'express';
import conexaoComBancoDeDados from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express();
routes(app);


const conexao = await conexaoComBancoDeDados();
conexao.once("open", () =>{
    console.log("Conexão com banco de dados feita com sucesso!");
})

export default app;