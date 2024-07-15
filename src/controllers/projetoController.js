import projeto from "../models/Projetos.js";

class ProjetoController {
  static async listarProjetos(req, res) {
    try {
      const listaProjetos = await projeto.find({});
      res.status(200).json(listaProjetos);
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listarProjetoPorId (req, res) {
    try {
        const id = req.params.id;
        const projetoEncontrado = await projeto.findById(id);
        res.status(200).json(projetoEncontrado);
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async atualizarProjeto (req, res) {
    try {
        const id = req.params.id;
       await projeto.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "livro atualizado" });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async cadastrarProjeto(req, res) {
    try {
      const novoProjeto = await projeto.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", projeto: novoProjeto });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar projeto` });
    }
  }

  static async excluirProjeto(req, res) {
    try {
      const id = req.params.id;
      await projeto.findByIdAndDelete(id);
      res.status(204).json({ message: "Excluido com sucesso"});
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao excluir projeto` });
    }
  }
}

export default ProjetoController;
