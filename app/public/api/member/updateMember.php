<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Member(firstName, lastName, radioNumber, stationNumber, isActive, address, email, phoneNumber,dob,gender,position)
  VALUES (?, ?, ?,?, ?,?,?,?,?,?,?) WHERE memberID = ? '
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['address'],
  $_POST['email'],
  $_POST['phoneNumber'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['position']
]);

// Step 4: Output
header('HTTP/1.1 500 Inserted data');
// YOu don't output anything!
