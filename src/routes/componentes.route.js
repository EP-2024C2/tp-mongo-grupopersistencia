const {Router} = require('express');
const Producto = require('../Schemas/productosSchema');
const schemaValidator = require('../Schemas/schemaValidator');

const genericMiddleware = require('../middleware/generic.middleware');

const componentesController = require('../controllers/componentes.controller');
//const productosController = require('../controllers/productos.controller');
const route = Router();

/*route.get("/componentes",
    componentesController.getAllComponentes
)

route.get("/componentes/:id",
    genericMiddleware.validateId(Componente),
    componentesController.getComponenteById
)*/

route.post("/componentes",
    schemaValidator(Producto),
    componentesController.createComponente
)
/*
route.put("/componentes/:id",
    genericMiddleware.validateId(Componente),
    componentesController.updateComponente
)

route.delete("/componentes/:id",
    genericMiddleware.validateId(Componente),
    componentesController.deleteComponente
)*/

module.exports = route