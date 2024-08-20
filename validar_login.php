<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $contraseña = $_POST["contraseña"];
    $valor = 1;
    $conexion = mysqli_connect("localhost", "root", "", "bd_ecommerce");

    if (!$conexion) {
        die("Error en la conexión a la base de datos: " . mysqli_connect_error());
    }

    $consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contraseña = '$contraseña'";
    $resultado = mysqli_query($conexion, $consulta);

    if (mysqli_num_rows($resultado) == 1) {
        echo "Inicio de sesión exitoso. ¡Bienvenido, $usuario!";
        $consultaAdmin = "SELECT id_tip_usu FROM usuarios WHERE usuario = '$usuario' AND contraseña = '$contraseña'";
        $resultadoAdmin = mysqli_query($conexion,$consultaAdmin);
        
        if($resultadoAdmin->num_rows > 0){
            while($row = $resultadoAdmin->fetch_assoc()){
                $valor = $row["id_tip_usu"];
            }
        }
        
        echo '<div>
            <h2>Redirección al Login</h2>
        <a href="pagina/index.php"><button id="boton">Volver al Login</button></a>
        </div> ';
        if($valor == 2){
            echo '¡Hola Admin ' .$usuario . '!';
            echo '<div>
            <h2>Redirección a la lista de usuarios</h2>
            <a href="pagina/listausu.html"><button id="boton">usuarios</button></a>
            </div> ';
        }
        // Aquí puedes redirigir al usuario a la página de inicio
    } 
    else {
        echo "Nombre de usuario o contraseña incorrectos";
        echo '<div id="blanco"> <h2>Redirección al Login</h2> <a href="login.html"><button id="boton">Volver al Login</button></a>        </div>';
    }

    mysqli_close($conexion);
}
?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Inicio de Sesión</title>
    <body id="cajita">
        
    </body>
</body>
</html>