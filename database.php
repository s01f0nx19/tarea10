<?php
session_start();

$host = 'localhost';
$db = 'videogames';
$user = 'root';
$pass = '';

// Conexión a la base de datos
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Manejo de login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Preparar declaración para evitar inyección SQL
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['username'] = $username;
        header('Location: index2.html');
    } else {
        echo "Usuario o contraseña incorrectos.";
    }
    $stmt->close();
}

// Manejo de registro
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new-username']) && isset($_POST['new-password'])) {
    $newUsername = $_POST['new-username'];
    $newPassword = $_POST['new-password'];

    // Preparar declaración para evitar inyección SQL
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $newUsername, $newPassword);
    
    if ($stmt->execute() === TRUE) {
        echo "Nuevo usuario registrado exitosamente.";
        header('Location: index.html');
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>