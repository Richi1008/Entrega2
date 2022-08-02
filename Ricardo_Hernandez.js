class Producto {
    constructor(codigo_producto, nombre, marca, precio, stock) {
        this.codigo_producto = codigo_producto
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

}

const producto1 = new Producto(12548, "Cafe_Con_Leche", "Le cafe", 120, 40)
const producto2 = new Producto(14856, "Cafe_Con_Chocolate", "Nescafe", 110, 40)
const producto3 = new Producto(78944, "Cafe_Expreso", "Nespresso", 99, 40)
const producto4 = new Producto(65327, "Tisana", "Marina", 61, 40)
const producto5 = new Producto(63215, "Chocolate_Semi_Amargo", "Le cafe", 600, 40)
const producto6 = new Producto(84951, "Cafe_Americano", "Le cafe", 156, 40)


const Cafes = [producto1, producto2, producto3, producto4, producto5, producto6]


console.table(Cafes)


let respuesta 

do {

    const Cafe = new Producto(parseInt(prompt("Ingrese el codigo")), prompt("Ingrese el nombre"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el precio")), parseInt(prompt("Ingrese el stock")))

    Cafes.push(Cafe)

        do {
             respuesta = prompt("¿Desea Ingresar mas Productos ?").toLowerCase()
         } while(respuesta != "si" && respuesta != "no")

} while(respuesta != "no")

console.table(Cafes)
