<?php
$servername = "http://10.2.2.139";
$username = "root";
$password = "password";
$dbname = "mydb";

// Create connection
$conn = new mysql($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>