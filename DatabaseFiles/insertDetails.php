<?php
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from submitting data & storing in new variables.
$name = mysqli_real_escape_string($con, $data->name);
$email = mysqli_real_escape_string($con, $data->email);
$gender = mysqli_real_escape_string($con, $data->gender);
$address = mysqli_real_escape_string($con, $data->address);

// mysqli insert query
$query = "INSERT into emp_details (emp_name,emp_email,emp_gender,emp_address) VALUES ('$name','$email','$gender','$address')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>