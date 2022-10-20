
async function fetchArnes(){
    const resp = await fetch(`./arnes.json`)
    return await resp.json()
}

async function fetchTablas(){
    const resp = await fetch(`./tabla.json`)
    return await resp.json()
}

async function fetchKite(){
    const resp = await fetch(`./kite.json`)
    return await resp.json()
}


// variantes y arrays
let carrito = [];
let arneses = [];
let tablas = [];
let kites = [];

fetchArnes().then(productos=>{
    arneses = productos
    generarARNES()
})

fetchTablas().then(productos=>{
    tablas = productos
    generarTABLA()
})

fetchKite().then(productos=>{
    kites = productos
    generarKite()
})

// Selector de Arnese
const btnArnes = document.querySelector("#btnArnes");
btnArnes.onclick = function (){ 
    generarARNES();
}

function generarARNES(){
    document.querySelector("#agregarProduc").innerHTML = ''
    for (let arnes of arneses){
        const arnesDOM = document.createElement(`article`);
        arnesDOM.innerHTML=`<h4>Marca: ${arnes.nombre}</h4>
        <h5>Precio: ${arnes.precio}</h5>`
 


const arnesBtn = document.createElement(`button`);
arnesBtn.innerText=`agregar`;

arnesBtn.onclick = function () {
    carrito.push(arnes);
    actualizarCarrito();
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
    document.querySelector("#agregarProduc").innerHTML = ''
    for (let tabla of tablas){
        const tablaDOM = document.createElement(`article`);
        tablaDOM.innerHTML=`<h4>Marca: ${tabla.nombre}</h4>
        <h5>Precio: ${tabla.precio}</h5>`;

    const tablaBtn = document.createElement(`button`)
    tablaBtn.innerText=`agregar`;

    tablaBtn.onclick = function (){
        carrito.push(tabla);
        actualizarCarrito();
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
    document.querySelector("#agregarProduc").innerHTML = ''
    for (let kite of kites){
        const kiteDOM = document.createElement(`article`);
        kiteDOM.innerHTML=`<h4>Marca: ${kite.nombre}</h4>
        <h5>Precio: ${kite.precio}</h5>`;
    
    const kiteBtn = document.createElement(`button`)
    kiteBtn.innerText=`agregar`;

    kiteBtn.onclick = function () {
        carrito.push(kite)
        actualizarCarrito() 
    }

    document.querySelector("#agregarProduc").append(kiteDOM , kiteBtn)

    
    }

}

// JSON
function actualizarCarrito() {
    const json = JSON.stringify(carrito)
    localStorage.setItem("carrito", json)
    const carritoJSON = JSON.parse(localStorage.getItem("carrito"))
    carritoJSON.push(carrito)
    // console.log(carritoJSON)

}
    
const mostrarCarro = document.querySelector("#mostrarCarrito");
mostrarCarro.onclick = mostrarCarrito
    
// Visualizar Carrito
function mostrarCarrito() {
    document.querySelector("#carrito").innerHTML=``
    carrito.forEach((Producto , index)=>{
        let recibo = document.createElement('article');
        recibo.innerHTML=`
        <h1>Sus prductos son:</h1>
        <span>${Producto.nombre}
        ${Producto.precio}</span>
        `
        const eliminar =document.createElement("button")
        eliminar.innerText=`Eliminar Producto`
        
        eliminar.addEventListener(`click`, () => {
            carrito.splice(index,1)
            mostrarCarrito()
        })
    
        document.querySelector("#carrito")


const finalizar = document.createElement("button")
finalizar.innerText=`Finalizar Compra`

finalizar.addEventListener(`click` , ()=>{
    
    Swal.fire({
        
        
        title: 'ingrese su Nombre para finalizar la compra',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Gracias ${result.value.login} ESPERO VERTE EN REACT<3'`,
            imageUrl: result.value.avatar_url
          })
        }
      })
      document.querySelector("#carrito").innerHTML=``

})

        document.querySelector("#carrito").append(recibo , eliminar , finalizar)
        
    
    })
    
}

// document.querySelector("#carrito").innerHTML=``
// const finalizar = document.createElement("button")
// finalizar.innerText=`Finalizar Compra`

// finalizar.addEventListener(`click` , ()=>{
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Compra Exitosa',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     mostrarCarrito()

// })


// const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false
//   })
  
//   swalWithBootstrapButtons.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {
//       swalWithBootstrapButtons.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     } else if (
//       /* Read more about handling dismissals below */
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire(
//         'Cancelled',
//         'Your imaginary file is safe :)',
//         'error'
//       )
//     }
//   })








// Buenas Kevin! Cómo va?

// Lo que tenes del JSON en local storage esta bien, si que anda! Solo que tenes que llamarlo cuando actualizas el carrito, metelo en una función

// // JSON
// function actualizarCarrito() {
//     const json = JSON.stringify(carrito)
//     localStorage.setItem("carrito", json)
//     const carritoJSON = JSON.parse(localStorage.getItem("carrito"))
//     console.log(carritoJSON)
// }


// Y usala cuando mandas productos al carrito

//         kiteBtn.onclick = function () {
//             carrito.push(kite)
//             actualizarCarrito()  // Acá, despues de agregar
//         }


// Te recomiendo limpiar el HTML cuando cambias el filtro, si no se puede generar mil veces lo mismo y queda feo.. jaja en la primera linea de las funciones generarArnes, Kite y Tabla, podes limpiar el html igualando a ""

// function generarTABLA() {
//     document.querySelector("#agregarProduc").innerHTML = ''
//     ...


// Faltaría poder ver el carrito de alguna forma..

// Te animas a sumar estos cambios? Cualquier cosa me consultas.

// Abrazo!