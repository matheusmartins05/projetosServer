import express from "express";
import projetos from "../routes/projetosRoutes.js";

const routes = (app) => {

  app.route("/").get((req, res) => res.status(200).send("Hello World!"));
  app.use(express.json(), projetos);
};

export default routes;
