const {Router} = require('express');
const fabricanteSchema = require('../Schemas/fabricanteSchema');
const schemaValidator = require('../Schemas/schemaValidator');
const genericMiddleware = require('../middleware/generic.middleware');
const fabricantesControllers = require('../controllers/fabricantes.controller');
const route = Router();

route.get('/fabricantes', fabricantesControllers.getAllFabricantes)

route.get('/fabricantes/:id', 
    genericMiddleware.validateId(),
    fabricantesControllers.getFabricanteById
    )

route.post('/fabricantes', 
    schemaValidator(fabricanteSchema),
    fabricantesControllers.createFabricantes 
)

route.put('/fabricantes/:id', 
    genericMiddleware.validateId(),
    fabricantesControllers.updateFabricantes
    ) 
    
route.delete('/fabricantes/:id',
    genericMiddleware.validateId(),
    fabricantesControllers.deleteById
    ) 

route.get('/fabricantes/:id/productos', 
    genericMiddleware.validateId(),
    fabricantesControllers.getProductosPorFabricante
)

module.exports = route