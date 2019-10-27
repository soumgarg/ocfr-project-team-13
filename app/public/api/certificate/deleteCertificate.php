<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM CertIssuance WHERE certid = ? '
);

$stmt->execute([
  $_POST['certid']
]);

$stmt1 = $db->prepare(
  'DELETE FROM Certification WHERE certName= ? AND certAgency =? '
);

$stmt1->execute([
  $_POST['certName'],
  $_POST['certAgency']
]);

// Step 4: Output
header('HTTP/1.1 200 Inserted data');
// YOu don't output anything!
