const mongoose = require('mongoose')
const MONGO_URL = 
  process.env.MONGO_URL ?? 
  "mongodb://admin:admin1234@localhost:27017/producto?authSource=admin";

const initData = require('../init/data')

async function connectToDatabase () {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexión a mongo realizada con exito")
    await initData();
  }
  catch (err) {
    console.error('Error al conectarse a mongo', err.message)
  }
}

module.exports = {mongoose, connectToDatabase}