<?php

// $recaptcha=$_POST['g-recaptcha-response'];
// $rec['Error'] = 'No captcha enter';

// function SiteVerify($url)
// {
//     $curl = curl_init();
//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($curl, CURLOPT_TIMEOUT, 15);
//     curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36");
//     $curlData = curl_exec($curl);
//     curl_close($curl);
//     return $curlData;
// }


        if($_POST['name']){
            foreach ($_POST as $key=>$item){
                    $message .= $key . ' - ' . $item . "\n";
            }
            $infoF = '';
            $infoF .= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'].'/wp-content'.$fI[1]."\n";
            $to      = 'mr.andrey@bigmir.net';
            $subject = "Зворотній зв'язок";
            $message .= $infoF;
            mail($to, $subject, $message);
           echo 'succes';
        }else {
           echo 'fail';
        };



// //    print_r($infoF);
//     }
// }
// else
// {
// //    echo 0;
    // echo json_encode($rec['Error']);


//print_r($_POST);
//print_r($_FILES);
//print_r($nameDir);