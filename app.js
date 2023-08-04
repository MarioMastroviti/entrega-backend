const fs = require('fs')
const express =  require('express')
const app = express();

const Contenedor = require("./contenedor");


const PORT = 8080;

const productos = new Contenedor("productos.txt");


    const id = productos.guardar({
        titulo: "producto 3 ", precio: 2500,
        })
   
   





app.get("/api/productos", async(req,res) => {
    const todosProductos = await productos.obtenerTodosObjetos()
    res.json(todosProductos)
});

app.get("/api/productoRandom", async(req,res) => {
    const todosProductos = await productos.obtenerTodosObjetos()
    const maxId = todosProductos.length;

    const randomNum = generateRandom(1, maxId)
    const randomProduct = await productos.obtenerPorId(randomNum)
    res.send(randomProduct)
});


const generateRandom = (min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) + min)
}

app.listen(PORT , () => {
    console.log(`Escuchando el puerto ${PORT}`)
});