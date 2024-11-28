function agregarAlCarrito(producto) {
    // Obtener los productos guardados en localStorage o inicializar con un array vacío
    const memoria = JSON.parse(localStorage.getItem("objetos")) || [];
    
    // Buscar si el producto ya está en el carrito
    const indiceProducto = memoria.findIndex(cosa => cosa.id === producto.id);

    if (indiceProducto === -1) {
        // Si no está en el carrito, agregarlo como nuevo producto
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
    } else {
        // Si ya está en el carrito, aumentar su cantidad
        memoria[indiceProducto].cantidad++;
    }

    // Guardar la memoria actualizada en localStorage
    localStorage.setItem("objetos", JSON.stringify(memoria));

    // Actualizar el número del carrito
    actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto) {
    // Crear un objeto con la cantidad inicial del producto
    return { ...producto, cantidad: 1 };
}

// Referencia al elemento que muestra el contador del carrito
const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito() {
    // Obtener los productos guardados en localStorage
    const memoria = JSON.parse(localStorage.getItem("objetos")) || [];

    // Calcular el total de productos en el carrito
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);

    // Actualizar el texto del contador en la página
    cuentaCarritoElement.innerText = cuenta;
}

// Llamar a esta función al cargar la página para sincronizar el contador
actualizarNumeroCarrito();
