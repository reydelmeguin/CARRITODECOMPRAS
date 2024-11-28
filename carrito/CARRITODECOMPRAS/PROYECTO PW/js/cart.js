const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("objetos")) || [];  // Si no hay productos, se inicializa un arreglo vacío.
    console.log(productos);

    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoObjeto = document.createElement("div");
            nuevoObjeto.classList = "tarjeta-producto";
            nuevoObjeto.innerHTML = `
                <img src="./img/productos/producto${producto.id}.jpg">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>  <!-- Aquí inicializamos la cantidad -->
                    <button>+</button>
                </div> 
            `;
            contenedorTarjetas.appendChild(nuevoObjeto);

            // Agregar 1 al carrito (sumar cantidad)
            nuevoObjeto.getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cantidadProductoFinal = agregarAlCarrito(producto);
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                    cuentaElement.innerText = cantidadProductoFinal;  // Actualizamos la cantidad de la tarjeta
                });

            // Restar 1 al carrito (restar cantidad)
            nuevoObjeto.getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    const cantidadProductoFinal = restarAlCarrito(producto);
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                    cuentaElement.innerText = cantidadProductoFinal;  // Actualizamos la cantidad de la tarjeta
                });
        });
    }
}

crearTarjetasProductosInicio();
