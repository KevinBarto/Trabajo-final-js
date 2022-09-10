
// Objetos
class Producto{
    constructor (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
}
// OBJ ARNESES
const arnes1 = new Producto("duotone", 150000);
const arnes2 = new Producto("best" , 170000);
const arnes3 = new Producto("dakine", 135000);


// OBJ TABLAS
const tabla1 = new Producto("vision", 350000);
const tabla2 = new Producto("prime" , 350000);
const tabla3 = new Producto("cabrinha" , 450000);


// OBJ KITES
const kite1 = new Producto("slingshot" , 2300);
const kite2 = new Producto("cabrinha", 2500);
const kite3 = new Producto("duotone", 2600);


// variantes y arrays
const carrito = [];

// Entrada
let seg =prompt("Bienvenido a la tienda! \n Desea acceder?");

while(seg != "no"){
let busqueda =Number(prompt("Que estas buscando? Elija una opcion \n 1:Arnes \n 2:Tablas \n 3:Kites" ));

if (busqueda ==  1){
    Arneses()
}else if(busqueda ==  2){
    Tablas()
}else if(busqueda ==  3){
    Kites()
}else alert("tu opcion no es correcta");


// pusheo de objetos en array
function Arneses() {
    let opc = Number(prompt("Arneses: \n 1.Duotone \n 2.Best \n 3.Dakine"))
    switch (opc) {
        case 1:
            carrito.push(arnes1)
        break;
        case 2:
            carrito.push(arnes2)
        break;
        case 3:
            carrito.push(arnes3)
        break;
    
        default: "tu opcion es incorrecta , vuelve a intentarlo"
            break;
    }
}

function Tablas() {
    let opc = Number(prompt("Tablas: \n 1.Vision\n 2.Prime \n 3.Cabrinha"))
    switch (opc) {
        case 1:
            carrito.push(tabla1)
        break;
        case 2:
            carrito.push(tabla2)
        break;
        case 3:
            carrito.push(tabla3)
        break;
    
        default: "tu opcion es incorrecta , vuelve a intentarlo"
            break;
    }
    
}

function Kites() {
    
    let opc = Number(prompt("Kites: \n 1.Slingshot \n 2.Cabrinha \n 3.Duotone"))
    switch (opc) {
        case 1:
            carrito.push(kite1)
        break;
        case 2:
            carrito.push(kite2)
        break;
        case 3:
            carrito.push(kite3)
        break;
    
        default:alert("Tu opcion es incorrecta")
            break;}
    
}
seg =prompt("Desea seguir comprando?")
}



// muestra de carrito
alert(carrito.forEach((Producto)=>{
        alert(`Tu producto es ${Producto.nombre} y el precio es ${Producto.precio}`)
})
);

let resultado = carrito.reduce((acc,Producto)=>{
        return acc + Producto.precio;
    },0);

alert("Precio TOTAL:$" + resultado);


alert("Gracias por tu compra! \n Nos vemos en DOM")