const container = document.getElementById('cardcontainer');
//const precioTotalContainer = document.getElementById('precioTotalContainer');
const carritopc = document.getElementById('nav-lista')
const cardcontainer = document.getElementById('cardcontainer');
var arraytexto = [];
var arrayNombresCarrito = [];
var carrito = [];
var precios = [];
var preciosCarrito = [];
var precioTotal = 0;
var index = 0;
const precioTotalContainer = document.createElement('div');
const botonComprar = document.createElement('button');
const botonEliminarTodo = document.createElement('button');
botonEliminarTodo.innerHTML = "Vaciar Carrito";
botonComprar.innerHTML = "Comprar";
precioTotalContainer.innerHTML = `<span style="color: #FBFFA9;">Precio Total: $0</span>`;
carritopc.appendChild(precioTotalContainer);
carritopc.appendChild(botonEliminarTodo);
carritopc.appendChild(botonComprar);
function comprarCarrito(){ //poner acciones al comprar cosas
  alert("Se realizo el pedido");
  var stringArray = JSON.stringify(arrayNombresCarrito);          
  var dataToSend1 = "precioTotal=" + encodeURIComponent(precioTotal)+"&arrayArticulos=" + encodeURIComponent(stringArray);
  //var dataToSend2 = "arrayArticulos=" + encodeURIComponent(stringArray);
  // Prepare the data to send
  var xhr = new XMLHttpRequest();
  // Create a new XMLHttpRequest object
  xhr.open("POST", "js/art.php", true);
  
  // Specify the request method, PHP script URL, and asynchronous
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
  // Set the content type
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
  
          // Check if the request is complete
          if (xhr.status === 200) {
  
              // Check if the request was successful
              console.log(xhr.responseText);
              // Output the response from the PHP script
          } else {
              console.error("Error:", xhr.status);
              // Log an error if the request was unsuccessful
          }
  
      }
  
  }
      ;
  xhr.send(dataToSend1);     
  //xhr.send(dataToSend2);
  eliminarTodo();

}
function eliminarTodo(){
  carrito.splice(0,carrito.length);
  preciosCarrito.splice(0,preciosCarrito.length);
  arrayNombresCarrito.splice(0,arrayNombresCarrito.length);
  precioTotal = 0;
  carritopc.innerHTML = '';
  carritopc.appendChild(precioTotalContainer);
  carritopc.appendChild(botonEliminarTodo);
  carritopc.appendChild(botonComprar);
  precioTotalContainer.innerHTML = `<span style="color: #FBFFA9;">Precio Total:${precioTotal}</span>`;
}
const api = fetch('conexionbd.php')
            .then(res=>res.json())
            .then(function(datos){
                datos.forEach(dato => {
                    const card = document.createElement('div');
                    arraytexto[index] = dato.nombre_art;                  
                    precios[index]=Math.round(dato.precio);
                    card.innerHTML = 
                    `<div class="card" style="
                                  background-color: #ffffff;
                                  display: flex;
                                  flex-direction: column;
                                  border: 5px solid black;
                                  border-radius: 10px;
                                  margin: 20px;
                                  overflow: hidden;">
                            <div class="card-body" style="
                                  display:flex;
                                  justify-content: space-between;
                                  ">
                              <div>
                              <h2 id="tituloTarjeta" class="card-title">${arraytexto[index]}</h2>
                              <p style="font-size: 1.5em">${dato.descripcion}</p>
                              <p class="card-text" style="font-size: 1.5em">$${Math.round(dato.precio)}</p>
                              </div>

                              <a href="#" id="${arraytexto[index]}" class="btn btn-primary" style="color: black">
                              <button>Agregar al carrito</button>
                              </a>
                            </div>
                          </div>`;
                    cardcontainer.appendChild(card);
                    index++;
                });
                //precioTotalContainer.innerHTML = `Precio Total:${precioTotal}`;    
            }).then(function(){
              var clases = document.getElementsByClassName('btn');

              for(var i=0;i<clases.length;i++){
                clases[i].addEventListener('click',function(){                  
        
                  for(let i=0;i<arraytexto.length;i++){
                    if(arraytexto[i] == this.id){
                      const item = document.createElement('li');
                      carritopc.removeChild(precioTotalContainer);
                      carritopc.removeChild(botonEliminarTodo);
                      carritopc.removeChild(botonComprar);
                      item.innerHTML = `
                      <span style="color: #FBFFA9;">
                      ${arraytexto[i]} $${precios[i]}
                      </span>
                      <button class="boton-eliminar">Eliminar</button>`;
                      arrayNombresCarrito.push(arraytexto[i]);
                      carrito.push(item);
                      preciosCarrito.push(precios[i]);
                      precioTotal = precioTotal+precios[i];
                      const botonEliminar = item.querySelector('.boton-eliminar');
                      //const precioTotalContainer = document.createElement('div');
                      precioTotalContainer.innerHTML = `<span style="color: #FBFFA9;">Precio Total:${precioTotal}</span>`;
              
                      botonEliminar.addEventListener('click', () => {
                        const indiceItem = carrito.indexOf(item);
                        const indicePrecio = preciosCarrito.indexOf(precios[i]);
                        carrito.splice(indiceItem,1);
                        arrayNombresCarrito.splice(indiceItem,1);
                        precioTotal = precioTotal-preciosCarrito[indicePrecio];
                        preciosCarrito.splice(indicePrecio,1);
                        item.remove();
                        precioTotalContainer.innerHTML = `<span style="color: #FBFFA9;">Precio Total:${precioTotal}</span>`;
                      });
                      botonEliminarTodo.addEventListener('click',eliminarTodo);
                      botonComprar.addEventListener('click',comprarCarrito);
                      carritopc.appendChild(item);
                      carritopc.appendChild(precioTotalContainer);
                      carritopc.appendChild(botonEliminarTodo);
                      carritopc.appendChild(botonComprar);
                    }

                  }
                })  
               }
            });


            
