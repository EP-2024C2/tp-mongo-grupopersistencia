const { mongoose } = require('../db/mongo.db');
const { Schema } = require('mongoose');

const componenteSchema = new mongoose.Schema({
  nombre: { type: Schema.Types.String, required: [true, 'El nombre del componente es obligatorio']},
  descripcion: { type: Schema.Types.String, required: [true, 'La descripción del componente es obligatoria'] },
},
{
  collection: "componentes",
});

componenteSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
    return ret;
  }
});

componenteSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Solo exportamos el esquema, no el modelo
const Componente = mongoose.model("Componente", componenteSchema)
module.exports = Componente;