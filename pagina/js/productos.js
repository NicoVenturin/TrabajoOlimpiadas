const container = document.getElementById('cardcontainer');
//const precioTotalContainer = document.getElementById('precioTotalContainer');
const carritopc = document.getElementById('nav-lista')
const cardcontainer = document.getElementById('cardcontainer');
var arraytexto = [];
var carrito = [];
var precios = [];
var preciosCarrito = [];
var precioTotal = 0;
var index = 0;
const precioTotalContainer = document.createElement('div');
const botonComprar = document.createElement('button');
botonComprar.innerHTML = "Comprar";
precioTotalContainer.innerHTML = `<span style="color: #FBFFA9;">Precio Total: $0</span>`;
carritopc.appendChild(precioTotalContainer);
carritopc.appendChild(botonComprar);
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
                      carritopc.removeChild(botonComprar);
                      item.innerHTML = `
                      <span style="color: #FBFFA9;">
                      ${arraytexto[i]} $${precios[i]}
                      </span>
                      <button class="boton-eliminar">Eliminar</button>`;
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
                        precioTotal = precioTotal-preciosCarrito[indicePrecio];
                        preciosCarrito.splice(indicePrecio,1);
                        item.remove();
                        precioTotalContainer.innerHTML = `<span style="color: #FBFFA9;">Precio Total:${precioTotal}</span>`;
                      });
                      botonComprar.addEventListener('click', ()=>{
                        alert("Se realizo el pedido");
                      })
                      carritopc.appendChild(item);
                      carritopc.appendChild(precioTotalContainer);
                      carritopc.appendChild(botonComprar);
                    }

                  }
                })  
               }
            });

