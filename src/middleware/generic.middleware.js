const mongoose = require('mongoose');
const middleware = {}


const validateId= (Model) = async(req, res, next) => {
    const id = req.params.id;
    //capaz habria que ponerlo dentro de un try catch nose
    //const model = await Model.findByPk(id)
    //if(!Model){}
}
middleware.validateId = validateId

const verificarAsociaciones = async() => {

}
middleware.verificarAsociaciones = verificarAsociaciones

module.exports = middleware