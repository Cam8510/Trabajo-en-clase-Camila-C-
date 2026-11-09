// modelo de la coleccion de tareas, para usar con mongoose



const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    completada: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: (documento,objeto) => {
            objeto.id = objeto_id.toString();
            delete objeto._id;
            return objeto;
        }
    },
});