<?php
// Conéctate a la base de datos
$servername = "localhost";
$username = "tu_nombre_de_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica si la conexión es exitosa
if ($conn->connect_error) {
  die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Recupera los datos enviados por el formulario de registro
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

// Cifra la contraseña utilizando el algoritmo bcrypt
$contraseña_cifrada = password_hash($contraseña, PASSWORD_DEFAULT);

// Inserta los datos del nuevo usuario en la tabla de usuarios
$sql = "INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES ('$nombre', '$apellido', '$correo', '$contraseña_cifrada')";

if ($conn->query($sql) === TRUE) {
  // Redirige al usuario a la página de inicio de sesión
  header('Location: inicio_de_sesion.php');
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
