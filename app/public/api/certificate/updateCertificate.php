<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Certification SET certName= ?, expirationYears=?
  WHERE certAgency = ?'
);

$stmt->execute([
  $_POST['triageCertName'],
  $_POST['triageExpirationYears'],
  $_POST['triageCertAgency']
]);

// Step 4: Output
header('HTTP/1.1 500 Inserted data');
// YOu don't output anything!
