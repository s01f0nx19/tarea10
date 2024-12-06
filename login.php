<?php
session_start();
include 'db.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // MySQLi Prepared Statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param('s', $username); // 's' indicates the parameter is a string
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['username'];
        header("Location: ../index.html");
    } else {
        echo "Usuario o contraseña incorrectos.";
    }

    $stmt->close();
}
?>