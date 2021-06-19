<?php
    extract($_REQUEST);
    $file=fopen("form/file.txt","a");

    fwrite($file,"name :");
    fwrite($file, $name ."\n");
    fwrite($file,"description :");
    fwrite($file, $description  ."\n");
    fclose($file);
    header("location: ../index.html");
 ?>
