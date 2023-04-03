import { nuevoProducto } from "./modules/nuevo__producto.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;

    nuevoProducto.crearProducto(nombre, imagen, precio, descripcion)
    .then((response) => {
        if (response.ok) {
            window.location.href = "./productos.html";
        } else {
            alert("No se pudo crear el producto, revise los datos ingresados");
        }
    })
})