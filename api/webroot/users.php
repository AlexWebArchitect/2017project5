<?php
    $mysqli = mysqli_connect("db", "root", "phpapptest", "noticeboard");
	if (mysqli_connect_errno($mysqli))
		echo "Не удалось подключиться к MySQL: " . mysqli_connect_error();
        
	if (!$mysqli->set_charset("utf8")) {
    	printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
    	exit();
	}
    
    $method = $_SERVER['REQUEST_METHOD'];
    if ('GET' === $method) {
        $query = mysqli_query($mysqli, "SELECT * FROM `user` ORDER BY id DESC");
        if ($query) {
            $records = [];
            while ($record = mysqli_fetch_assoc($query)) {
                $records[] = $record;
            }
        }
        $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
        echo $shipment;
    }

    if ('DELETE' === $method) {
        parse_str(file_get_contents('php://input'), $_DELETE);
        $userToDel = intval($_DELETE['id']);
        $deletion = "DELETE FROM `user` WHERE id='$userToDel'";
        if (mysqli_query($mysqli, $deletion)) {
            //echo "record deleted successfully";
        } else {
            $errormsg = " " . $deletion . "<br>" . mysqli_error($mysqli);
            $log = array("Error"=>$errormsg);
            $error = json_encode($log, JSON_UNESCAPED_UNICODE);
            echo $error;
        }
    }
    if ('POST' === $method) {
        $login = $_POST['login'];
        $password = $_POST['password'];
        $insertion = "INSERT INTO user (login, password) VALUES ('$login', '$password')";
        if (mysqli_query($mysqli, $insertion)) {
            $last_id = mysqli_insert_id($mysqli);
            if ($last_id) {
                $query = mysqli_query($mysqli, "SELECT * FROM `user` WHERE id=$last_id");
                if ($query) {
                    $records = [];
                    while ($record = mysqli_fetch_assoc($query)) {
                        $records[] = $record;
                    }
                }
                $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
                echo $shipment;
            }
        } else {
            $errormsg = " " . $insertion . "<br>" . mysqli_error($mysqli);
            $log = array("Error"=>$errormsg);
            $error = json_encode($log, JSON_UNESCAPED_UNICODE);
            echo $error;
        }
    }
?>