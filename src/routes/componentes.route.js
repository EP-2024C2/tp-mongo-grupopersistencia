const {Router} = require('express');
const Producto = require('../Schemas/productosSchema');
const Componente = require('../Schemas/componenteSchema');
const schemaValidator = require('../Schemas/schemaValidator');

const genericMiddleware = require('../middleware/generic.middleware');

const componentesController = require('../controllers/componentes.controller');
//const productosController = require('../controllers/productos.controller');
const route = Router();

route.get("/componentes",
    componentesController.getAllComponentes
)

route.get("/componentes/:id",
    genericMiddleware.validateId(Componente),
    componentesController.getComponenteById
)

route.post("/componentes",
    schemaValidator(Componente),
    componentesController.createComponente
)

route.put("/componentes/:id",
    genericMiddleware.validateId(Componente),
    componentesController.updateComponente
)

route.delete("/componentes/:id",
    genericMiddleware.validateId(Componente),
    componentesController.deleteComponente
)

route.get("/componentes/:id/productos",
    genericMiddleware.validateId(Componente),
    componentesController.getProductosByComponente
)

module.exports = route