//variables para DOM
let classtitulo = document.querySelector(".titulo")
let classmensajes = document.querySelector(".mensajes")
let classlistaCompra = document.querySelector(".listaCompra")
let classproducto = document.getElementsByClassName("producto")

class Producto {
    constructor( nombre, precio){
        
        this.nombre = nombre,
        this.precio = precio
    }
    motrarInfoProducto(){
        console.log(`${this.nombre}: $${this.precio}`)
    }

}

const producto1 = new Producto("Azucar", 400)
const producto2 = new Producto("Leche", 450)
const producto3 = new Producto("Manteca", 430)
const producto4 = new Producto("Gaseosa", 200)
const producto5 = new Producto("Lavandina", 630)
const producto6 = new Producto("Yerba", 500)
//creo el array con los productos
const arrProductos=[producto1,producto2,producto3,producto4,producto5,producto6]
const arrProductosComprados = []
//Funciones 

function buscarProducto(arr){
//Recibe un array para buscar el producto que desea el cliente
        let mensaje = "Ingrese el nombre del producto que desea comprar " + JSON.stringify(arr)
        let nombreProducto = prompt(mensaje)
        let prodBuscado = arr.find(
            (producto) => producto.nombre.toUpperCase() == nombreProducto.toUpperCase()
        )
        return prodBuscado

}

function addProductos(producto){

    arrProductosComprados.push(producto)

   //A medida que los elementos se van agregando voy creando una lista con los mismo.
    let productoNuevo = document.createElement("li")
    productoNuevo.innerHTML = `${producto.nombre}----$${producto.precio}`
    productoNuevo.className = `producto`
    console.log(productoNuevo)
    classlistaCompra.appendChild(productoNuevo)
    
}   

function mostrarProductos(array){
    console.log("Nuestros productos a la venta son:")
    //array.forEach(mercaderia => mercaderia.motrarInfoProducto() );
}

function calcularTotal(arrProdCompr){
    let totalCompra = 0
    arrProdCompr.forEach( 
        (producto) => {
            totalCompra=totalCompra + producto.precio
        }
    )
    classtitulo.innerText = "Usted acaba de comprar los siguientes productos: "
    classmensajes.innerText =`El total de la compra es de ${totalCompra}`
    
}

let respuesta 


    console.log("Hola bienvenido al local, que desesa comprar")
    //mostrarProductos(arrProductos)

    do{
        let productoSeleccionado = buscarProducto(arrProductos)
        if(productoSeleccionado != undefined){
            addProductos(productoSeleccionado)
        }else{
            console.log("el articulo seleccionado no se encuentra")
            
        }
        respuesta = parseInt(prompt(`¿Desea comprar algo mas ? \n 1:si \n 2:no`))
    }while(respuesta==1)

    calcularTotal(arrProductosComprados)


