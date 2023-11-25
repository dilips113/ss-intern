<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $service = $_POST["service"];

    // Database connection parameters
    $servername = "localhost";
    $username = "root"; // default username for XAMPP
    $password = ""; // default password for XAMPP
    $dbname = "dilip";

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Format the data
    $data = "Name: $name\nPhone: $phone\nEmail: $email\nService: $service\n\n";

    // Insert data into the users table
    $sql = "INSERT INTO register3 (name, phone, email, service) VALUES ('$name', '$phone', '$email', '$service')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to a success page or display a success message
        header("Location: success.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
