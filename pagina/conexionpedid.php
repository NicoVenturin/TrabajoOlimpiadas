<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "bd_ecommerce";

$conn =mysqli_connect($host,$user,$pass,$db);

if($conn){
    $sql = "SELECT * FROM pedidos";
    $result = mysqli_query($conn,$sql);
    $data = array();
    while($row=mysqli_fetch_assoc($result)){
        $data [] = $row;
    }
    $jsondata = json_encode($data);
    echo $jsondata;
}
else{
    echo "error en la conexion";

}
?>