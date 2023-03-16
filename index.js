const nombreUsuario = prompt('ingrese su nombre')

alert('Bienvenido: ' + nombreUsuario)

class Producto {
    constructor(posicion,nombre, precio) {
        this.posicion = posicion
        this.nombre=nombre
        this.precio = precio
    }
}

const heladera = new Producto(1,'heladera',60000)
const television = new Producto(2,'television',30000)
const cocina = new Producto(3,'cocina',65000)
const lavarropas = new Producto(4,'lavarropas',70000)

const productos=[heladera,television,cocina,lavarropas]

let productoSeleccionado = prompt('elije el producto que quiera comprar: heladera-television-cocina-lavarropas')

let continuarComprando=true
const carritoDeCompras=[]

while(continuarComprando===true){

    const producto=productos.find(producto=>producto.nombre===productoSeleccionado)
    
if(producto){
    carritoDeCompras.push(producto)
}else{
    productoSeleccionado=prompt('Debes elegir un producto que este en la lista: heladera-television-cocina-lavarropas')

    continue
}


const decision= prompt('desea realizar otra compra? si-no')

if (decision==='si'){
    productoSeleccionado=prompt('Debes elegir un producto que este en la lista: heladera-television-cocina-lavarropas')
} else {
continuarComprando=false
}
}

console.log(carritoDeCompras)

let totalCompra = 0

carritoDeCompras.forEach(producto=>{
      totalCompra=totalCompra+producto.precio
})
alert('el total de tu compra es :'+ totalCompra)



