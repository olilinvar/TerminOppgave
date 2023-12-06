<?php
include("db_connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $bakeryname = $_POST["bakeryname"];

    // Validate and sanitize the input if necessary

    $query = "SELECT * FROM users WHERE bakeryname = '$bakeryname'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        // User found, you may set up a session here if needed
        echo "success";
    } else {
        echo "failure";
    }
}

$conn->close();
?>
