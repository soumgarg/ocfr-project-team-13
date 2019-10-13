<?php

//require 'class/DbConnection.php';

//Step 1: get database connection from our help class

$db = DbConnection::getConnection();

$stmt = $db-> prepare(
  SELECT m.firstName, m.lastName,m.memberid, c.certName,ci.issueStartDate,ci.issueEndDate
  FROM CertIssuance ci, Certification c, Member m
  WHERE ci.certid = c.certid AND ci.memberid = m.memberid AND ci.issueEndDate < CURDATE();
$stmt -> execute ([$memberid]);

$user = $stmt-> fetch();

echo "<select member ID = 'Member1'>";
while ($row = mysql_fetch_array($user)) {
  echo "<option value='" . $row['memberID'] . "'>" . $row['memberID'] . "</option>";
}
echo "</select>";
