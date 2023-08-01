const fs = require('fs')
const express =  require('express')
const app = express();

const contenedor = require("./contenedor");


const port = 8080



    
    const productos = new contenedor("productos.txt")





app.get("/api/productos", async(req,res) => {
    const todosProductos = await contenedor.obtenerTodosObjetos()
    res.json(todosProductos)
});

app.get("/api/productoRandom", async(req,res) => {
    const todosProductos = await contenedor.obtenerTodosObjetos()
    const maxId = todosProductos.length;

    const randomNum = generateRandom(1, maxId)
    const randomProduct = await contenedor.obtenerPorId(randomNum)
    res.send(randomProduct)
});


const generateRandom = (min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) + min)
}

app.listen(port , () => {
    console.log('Escuchando el puerto 8080')
});