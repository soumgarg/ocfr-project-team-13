<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM Member WHERE firstName = ? AND lastName = ? '
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName']
]);

// Step 4: Output
header('HTTP/1.1 500 Inserted data');
// YOu don't output anything!
