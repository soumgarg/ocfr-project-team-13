<?php
//require 'class/DbConnection.php';
//Step 1: get database connection from our help class
$db = DbConnection::getConnection();
$stmt = $db-> prepare(
  'SELECT stationNumber, radioNumber, firstName, lastName, email
FROM Member');
$stmt -> execute ();
$stationNumber = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($stationNumber, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
