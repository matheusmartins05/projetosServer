import express from 'express';
import conexaoComBancoDeDados from './config/dbConnect.js';

const app = express();
app.use(express.json());

const conexao = await conexaoComBancoDeDados();
conexao.once("open", () =>{
    console.log("Conexão com banco de dados feita com sucesso!");
})

export default app;