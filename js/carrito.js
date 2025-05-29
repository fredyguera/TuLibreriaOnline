class Producto{
    //Inicializamos las propiedades
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    //Creamos nuestro método
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito{
    constructor(){
        this.productos = [];
    }
    //Método para agregar producto
    agregarProducto(producto){
        this.productos.push(producto)
    }

    //Método para calcular el total
    calcularTotal(){
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }

    //Método para mostrar en lista los productos
    listarProductos(){
        return this.productos.map(pre => `<li> ${pre.mostrarDetalles()} </li>`).join('');
    }
}

const productosDisponibles = [
    new Producto(1, "EL TUNEL", 180),
    new Producto(2, "HIMNO", 150),
    new Producto(3, "EL PRINCIPITO", 130),
    new Producto(4, "EL VIAJE DEL ELEFANTE", 200),
    new Producto(5, "KAFKA EN LA ORILLA", 200),
    new Producto(6, "EL RETRATO DE DORIAN GRAY", 180),
    new Producto(7, "EL GATO NEGRO", 150),
    new Producto(8, "LA REBELION DE ATLAS", 380),
    new Producto(9, "EL ALQUIMISTA", 175)
];

const carrito = new Carrito();

//Crear función
function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProducto(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    document.getElementById("lista-productos").innerHTML = carrito.listarProductos();
    document.getElementById("total").textContent = carrito.calcularTotal();
}