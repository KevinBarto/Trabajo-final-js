
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
const arneses = [arnes1 ,arnes2 ,arnes3];
const tablas = [tabla1 , tabla2 , tabla3];
const kites = [kite1 , kite2 , kite3];

// Selector de Arnese
const btnArnes = document.querySelector("#btnArnes");
btnArnes.onclick = function (){ 
    generarARNES();
}

function generarARNES(){
    document.querySelector("#agregarProduc");
    for (let arnes of arneses){
        const arnesDOM = document.createElement(`article`);
        arnesDOM.innerHTML=`<h4>Marca: ${arnes.nombre}</h4>
        <h5>Precio: ${arnes.precio}</h5>`
 


const arnesBtn = document.createElement(`button`);
arnesBtn.innerText=`agregar`;

arnesBtn.onclick = function () {
    carrito.push(arnes)
}

document.querySelector("#agregarProduc").append(arnesDOM , arnesBtn)

    }
}

// Selector de Tablas

const btnTablas = document.querySelector("#btnTabla");
btnTablas.onclick = function (){
    generarTABLA()
}

function generarTABLA() {
    document.querySelector("#agregarProduc");
    for (let tabla of tablas){
        const tablaDOM = document.createElement(`article`);
        tablaDOM.innerHTML=`<h4>Marca: ${tabla.nombre}</h4>
        <h5>Precio: ${tabla.precio}</h5>`;

    const tablaBtn = document.createElement(`button`)
    tablaBtn.innerText=`agregar`;

    tablaBtn.onclick = function (){
        carrito.push(tabla);
    };

    document.querySelector("#agregarProduc").append(tablaDOM , tablaBtn);


    };
};

// Selector Kites
const btnKite = document.querySelector("#btnKite");
btnKite.onclick = function () {
    generarKite()
};

function generarKite() {
    document.querySelector("#agregarProduc");
    for (let kite of kites){
        const kiteDOM = document.createElement(`article`);
        kiteDOM.innerHTML=`<h4>Marca: ${kite.nombre}</h4>
        <h5>Precio: ${kite.precio}</h5>`;
    
    const kiteBtn = document.createElement(`button`)
    kiteBtn.innerText=`agregar`;

    kiteBtn.onclick = function () {
        carrito.push(kite)
    }

    


    document.querySelector("#agregarProduc").append(kiteDOM , kiteBtn)

    
    }

}

// JSON
const json = JSON.stringify(carrito)

localStorage.setItem("carrito" , json)

const carritoJSON = JSON.parse(localStorage.getItem("carrito"))

console.log(carritoJSON)

// no anda y estoy al borde del colapso ajaj
