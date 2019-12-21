<?
//        echo 1;
        if($_POST['name']){
           
            foreach ($_POST as $key=>$item){
                
                    $message .= $key . ' - ' . $item . "\n";
                    to      = 'gav.sqrt@gmail.com';
                    $subject = "Зворотній зв'язок";
                    $message .= $infoF;
        
                    mail($to, $subject, $message);
                    echo 'succes';
            }            else{

        }



//    print_r($infoF);
    }
}
else
{
//    echo 0;
    echo json_encode($rec['Error']);
    echo json_encode($_POST);
    echo json_encode($_FILES);
}
//print_r($_POST);
//print_r($_FILES);
//print_r($nameDir);