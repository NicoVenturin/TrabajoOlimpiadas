<?php session_start();
    
    $conexion = mysqli_connect(hostname:"localhost", username:"root", password:"", database:"bd_ecommerce");
    if($conexion){
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["precioTotal"]) && isset($_POST["arrayArticulos"])) {
        $precio = $_POST["precioTotal"];
        $arrayArticulos=json_decode($_POST['arrayArticulos']); 
        
        sort($arrayArticulos);
        $arrayCopy = [];
        $arrayCopyCants=[];
        $indexCants = 0;
        for($x = 0; $x<count($arrayArticulos);$x++){
            if($x==0){
                $arrayCopy[]=$arrayArticulos[$x];
                $arrayCopyCants[]=1;
            }
            else{
                if($arrayArticulos[$x] == $arrayArticulos[$x-1]){
                    $arrayCopyCants[$indexCants]++;
                }
                else{
                    $arrayCopy[]=$arrayArticulos[$x];
                    $arrayCopyCants[]=1;
                    $indexCants++;
                }
            }
        }

        $fecha= date('Y-m-d');    
        $id_usuario = $_SESSION['id_usuario'];
        $sql = "SELECT MAX(id_pedido) AS max_id FROM pedidos;";
        $res = mysqli_query($conexion, $sql);
        $arr = mysqli_fetch_array($res);
    
        
        $id_pedido = intval($arr[0]);
        $id_pedido = $id_pedido + 1 ;
    
    
        $consulta = "INSERT INTO `pedidos` (`id_pedido`, `id_usuario`, `fecha`, `precioTotal`) VALUES ('$id_pedido', '$id_usuario', '$fecha', '$precio')";

        if (mysqli_query($conexion, $consulta)) {
            echo "Pedido Registrado.";
        } else {
            echo "Error al guardar los datos: " . mysqli_error($conexion);
        }
        
        for($i = 0; $i<count($arrayCopy);$i++){
            $sql2 = "SELECT MAX(id_art_x_ped) AS max_id_art FROM `articulos x pedido`;";
            $res2 = mysqli_query($conexion, $sql2);
            $arr2 = mysqli_fetch_array($res2);
            $id_art_x_ped = intval($arr2[0]);
            $id_art_x_ped = $id_art_x_ped + 1;
            $consulta2 = "INSERT INTO `articulos x pedido` (id_art_x_ped, id_pedido, `nombre_art`, cantidad) VALUES ('$id_art_x_ped', '$id_pedido', '$arrayCopy[$i]', '$arrayCopyCants[$i]')";
        }
        if(mysqli_query($conexion,$consulta2)){
            echo "Articulos Registrados.";
        }
        else{
            echo "Error al guardar los productos: " . mysqli_error($conexion);
        }
        

        mysqli_close($conexion);
    }
    else {
        echo "No data received";
    }
}
    
else {
    die("Error en la conexión a la base de datos: " . mysqli_connect_error());
} 
?>
