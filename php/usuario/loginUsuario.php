
<?php

require_once '../config.php';


$valido['success']=array('success'=>false, 'mensaje'=>"", 'usuario'=>"");


if($_POST){

    $correo=$_POST['correo'];
    $password=md5($_POST['password']);
    
    $sql= "SELECT * FROM USUARIO WHERE CORREO='$correo' AND PASSWORD='$password'";
    
    $resultado= $cx->query($sql);
    $n= $resultado->num_rows;

    if($n>0){
        $row= $resultado->fetch_array();
        $valido['success']=true;
        $valido['mensaje']="Bienvenidos al Sistema $row->correo";
        // $valido['correo']=$row['correo'];




    }else{
        $valido['success']=false;
        $valido['mensaje']="No existe el correo  $correo  registrado en el sistema";
    }
}
else{ $valido['success']=false; $valido['mensaje']="No se ha guardado"; } 

echo json_encode($valido);




?>
