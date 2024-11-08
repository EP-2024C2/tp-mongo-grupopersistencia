const {Router} = require('express');
const Producto = require('../Schemas/productosSchema');
const schemaValidator = require('../Schemas/schemaValidator');

const genericMiddleware = require('../middleware/generic.middleware');

const productosController = require('../controllers/productos.controller');
//const fabricantesController = require('../controllers/fabricantes.controller');
//const componentesController = require('../controllers/componentes.controller')
const route = Router();

route.get("/productos",
    productosController.getAllProductos
)

route.get("/productos/:id",
    genericMiddleware.validateId(Producto),
    productosController.getProductoById
)

route.post("/productos",
    schemaValidator(Producto),
    productosController.createProducto
)

route.put("/productos/:id",
    genericMiddleware.validateId(Producto),
    productosController.updateProducto
)

route.delete("/productos/:id",
    genericMiddleware.validateId(Producto),
    productosController.deleteProducto
)


module.exports = route
