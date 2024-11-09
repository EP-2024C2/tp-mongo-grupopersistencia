const Fabricante = require('../Schemas/fabricanteSchema')
const controller = {}
const mongoose = require('../db/mongo.db').mongoose;


const getAllFabricantes = async (req, res) => {
    const fabricantes = await Fabricante.find({})
    res.status(200).json(fabricantes)
}
controller.getAllFabricantes = getAllFabricantes

const getFabricanteById = async (req,res) => {
    const {id} = req.params
    const fabricante = await Fabricante.findById(id)
    res.status(200).json(fabricante)
}
controller.getFabricanteById = getFabricanteById

const createFabricante = async (req,res) => {
    const fabricante = await Fabricante.create(req.body)
    res.status(201).json(fabricante)
}
controller.createFabricante = createFabricante

const updateFabricante = async (req,res) => {
    const {id} = req.params
    const fabricante = await Fabricante.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(fabricante)
}
controller.updateFabricante = updateFabricante


const deleteFabricante = async (req,res) => {
    const {id} = req.params
    try{
        const fabricante = await Fabricante.findByIdAndDelete(id)
        res.status(200).json({message: "Fabricante eliminado con éxito"})
    } catch (error){
        res.status(500).json({ error: "Error al eliminar el fabricante", details: error.message })
    }
}
controller.deleteFabricante = deleteFabricante

/*
//getProductosPorFabricante
const getProductosPorFabricante = async(req,res) =>{
   
}
controller.getProductosPorFabricante = getProductosPorFabricante*/

module.exports = controller