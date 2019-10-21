<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE CertIssuance  SET issuanceid = ?, issueStartDate= ?, issueEndDate=?, memberID =?, certID=?
  WHERE issuanceid = ?'
);

$stmt->execute([
  $_POST['issuanceid'],
  $_POST['issueStartDate'],
  $_POST['issueEndDate'],
  $_POST['memberID'],
  $_POST['certID'],
]);

// Step 4: Output
header('HTTP/1.1 200 Inserted data');
// YOu don't output anything!
