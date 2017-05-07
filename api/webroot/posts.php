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
        $last = intval($_GET['last']);
        if (!$last) {
            $query = mysqli_query($mysqli, "SELECT notice.*, user.login FROM `notice` INNER JOIN user ON notice.user_id = user.id ORDER BY id DESC");
            if ($query) {
                $records = [];
                while ($record = mysqli_fetch_assoc($query)) {
                    $records[] = $record;
                }
            }
            $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
            echo $shipment;
        }

        if ($last) {
            $query = mysqli_query($mysqli, "SELECT notice.*, user.login FROM `notice` INNER JOIN user ON notice.user_id = user.id ORDER BY id DESC LIMIT 0, $last");
            if ($query) {
                $records = [];
                while ($record = mysqli_fetch_assoc($query)) {
                    $records[] = $record;
                }
            }
            $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
            echo $shipment;
        }
    }

    if ('DELETE' === $method) {
        parse_str(file_get_contents('php://input'), $_DELETE);
        $postToDel = intval($_DELETE['id']);
        $deletion = "DELETE FROM `notice` WHERE id='$postToDel'";
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
        $title = $_POST['title'];
        $user_id = intval($_POST['user_id']);
        $content = $_POST['content'];
        $category_id = intval($_POST['category_id']);
        $insertion = "INSERT INTO notice (title, user_id, content, category_id) VALUES ('$title', '$user_id', '$content', '$category_id')";
        if (mysqli_query($mysqli, $insertion)) {
            $last_id = mysqli_insert_id($mysqli);
            if ($last_id) {
                $query = mysqli_query($mysqli, "SELECT * FROM notice WHERE id=$last_id");
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
    if ('PUT' === $method) {
        parse_str(file_get_contents('php://input'), $_PUT);
        $id = intval($_PUT['id']);
        $title = $_PUT['title'];
        $content = $_PUT['content'];
        $edition = "UPDATE notice SET title='$title', content='$content' WHERE id='$id'";
        if (mysqli_query($mysqli, $edition)) {
             $query = mysqli_query($mysqli, "SELECT * FROM notice WHERE id='$id'");
                if ($query) {
                    $records = [];
                    while ($record = mysqli_fetch_assoc($query)) {
                        $records[] = $record;
                    }
                }
                $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
                echo $shipment;
        } else {
            $errormsg = " " . $edition . "<br>" . mysqli_error($mysqli);
            $log = array("Error"=>$errormsg);
            $error = json_encode($log, JSON_UNESCAPED_UNICODE);
            echo $error;
        }
    }
?>