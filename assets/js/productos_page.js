import { Producto } from "./modules/productos.js";

let listarProductos = [];


const productosURL = "http://localhost:3000/products";

fetch(productosURL)
    .then(response => response.json())
    .then(data => {
        procesarDatos(data);
    });

function procesarDatos(data) {
    listarProductos = [];
    for (const dataProducts of data) {
        const producto = new Producto(dataProducts);
        listarProductos.push(producto);
    }
    dibujarProducto();
}

function dibujarProducto() {
    const contenedorProductos = document.getElementById('productos__container');
    contenedorProductos.innerHTML = '';
    for (const producto of listarProductos) {
        const card = producto.crearCard();
        contenedorProductos.appendChild(card);
    }
}

