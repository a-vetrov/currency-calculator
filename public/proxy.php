<?php
// Set your return content type
header('Access-Control-Allow-Origin: *');
header('Content-type: application/xml');

// Website url to open
$url = 'http://www.cbr.ru/scripts/XML_daily.asp' ;
if ($_GET["date_req"]) $url = $url.'?date_req='.$_GET["date_req"] ;

// Get that website's content
$handle = fopen($url, "r");

// If there is something, read and return
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>