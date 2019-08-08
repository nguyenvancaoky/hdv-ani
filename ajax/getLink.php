<?php
 include 'simple_html_dom.php';

header('Access-Control-Allow-Origin: *');  


 @$item = $_GET['item'];
 $app = '431960';

function login($data){
        $url = 'http://steamworkshop.download/online/steamonline.php';
        $login = curl_init();
        curl_setopt($login, CURLOPT_URL, $url );
        curl_setopt($login, CURLOPT_TIMEOUT, 40000);
        curl_setopt($login, CURLOPT_HEADER, 0);
        curl_setopt($login, CURLOPT_VERBOSE,1);
        curl_setopt($login, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0)');
        curl_setopt($login, CURLOPT_REFERER,'http://www.google.com');  //any fake referer
        curl_setopt($login, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($login, CURLOPT_CAINFO, '/cacert.pem');
        curl_setopt($login, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($login, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($login, CURLOPT_POST,1);
        curl_setopt($login, CURLOPT_FOLLOWLOCATION, 20);
        curl_setopt($login, CURLOPT_POSTFIELDS, $data);
        ob_start();
        return curl_exec ($login);
        ob_end_clean();
        curl_close ($login);
        unset($login);    
}

function grab_url($site){
    $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $site );
        curl_setopt($ch, CURLOPT_TIMEOUT, 40);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_VERBOSE,1);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0)');
        curl_setopt($ch, CURLOPT_REFERER,'http://www.google.com');  //any fake referer
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CAINFO, '/cacert.pem');
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 20);
    ob_start();
    return curl_exec ($ch);
    ob_end_clean();
    curl_close ($ch);
}



$get_info = grab_url('http://steamworkshop.download/download/view/'.$item);
$html_info = str_get_html($get_info);

$tra_ve = login('item='.$item.'&app='.$app);
$html = str_get_html($tra_ve);
$url = $html->find('a',0);
$url = $url->href;
if (!$url) {
        $url = 0;
}

?>

<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title><?php echo $item; ?></title>
        <style type="text/css">
            .loader,
            .loader:before,
            .loader:after {
              background: #ffffff;
              -webkit-animation: load1 1s infinite ease-in-out;
              animation: load1 1s infinite ease-in-out;
              width: 1em;
              height: 4em;
            }
            .loader {
              color: #ffffff;
              text-indent: -9999em;
              margin: 88px auto;
              position: relative;
              font-size: 11px;
              -webkit-transform: translateZ(0);
              -ms-transform: translateZ(0);
              transform: translateZ(0);
              -webkit-animation-delay: -0.16s;
              animation-delay: -0.16s;
            }
            .loader:before,
            .loader:after {
              position: absolute;
              top: 0;
              content: '';
            }
            .loader:before {
              left: -1.5em;
              -webkit-animation-delay: -0.32s;
              animation-delay: -0.32s;
            }
            .loader:after {
              left: 1.5em;
            }
            @-webkit-keyframes load1 {
              0%,
              80%,
              100% {
                box-shadow: 0 0;
                height: 4em;
              }
              40% {
                box-shadow: 0 -2em;
                height: 5em;
              }
            }
            @keyframes load1 {
              0%,
              80%,
              100% {
                box-shadow: 0 0;
                height: 4em;
              }
              40% {
                box-shadow: 0 -2em;
                height: 5em;
              }
            }
        </style>
    </head>
    <body>
        <div class="loader">Loading...</div>
    </body>
</html>