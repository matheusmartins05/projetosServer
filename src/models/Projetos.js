import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    imagem: {type: String},
    nome: {type: String},
    descricao: {type: String}    
}, {versionKey: false});

const projeto = mongoose.model("projetosDB", projetoSchema);

export default projeto;
