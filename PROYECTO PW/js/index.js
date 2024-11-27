const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoObjeto = document.createElement("div");
        nuevoObjeto.classList= "tarjeta-producto";
        nuevoObjeto.innerHTML = `
        <img src="./img/productos/producto${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</h3>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoObjeto);
        
    });
}

crearTarjetasProductosInicio(objetos);