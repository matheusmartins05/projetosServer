import express from 'express'
import ProjetoController from '../controllers/projetoController.js'

const routes = express.Router();

routes.get("/projetos", ProjetoController.listarProjetos);
routes.get("/projetos/:id", ProjetoController.listarProjetoPorId);
routes.post("/projetos", ProjetoController.cadastrarProjeto);
routes.put("/projetos/:id", ProjetoController.atualizarProjeto);
routes.delete("/projetos/:id", ProjetoController.excluirProjeto);

export default routes;