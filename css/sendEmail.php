<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['PhoneNum'];

	$email_from = 'Happenize landing page';

	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user $name.\n".
                            "His email:\n $email".
                            "His number:\n $PhoneNum".


  $to = "mohammad.mekawy92@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);
  header('Location: thank-you.html');


function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>
