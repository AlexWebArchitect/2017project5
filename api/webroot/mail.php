<?php
    $mysqli = mysqli_connect("db", "root", "phpapptest", "noticeboard");
	if (mysqli_connect_errno($mysqli))
		echo "Не удалось подключиться к MySQL: " . mysqli_connect_error();
        
	if (!$mysqli->set_charset("utf8")) {
    	printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
    	exit();
	}

    $method = $_SERVER['REQUEST_METHOD'];
    if ('POST' === $method) {
        function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = '') { 
            $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";
            $subject = "=?UTF-8?B?".base64_encode($subject)."?=";

            $headers = "From: $from_user <$from_email>\r\n" . "MIME-Version: 1.0" . "\r\n" . "Content-type: text/html; charset=UTF-8" . "\r\n"; 
            return mail($to, $subject, $message, $headers); 
        }
        $toE = $_POST['to'];
        $from_userE = $_POST['from_user'];
        $from_emailE = $_POST['from_email'];
        $subjectE = $_POST['subject'];
        $messageE = $_POST['message'];
        if (mail_utf8($toE, $from_userE, $from_emailE, $subjectE, $messageE)) {
            echo "success";
        } else {
            echo "failure";
        }
    }
?>