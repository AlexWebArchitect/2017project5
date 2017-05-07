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
        $query = mysqli_query($mysqli, "SELECT * FROM `subcategory` ORDER BY id DESC");
        if ($query) {
            $records = [];
            while ($record = mysqli_fetch_assoc($query)) {
                $records[] = $record;
            }
        }
        $shipment = json_encode($records, JSON_UNESCAPED_UNICODE);
        echo $shipment;
    }
?>