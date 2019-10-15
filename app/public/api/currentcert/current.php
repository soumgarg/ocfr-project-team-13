<?php

//require 'class/DbConnection.php';

//Step 1: get database connection from our help class

$db = DbConnection::getConnection();

$stmt = $db-> prepare(
  'SELECT c.certName
  FROM CertIssuance ci, Certification c, Member m
  WHERE ci.certid = c.certid AND ci.memberid = m.memberid AND ci.issueEndDate > CURDATE()');
$stmt -> execute ();

$certificates = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certificates, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
