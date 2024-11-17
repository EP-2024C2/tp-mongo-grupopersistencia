const { mongoose } = require('../db/mongo.db')
const Fabricante = require('../Schemas/fabricanteSchema');
const Producto = require('../Schemas/productosSchema');

const initData = async() => {
    try{
        await Fabricante.deleteMany({});
        await Producto.deleteMany({});

        //fabricantes
        const fabricante1 = await Fabricante.create({
            nombre: "TechCorp",
            direccion: "1234 Elm St, Ciudad",
            numeroContacto: "+123456789",
            pathImgPerfil: "images/fabricantes/techcorp.jpg",
        })

        const fabricante2 = await Fabricante.create({
            nombre: "Innovatech",
            direccion: "4567 Oak Ave, Ciudad",
            numeroContacto: "+987654321",
            pathImgPerfil: "images/fabricantes/innovatech.jpg",
        })

        const fabricante3 = await Fabricante.create({
            nombre: "Lenovo",
            direccion: "9876 Castelar, Ciudad",
            numeroContacto: "+111222333",
            pathImgPerfil: "images/fabricantes/lenovo.jpg",
        })

        //productos
        const producto1 = await Producto.create({
            nombre: "Laptop X200",
            descripcion: "Una laptop de alto rendimiento",
            precio: 1200.99,
            pathImg: "images/productos/laptop-x200.jpg",
            componentes: [
                {
                    nombre: "Procesador Intel i7",
                    descripcion: "Procesador de octba generación"
                },
                {
                    nombre: "SSD 1TB",
                    descripcion: "Disco sólido de 1TB de capacidad"
                }
            ]
        })

        const producto2 = await Producto.create({
            nombre: "Smartphone s5",
            descripcion: "Telefono inteligente con pantalla OLED",
            precio: 799.99,
            pathImg: "images/productos/smartphone-s5.jpg",
            componentes: [
                {
                    nombre: "Pantalla OLED 6.5 pulgadas",
                    descripcion: "Pantalla de alta definición"
                },
                {
                    nombre: "Bateria 4000mAh",
                    descripcion: "Bateria de larga duración"
                }
            ]
        })

        const producto3 = await Producto.create({
            nombre: "Laptop Thinkpad",
            descripcion: "Laptop de hogar",
            precio: 999.99,
            pathImg: "images/productos/laptopthinkpad.jpg",
            componentes: [
                {
                    nombre: "Procesador Intel i3",
                    descripcion: "Procesador de 4 nucleos"
                },
                {
                    nombre: "SSD 512GB",
                    descripcion: "Disco solido de 512GB de capacidad"
                }
            ]
        })
        console.log("Registros creados")
    }
    catch(error) {
    console.error('Error al cargar la base de datos', error)
    }
}

module.exports = initData; 