<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Member SET firstName = ?, lastName= ?, radioNumber=?, stationNumber =?, isActive = ?, address = ?,position =?
  WHERE memberid = ?'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['address'],
  $_POST['position'],
  $_POST['memberid'],
]);

// Step 4: Output
header('HTTP/1.1 200 Inserted data');
// YOu don't output anything!
