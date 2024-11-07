const {Router} = require('express');

const productoSchema = require('../Schemas/productosSchema');
const schemaValidator = require('../Schemas/schemaValidator');

const genericMiddleware = require('../middleware/generic.middleware');

const productosController = require('../controllers/productos.controller');
const fabricantesController = require('../controllers/fabricantes.controller');
const componentesController = require('../controllers/componentes.controller')

const route = Router();
