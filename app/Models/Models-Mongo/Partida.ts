import { Schema, model } from "@ioc:Mongoose";

export default model('sesiones', new Schema(
    {
        host: String,
        invitado: String,
        tablero_host: Array,
        tablero_invitado: Array,
        ganador: String,
        estado: String,
        turno: String
    }
))