<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM CertIssuance WHERE memberid= ? '
);

$stmt->execute([
  $_POST['memberid']
]);

$stmt1 = $db->prepare(
  'DELETE FROM Member WHERE firstName = ? AND lastName = ? '
);

$stmt1->execute([
  $_POST['firstName'],
  $_POST['lastName']
]);

// Step 4: Output
header('HTTP/1.1 200 Deleted data');
// YOu don't output anything!
