<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $contraseña = $_POST["contraseña"];
    $direccion = $_POST["direccion"];

    $conexion = mysqli_connect("localhost", "root", "", "bd_ecommerce");
    

    if (!$conexion) {
        die("Error en la conexión a la base de datos: " . mysqli_connect_error());
    }
    /*
    $last_id = $consulta = "SELECT id_usuario FROM usuarios ORDER BY id_usuario DESC LIMIT 1;";*/

    $sql = "SELECT MAX(id_usuario) AS max_id FROM usuarios;";
    $res = mysqli_query($conexion, $sql);
    $arr = mysqli_fetch_array($res);
    echo "consulta en la bd: " . $arr[0] ; 

    echo "<br><br>";

    $id_usu = intval($arr[0]);
    $id_usu = $id_usu + 1 ;
    echo "suma para crear nuevo id de usuario: " . $id_usu ;

    $consulta = "INSERT INTO `usuarios` (id_usuario, usuario, direccion, id_tip_usu, contraseña) VALUES ('$id_usu', '$usuario', '$direccion', '1', '$contraseña')";

    if (mysqli_query($conexion, $consulta)) {
        echo "Registro exitoso. <a href='login.html'>Iniciar sesión</a>";
    } else {
        echo "Error al guardar los datos: " . mysqli_error($conexion);
    }

    mysqli_close($conexion);
}
?>