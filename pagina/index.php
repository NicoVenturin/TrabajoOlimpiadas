<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ecommerce</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
  <body>

    <header>
      <div id="cel">
        <div id="menu2">
          <button id="abrir" class="abrir-menu"><i class="bi bi-list" style="color: #FBFFA9;"></i></button>
          <img id="logo" src="img/psudologo.png" alt="">
          <nav class="nav" id="nav">
        <button id="cerrar" class="cerrar-menu" style="color: #FBFFA9;"><i class="bi bi-x"></i></button>
            <ul id="nav-list" class="nav-list">
                <i style="color: #FBFFA9;" class="bi bi-person-circle"></i>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#info">Nosotros</a></li>
                <li><a href="#lamparas">Productos</a></li>
                <li><a href="#contactanos">Contactanos</a></li>
        </ul>
          </nav>
        </div>
        <div>
          <input type="text" placeholder="productos" style="width: 70%;">
          <div id="carrito2">
            <button id="abrir3" class="abrir-carrito">
            <i style="color: #FBFFA9; font-size: 1.5em;" class="bi bi-cart4"></i>
            </button>
            <nav class="nave2" id="nav3">
          <button id="cerrar3" class="cerrar-carrito" style="color: #FBFFA9;">
            <i class="bi bi-x"></i>
          </button>
              <ul id="nav-lista2" class="nav-list">
                <div id="licontainer"></div>
                  
                <div id="precioTotalContainer"></div>
              </ul>
            </nav>
          </div>
        </div>
        
      </div>

      <nav>
        <div id="primer">
          <img id="logo" src="img/psudologo.png" alt="">
          <div id="usuario">
            <input type="text" placeholder="productos">
            <i class="bi bi-person-circle" id="fotousu"></i>


            <div id="carrito">
              <button id="abrir2" class="abrir-carrito">
              <i style="color: #FBFFA9; font-size: 1.5em;" class="bi bi-cart4"></i>
              </button>
              <nav class="nave" id="nav2">
            <button id="cerrar2" class="cerrar-carrito" style="color: #FBFFA9;">
              <i class="bi bi-x"></i>
            </button>
                <ul id="nav-lista" class="nav-list">
                  <!---aca va el contenido-->
                  
                  <div id="licontainer"></div>
                  
                  <div id="precioTotalContainer"></div>



                </ul>
              </nav>
            </div>



          </div>
        </div>
        <ul id="menu1">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#info">Nosotros</a></li>
            <li><a href="#lamparas">Productos</a></li>
            <li><a href="#contactanos">Contactanos</a></li>
        </ul>
    </nav>

    </header>

    

    <div id="todo">

      <div id="cardcontainer" class="cardcontainer">

      </div>
    </div>

    <footer>footer</footer>

    <script src="js/menu.js"></script>
    <script src="js/productos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>