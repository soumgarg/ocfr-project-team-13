<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO CertIssuance (issueStartDate,issueEndDate,memberid,certid)
  VALUES (?,?,?,?)'
);

$stmt->execute([
  $_POST['issueStartDate'],
  $_POST['issueEndDate'],
  $_POST['memberid'],
  $_POST['certid']
]);

// Step 4: Output
header('HTTP/1.1 200 Inserted data');
// YOu don't output anything!
