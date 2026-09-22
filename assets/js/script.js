const catalogoProductos = document.getElementById("catalogoProductos");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const formularioBusqueda = document.getElementById("formularioBusqueda");
const campoBusqueda = document.getElementById("campoBusqueda");
const enlacesCategoria = document.querySelectorAll("[data-categoria]");

const carrito = [];
let productosDisponibles = [];

// Carga los productos desde el archivo JSON local
fetch("assets/data/productos.json")
    .then(function (respuesta) {
        if (!respuesta.ok) {
            throw new Error("No fue posible cargar los productos.");
        }

        return respuesta.json();
    })
    .then(function (productos) {
        productosDisponibles = productos;
        mostrarProductos(productosDisponibles);
    })
    .catch(function (error) {
        console.error("Error al cargar los productos:", error);

        catalogoProductos.textContent = "";

        const mensajeError = document.createElement("p");
        mensajeError.className = "alert alert-danger";
        mensajeError.textContent =
            "No fue posible cargar los productos. Intenta nuevamente más tarde.";

        catalogoProductos.appendChild(mensajeError);
    });

// Filtra los productos por el nombre escrito en el formulario
formularioBusqueda.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const textoBusqueda =
        campoBusqueda.value.trim().toLowerCase();

    const resultados = productosDisponibles.filter(
        function (producto) {
            return producto.nombre
                .toLowerCase()
                .includes(textoBusqueda);
        }
    );

    mostrarProductos(resultados);
});

// Filtra el catálogo al seleccionar una categoría del menú
enlacesCategoria.forEach(function (enlace) {
    enlace.addEventListener("click", function (evento) {
        evento.preventDefault();

        const categoriaSeleccionada =
            enlace.dataset.categoria;

        const productosFiltrados =
            productosDisponibles.filter(function (producto) {
                return producto.categoria === categoriaSeleccionada;
            });

        mostrarProductos(productosFiltrados);

        document
            .getElementById("productos")
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Crea dinámicamente las tarjetas de productos en el catálogo
function mostrarProductos(productos) {
    catalogoProductos.textContent = "";
    if (productos.length === 0) {
        const mensajeSinResultados = document.createElement("p");

        mensajeSinResultados.className =
            "alert alert-warning col-12";

        mensajeSinResultados.textContent =
            "No se encontraron productos para esta búsqueda.";

        catalogoProductos.appendChild(mensajeSinResultados);

        return;
    }

    productos.forEach(function (producto) {
        const columna = document.createElement("div");
        columna.className = "col-12 col-md-6 col-lg-4";

        const tarjeta = document.createElement("article");
        tarjeta.className = "card producto h-100 p-3";

        const imagenProducto = document.createElement("img");
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = "Portada del videojuego " + producto.nombre;
        imagenProducto.className = "card-img-top";

        const nombreProducto = document.createElement("h3");
        nombreProducto.className = "card-title";
        nombreProducto.textContent = producto.nombre;

        const descripcionProducto = document.createElement("p");
        descripcionProducto.className = "card-text";
        descripcionProducto.textContent = producto.descripcion;

        const precioProducto = document.createElement("p");
        precioProducto.className = "fw-bold fs-5";
        precioProducto.textContent =
            "$" + producto.precio.toLocaleString("es-CL");

        const botonAgregar = document.createElement("button");
        botonAgregar.type = "button";
        botonAgregar.className = "btn btn-warning mt-auto";
        botonAgregar.textContent = "Agregar al carrito";
        botonAgregar.dataset.id = producto.id;

        botonAgregar.addEventListener("click", function () {
            agregarAlCarrito(producto);
        });

        tarjeta.appendChild(imagenProducto);
        tarjeta.appendChild(nombreProducto);
        tarjeta.appendChild(descripcionProducto);
        tarjeta.appendChild(precioProducto);
        tarjeta.appendChild(botonAgregar);

        columna.appendChild(tarjeta);
        catalogoProductos.appendChild(columna);
    });
}

// Agrega el producto seleccionado al arreglo del carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Actualiza el listado, el contador y el total del carrito
function actualizarCarrito() {
    listaCarrito.textContent = "";

    let total = 0;

    carrito.forEach(function (producto) {
        const itemCarrito = document.createElement("li");

        itemCarrito.className = "list-group-item";

        itemCarrito.textContent =
            producto.nombre +
            " - $" +
            producto.precio.toLocaleString("es-CL");

        listaCarrito.appendChild(itemCarrito);

        total = total + producto.precio;
    });

    cantidadCarrito.textContent = carrito.length;

    totalCarrito.textContent =
        "$" + total.toLocaleString("es-CL");
}