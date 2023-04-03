const crearProducto = (nombre, imagen, precio, descripcion) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nombre,
            price: precio,
            description: descripcion,
            image: imagen
        })
    })
};
    
export const nuevoProducto = {
    crearProducto
};