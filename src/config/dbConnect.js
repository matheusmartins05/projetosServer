import mongoose, { mongo } from "mongoose";

async function conexaoComBancoDeDados(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
}

export default conexaoComBancoDeDados;