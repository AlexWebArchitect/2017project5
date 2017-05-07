<?php
    $mysqli = mysqli_connect("db", "root", "phpapptest", "noticeboard");
	if (mysqli_connect_errno($mysqli))
		echo "Не удалось подключиться к MySQL: " . mysqli_connect_error();
        
	if (!$mysqli->set_charset("utf8")) {
    	printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
    	exit();
	}

    $table = $_GET['get'];
    if ($table != "") {
        switch ($table) {
            case "notice":
                $query = mysqli_query($mysqli, "SELECT * FROM `notice`");
                break;
            case "user":
                $query = mysqli_query($mysqli, "SELECT * FROM `user`");
                break;
            case "category":
                $query = mysqli_query($mysqli, "SELECT * FROM `category`");
                break;
            case "subcategory":
                $query = mysqli_query($mysqli, "SELECT * FROM `subcategory`");
                break;
        }
        if ($query) {
            $records = [];
            while ($record = mysqli_fetch_assoc($query)) {
                $records[] = $record;
            }
        }
        $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
        echo $shipment;
    }

    $title = $_POST['title'];
    $user_id = $_POST['user_id'];
    $user_id = intval($user_id);
    $content = $_POST['content'];
    $subcategory_id = $_POST['subcategory_id'];
    $subcategory_id = intval($subcategory_id);
    if (strlen($title) > 2 && strlen($content) > 2) {
        if ($user_id >= 1) {
            $insertion = "INSERT INTO notice (title, user_id, content, subcategory_id) VALUES ('$title', '$user_id', '$content', '$subcategory_id')";
            if (mysqli_query($mysqli, $insertion)) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $insertion . "<br>" . mysqli_error($mysqli);
            }
        }
    }

    $postToDel = $_POST['post_id'];
    $postToDel = intval($postToDel);
    if ($postToDel>0) {
        $deletion = "DELETE FROM `notice` WHERE id='$postToDel'";
        if (mysqli_query($mysqli, $deletion)) {
            echo "record deleted successfully";
        } else {
            echo "Error: " . $deletion . "<br>" . mysqli_error($mysqli);
        }
    }
?>