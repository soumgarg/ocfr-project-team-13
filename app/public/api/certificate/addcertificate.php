<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Certification (certAgency, certName, expirationYears)
  VALUES (?, ?, ?)'
);

$stmt->execute([
  $_POST['certAgency'],
  $_POST['certName'],
  $_POST['expirationYears']
]);

// Step 4: Output
header('HTTP/1.1 200 Inserted data');
// YOu don't output anything!
