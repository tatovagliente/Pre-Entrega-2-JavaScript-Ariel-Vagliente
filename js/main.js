let nombreNuevo = prompt("Ingrese su NOMBRE");
let apellidoNuevo = prompt("Ingrese su APELLIDO");

let usuarioNuevo = `${nombreNuevo} ${apellidoNuevo}`;

let carrito = [];
const productos = [   
    {id:1, nombre:"Remera lisa", precio: 6000, categoria:"Remeras"},
    {id:2, nombre:"Campera de abrigo Invierno", precio:50000, categoria:"Camperas"},
    {id:3, nombre:"Campera de cuero Invierno", precio:60000, categoria:"Camperas"},
    {id:4, nombre: "Jean Clasico", precio: 17000, categoria: "Jeans"},
    {id:5, nombre: "Zapatilla Deportiva", precio: 60000, categoria: "Calzado"},
];

// Función mostrar productos
function mostrarProductos() {
    let mensajeProductos = ["Productos disponibles:\n"];
    productos.forEach(function(producto) {
        mensajeProductos.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + " (" + producto.categoria + ")\n");
    });
    alert(mensajeProductos.join(''));
}

// Función filtrar por categoría
function filtrarPorCategoria(categoria) {
    return productos.filter(function(producto) {
        return producto.categoria.toLowerCase() === categoria.toLowerCase();
    });
}

// Función buscar por nombre
function buscarProductoPorNombre(nombre) {
    return productos.find(function(producto) {
        return producto.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
}

// Función comprar producto
function comprarProducto() {
    let mensajeProductos = ["Productos disponibles:\n"];
    productos.forEach(function(producto) {
        mensajeProductos.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + " (" + producto.categoria + ")\n");
    });
    
    let idProducto = prompt(mensajeProductos.join('') + "\nIngresa el ID (con su respectivo número) del producto que deseas agregar a tu carrito:");
    let producto = productos.find(function(producto) {
        return producto.id === parseInt(idProducto);
    });
    
    if (producto) {
        carrito.push(producto);
        alert("Producto " + producto.nombre + " agregado al carrito. Actualmente tenes en tu carrito: " + carrito.length + " productos.");
    } else {
        alert("Producto no encontrado.");
    }
}

// Función mostrar carrito y finalizar compra
function mostrarCarrito() {
    if (carrito.length > 0) {
        let mensajeCarrito = ["Carrito de compras:\n"];
        let total = 0;
        carrito.forEach(function(producto) {
            mensajeCarrito.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + "\n");
            total = total + producto.precio;
        });
        mensajeCarrito.push("\nTotal a abonar: $" + total + "\n");
        
        let finalizar = prompt(mensajeCarrito.join('') + "¿Deseas finalizar la compra? (si/no)");
        if (finalizar.toLowerCase() === 'si') {
            alert(usuarioNuevo + " Tu compra fue finalizada. El monto que debe abonar es de: $" + total + ", muchas gracias por comprar en GAZPACHO!!");
            carrito = []; 
        } else {
            alert("Compra no finalizada. Podes seguir comprando.");
        }
    } else {
        alert("Tu carrito esta vacio.");
    }
}

// Función principal
function iniciarTienda() {
    let opcion = prompt("Bienvenido " + usuarioNuevo + " a la tienda de moda masculina GAZPACHO. ¿Qué te gustaría hacer?\n1. Ver todos los productos\n2. Filtrar por categoría\n3. Buscar producto por nombre\n4. Comprar\n5. Ver carrito\n6. Salir");

    while(opcion !== "6") {
        switch(opcion) {
            case "1":
                mostrarProductos();
                break;
            case "2":
                let categoria = prompt("Ingresa una categoria (Remeras, Camperas, Jeans, Calzado):");
                let productosFiltrados = filtrarPorCategoria(categoria);
                if (productosFiltrados.length > 0) {
                    let mensajeCategoria = ["Productos en la categoria " + categoria + ":\n"];
                    productosFiltrados.forEach(function(producto) {
                        mensajeCategoria.push(producto.id + ". " + producto.nombre + " - $" + producto.precio + "\n");
                    });
                    alert(mensajeCategoria.join(''));
                } else {
                    alert("No se encontraron productos en la categoria " + categoria + ".");
                }
                break;
            case "3":
                let nombre = prompt("Ingresa el nombre del producto a buscar:");
                let productoEncontrado = buscarProductoPorNombre(nombre);
                if (productoEncontrado) {
                    alert("Producto encontrado:\n" + productoEncontrado.id + ". " + productoEncontrado.nombre + " - $" + productoEncontrado.precio + " (" + productoEncontrado.categoria + ")");
                } else {
                    alert("No se encontro ningun producto con el nombre " + nombre + ".");
                }
                break;
            case "4":
                comprarProducto();
                break;
            case "5":
                mostrarCarrito();
                break;
            default:
                alert("Opción invalida. Por favor, intenta otra opcion.");
                break;
        }
        opcion = prompt("¿Que te gustaría hacer ahora?\n1. Ver todos los productos\n2. Filtrar por categoría\n3. Buscar producto por nombre\n4. Comprar\n5. Ver carrito\n6. Salir");
    }

    alert("Gracias por visitar GAZPACHO. Te esperamos pronto!!");
}

iniciarTienda();
