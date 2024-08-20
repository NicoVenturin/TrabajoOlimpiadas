//const container = document.getElementById('cardcontainer');
//const precioTotalContainer = document.getElementById('precioTotalContainer');
const carritopc = document.getElementById('nav-lista')
const cardcontainer = document.getElementById('cardcontainer');
var arraytexto = [];
var carrito = [];
var precios = [];
var preciosCarrito = [];
var precioTotal = 0;
var index = 0;
const api = fetch('conexionusuario.php')
            .then(res=>res.json())
            .then(function(datos){
                datos.forEach(dato => {
                    const card = document.createElement('div');
                    arraytexto[index] = dato.usuario;                  
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
                              <h2 id="tituloTarjeta" class="card-title">nombre usuario: ${arraytexto[index]}</h2>
                              <p style="font-size: 1.5em">tipo usuario: ${dato.id_tip_usu}</p>
                              <p class="card-text" style="font-size: 1.5em">id: ${dato.id_usuario}</p>
                              </div>

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
                      item.innerHTML = `
                      <span style="color: #FBFFA9;">
                      ${arraytexto[i]} $${precios[i]}
                      </span>
                      <button class="boton-eliminar">Eliminar</button>`;
                      carrito.push(item);
                      preciosCarrito.push(precios[i]);
                      precioTotal = precioTotal+precios[i];
                      const botonEliminar = item.querySelector('.boton-eliminar');
                      //precioTotalContainer.innerHTML = `Precio Total:${precioTotal}`;
                      botonEliminar.addEventListener('click', () => {
                        const indiceItem = carrito.indexOf(item);
                        const indicePrecio = preciosCarrito.indexOf(precios[i]);
                        carrito.splice(indiceItem,1);
                        precioTotal = precioTotal-preciosCarrito[indicePrecio];
                        preciosCarrito.splice(indicePrecio,1);
                        item.remove();
                        //precioTotalContainer.innerHTML = `Precio Total:${precioTotal}`;
                      });
                      carritopc.appendChild(item);
                    }

                  }
                })  
               }
            });

