<?php
/**
 *      This page is meant to output the Stock Price of Google in real-time data format. 
 *      The data will be picked by FusionWidgets real-time line chart and plotted on chart.
 *      You need to make sure that the output data doesn't contain any HTML tags or carriage returns.
 *      For the sake of demo, we'll just be generating a random value between 30 and 35 and returning the same.
 *      
 *      In real life applications, you can get the data from web-service or your own data systems, convert it into real-time data format and then return to the chart. 
 *
 */
          
//Generate a random value between 30 and 35
$randomValue =rand(30,35);
$randomValue1=rand(50,83);
$randomValue2=rand(13,25);
$randomValue3=rand(4,15);
$randomValue4=rand(3,15);
$randomValue5=rand(15,25);
//Get label for the data - time in format hh:mn:ss
$dateTimeLabel = date('h:i:s'); 
//Now write it to output stream
print "label=" . "$dateTimeLabel"."&value=" . $randomValue . "|" . $randomValue1 ."&dataStamp=".$dateTimeLabel ;
//echo(' "&label=" 11:23:34 . "&value=" . $randomValue . "&value=" . $randomValue1');
//print "&label=" . "&value=" . $randomValue2 .  ;
?>