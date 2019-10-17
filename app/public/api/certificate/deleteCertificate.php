<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM Certification WHERE certName= ? AND certAgency =? '
);

$stmt->execute([
  $_POST['certName'],
  $_POST['certAgency']
]);

// Step 4: Output
header('HTTP/1.1 500 Inserted data');
// YOu don't output anything!
