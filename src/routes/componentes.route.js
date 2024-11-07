const {Router} = require('express');
//const componenteSchema = require('../Schemas/productosSchema') //REVISAR
const schemaValidator = require('../Schemas/schemaValidator')
const genericMiddleware = require('../middleware/generic.middleware');
const componentesControllers = require('../controllers/componentes.controller')
const route = Router();

