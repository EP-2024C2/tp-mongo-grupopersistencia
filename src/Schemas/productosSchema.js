const { mongoose } = require('../db/mongo.db')
const { Schema } = require('mongoose')

const componenteSchema = require('./componenteSchema');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: [true, 'El nombre es obligatorio'],
  },
  descripcion: {
    type: Schema.Types.String,
    required: [true, 'La descripción es obligatoria'],
  },
  precio: {
    type: Schema.Types.Decimal128,
    required: [true, 'El precio es obligatorio'],
  },
  pathImg: {
    type: Schema.Types.String
  },
  fabricantes: [{ type: Schema.Types.ObjectId, ref: 'Fabricante' }],
  componentes: [componenteSchema], 
},
{
  collection: "productos",
}
)

productoSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  }
})

const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto;