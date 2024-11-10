const { mongoose } = require('../db/mongo.db');
const { Schema } = mongoose;

const componenteSchema = new Schema({
  nombre: { type: Schema.Types.String, required: [true, 'El nombre del componente es obligatorio']},
  descripcion: { type: Schema.Types.String, required: [true, 'La descripción del componente es obligatoria'] },
});

componenteSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  }
});

// Solo exportamos el esquema, no el modelo
module.exports = componenteSchema;