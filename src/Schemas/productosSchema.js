const { mongoose } = require('../db/mongo.db')
const { Schema } = require('mongoose')

const productoSchema = new mongoose.Schema({
  nombre: {
    type: Schema.Types.String,
    required: true,
  },
  descripcion: {
    type: Schema.Types.String,
    required: true,
  },
  precio: {
    type: Schema.Types.Decimal128,
    required: true
  },
  pathImg: {
    type: Schema.Types.String
  },
  componentes: [{
    nombre: { type: Schema.Types.String, required: true },
    descripcion: { type: Schema.Types.String },
  }]
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