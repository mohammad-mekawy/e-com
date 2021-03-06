<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['sendemail1'])){
    $name  = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['PhoneNum'],FILTER_SANITIZE_NUMBER_INT);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);

    $formErrors = array();
	
    if(empty($name)){
        $formErrors[] = "يجب اضافة اسمك";
    }elseif(empty($phone)){
        $formErrors[] = "يجب اضافة رقم الهاتف";
    }elseif(empty($email)){
        $formErrors[] = "يجب اضافة البريد الإلكترونى";
    }
    if(empty($formErrors)){
            $emails = array('kashif@happenize.com','info@happenize.com','bd@happenize.com');
			
			for($i=0;$i<count($emails);$i++){
				$mail = new PHPMailer;
				$mail->SMTPDebug = 1;  
				$mail->isSMTP();                            // Set mailer to use SMTP
				$mail->Host = 'smtp.gmail.com';             // Specify main and backup SMTP servers
				$mail->SMTPAuth = true;                     // Enable SMTP authentication
				$mail->Username = '';          // SMTP username
				$mail->Password = ''; // SMTP password
				$mail->SMTPSecure = 'ssl';                            
				$mail->Port = 465;  
				$mail->isHTML(true);  // Set email format to HTML

				$mail->setFrom('');
				$mail->addAddress($emails[$i]); 

				//$mail->isHTML(true);  // Set email format to HTML

               $bodyContent = '<h3 style="font-size:18px; margin-bottom:12px;">Name: '. $name .'</h3><br>';
               $bodyContent .= '<h3 style="font-size:18px; margin-bottom:12px;">Email: '. $email .'</h3><br>';
               $bodyContent .= '<h3 style="font-size:18px; margin-bottom:12px;">Phone: '. $phone .'</h3><br>';

               $mail->Subject = 'FREE QUOTATION Form';
               $mail->Body    = $bodyContent;
            //    $mail->send();
               if(!$mail->Send()) {
                    echo "Error while sending Email.";
                    var_dump($mail);
                } else {
                    echo "Email sent successfully";
                }
                header("Location: index.html");
			}
    }
}

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['sendemail6'])){

    $name  = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['PhoneNum'],FILTER_SANITIZE_NUMBER_INT);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
    if(isset($_POST['discussform'])){
        foreach($_POST['discussform'] as $item){
            $df .= $item . " - ";
        }
    }
    if(isset($_POST['letspartner'])){
        foreach($_POST['letspartner'] as $item){
            $df .= $item . " - ";
        }
    }
    if(isset($_POST['webdesign'])){
        foreach($_POST['webdesign'] as $item){
            $df .= $item . " - ";
        }
    }
    if(isset($_POST['webdevelop'])){
        foreach($_POST['webdevelop'] as $item){
            $df .= $item . " - ";
        }
    }
    if(isset($_POST['mobileapp'])){
        foreach($_POST['mobileapp'] as $item){
            $df .= $item . " - ";
        }
    }
    if(isset($_POST['digitalmarket'])){
        foreach($_POST['digitalmarket'] as $item){
            $df .= $item . " - ";
        }
    }
    if(isset($_POST['getaquote'])){
        foreach($_POST['getaquote'] as $item){
            $df .= $item . " - ";
        }
    }


    $formErrors = array();
	
    if(empty($name)){
        $formErrors[] = "يجب اضافة اسمك";
    }elseif(empty($phone)){
        $formErrors[] = "يجب اضافة رقم الهاتف";
    }elseif(empty($email)){
        $formErrors[] = "يجب اضافة البريد الإلكترونى";
    }
    if(empty($formErrors)){
            $emails = array('kashif@happenize.com','info@happenize.com','bd@happenize.com');
			
			for($i=0;$i<count($emails);$i++){
				$mail = new PHPMailer;
				$mail->SMTPDebug = 1;  
				$mail->isSMTP();                            // Set mailer to use SMTP
				$mail->Host = 'smtp.gmail.com';             // Specify main and backup SMTP servers
				$mail->SMTPAuth = true;                     // Enable SMTP authentication
				$mail->Username = '';          // SMTP username
				$mail->Password = ''; // SMTP password
				$mail->SMTPSecure = 'ssl';                            
				$mail->Port = 465;  
				$mail->isHTML(true);  // Set email format to HTML

				$mail->setFrom('');
				$mail->addAddress($emails[$i]); 

				//$mail->isHTML(true);  // Set email format to HTML

               $bodyContent = '<h3 style="font-size:18px; margin-bottom:12px;">Name: '. $name .'</h3><br>';
               $bodyContent .= '<h3 style="font-size:18px; margin-bottom:12px;">Email: '. $email .'</h3><br>';
               $bodyContent .= '<h3 style="font-size:18px; margin-bottom:12px;">Phone: '. $phone .'</h3><br>';
               $bodyContent .= '<h3 style="font-size:18px; margin-bottom:12px;">Check Box: '. $df .'</h3><br>';

               $mail->Subject = 'FREE QUOTATION Form';
               $mail->Body    = $bodyContent;
            //    $mail->send();
               if(!$mail->Send()) {
                    echo "Error while sending Email.";
                    var_dump($mail);
                } else {
                    echo "Email sent successfully";
                }
                header("Location: index.html");
			}
    }
}
?>
