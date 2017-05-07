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
        $query = mysqli_query($mysqli, "SELECT * FROM `user`");
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
            echo "Error: " . $deletion . "<br>" . mysqli_error($mysqli);
        }
    }
    if ('POST' === $method) {
        $type = intval($_POST['type']);
        $login = $_POST['login'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $insertion = "INSERT INTO user (type, login, password, email) VALUES ('$type', '$login', '$password', '$email')";
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
            echo "Error: " . $insertion . "<br>" . mysqli_error($mysqli);
        }
    }
    if ('PUT' === $method) {
        parse_str(file_get_contents('php://input'), $_PUT);
        $id = intval($_PUT['id']);
        $type = intval($_PUT['type']);
        $login = $_PUT['login'];
        $password = $_PUT['password'];
        $email = $_PUT['email'];
        $edition = "UPDATE user SET type='$type', login='$login', password='$password', email='$email' WHERE id='$id'";
        if (mysqli_query($mysqli, $edition)) {
            $query = mysqli_query($mysqli, "SELECT * FROM `user` WHERE id=$id");
            if ($query) {
                $records = [];
                while ($record = mysqli_fetch_assoc($query)) {
                    $records[] = $record;
                }
            }
            $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
            echo $shipment;
        } else {
            echo "Error: " . $edition . "<br>" . mysqli_error($mysqli);
        }
    }
?>