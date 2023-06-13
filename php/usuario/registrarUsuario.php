
<?php

    require_once '../config.php';

    $valido['success']=array('success'=>false, 'mensaje'=>"");

    if($_POST){
        $correo=$_POST['correo'];
        $password=md5($_POST['password']);
        $nombre= $_POST['usuario'];

      // echo $correo;
        
        $sql= "SELECT * FROM USUARIO WHERE CORREO='$correo'";
        $resultado= $cx->query($sql);
        $n= $resultado->num_rows;
        
        if($n==0){
            $sqlInsertar="INSERT INTO USUARIO VALUES(null,'$correo','$password','$nombre')";
            if($cx->query($sqlInsertar)==true){
                $valido['success']=true;
                $valido['mensaje']="Se ha registrado a $nombre  satisfactoriamente.";
            }else{
                $valido['success']=false;
                $valido['mensaje']="OCURRIÓ UN ERROR: No se guardo nada.";
            }
        }else{
            $valido['success']=false;
            $valido['mensaje']="El correo ingresado ya existe.";
        }   
    }
    else{
        $valido['success']=false;
        $valido['mensaje']="No se ha guardado";
    }


    echo json_encode($valido);

?>