const Producto = require('../Schemas/productosSchema');
const controller = {}
const mongoose = require('../db/mongo.db').mongoose;

/*
const getAllComponentes = async (req,res) => {
    const componentes = await Producto.find({})
    res.status(200).json(componentes)
}
controller.getAllComponentes = getAllComponentes


const getComponenteById = async (req,res) =>{
    const {id} = req.params
    const componente = await Componente.findById(id)
    res.status(200).json(componente)
}
controller.getComponenteById = getComponenteById*/

const createComponente = async (req,res) => {
    const componente = await Producto.create(req.body)
    res.status(201).json(componente)
}
controller.createComponente = createComponente
/*
const updateComponente = async (req,res) =>{
    const {id} = req.params
    const componente = await Componente.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(componente)
}
controller.updateComponente = updateComponente

const deleteComponente = async (req,res) =>{
    const {id} = req.params
    try{
        const componente = await Componente.findByIdAndDelete(id)
        res.status(200).json({message: "Componente eliminado con éxito"})
    } catch (error){
        res.status(500).json({ error: "Error al eliminar el componente", details: error.message })
    }
    
}
controller.deleteComponente = deleteComponente*/

module.exports = controller