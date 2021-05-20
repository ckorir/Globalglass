<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "chrisruto.k@gmail.com";
$subject = "Websitemail";
$body = "This is an automated message. \n\n $message";

mail ($to,$subject,$body);

echo "Message sent";

?>
 