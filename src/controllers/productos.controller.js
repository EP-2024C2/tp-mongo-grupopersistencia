const Producto = require("../Schemas/productosSchema")
const controller = {}
const mongoose = require("../db/mongo.db").mongoose;

const getAllProductos = async (req,res) => {
    const productos = await Producto.find({})
    res.status(200).json(productos)
}

controller.getAllProductos = getAllProductos

const createProducto = async (req,res) => {
    const producto = await Producto.create(req.body)
    res.status(201).json(producto)
}

controller.createProducto = createProducto

const getProductoById = async (req,res) =>{
    const {id} = req.params
    const producto = await Producto.findById(id)
    res.status(200).json(producto)
}

controller.getProductoById = getProductoById

const updateProducto = async (req,res) =>{
    const {id} = req.params
    const producto = await Producto.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(producto)
}

controller.updateProducto = updateProducto

const deleteProducto = async (req,res) =>{
    const {id} = req.params
    try{
        const producto = await Producto.findByIdAndDelete(id)
        res.status(200).json({message: "Producto eliminado con éxito"})
    } catch (error){
        res.status(500).json({ error: "Error al eliminar el producto", details: error.message })
    }
    
}

controller.deleteProducto = deleteProducto

module.exports = controller