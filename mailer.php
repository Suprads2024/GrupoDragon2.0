<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar las dependencias de PHPMailer
require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

// Capturar los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Captura la respuesta del captcha y la IP del usuario
$ip = $_SERVER['REMOTE_ADDR'];
$captcha = $_POST['g-recaptcha-response'];

// Clave secreta de reCAPTCHA
$secretkey = "6LeMnysqAAAAADb0D28_vPhTyI9MWAGGI_MPZHgK";

// Validación de Captcha
$respuesta = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&response=$captcha&remoteip=$ip");
$atributos = json_decode($respuesta, true);

// Comprueba si la respuesta del captcha es válida
if (!$atributos['success']) {
    echo "Verificación de CAPTCHA fallida. Por favor, intenta de nuevo.";
    exit;
}

// Inicializar PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.correoseguro.co'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'grupodragon@grupodragon.net';  
    $mail->Password = 'dzEk2fewfBL2';  
    $mail->SMTPSecure = 'ssl';  
    $mail->Port = 465;  

    
    // Configuración del remitente y destinatario
    $mail->setFrom('grupodragon@grupodragon.net', $name);  // Remitente del correo
    $mail->addAddress('grupodragon@grupodragon.net');  // Dirección fija donde se enviará el correo
    $mail->addReplyTo($email, $name);  // Utiliza el correo ingresado como dirección de respuesta

    // Contenido del correo
    $mail->isHTML(true);  // Activar el formato HTML
    $mail->Subject = 'Nuevo Mensaje desde la Web';
    $mail->Body    = "<h1>Mensaje nuevo</h1>
                      <p><strong>Nombre:</strong> $name</p>
                      <p><strong>Email:</strong> $email</p>
                      <p><strong>Telefono:</strong> $telefono</p>
                      <p><strong>Mensaje:</strong> $mensaje</p>";
    $mail->AltBody = "Nombre: $name\nEmail: $email\nTeléfono: $telefono\nMensaje: $mensaje";  // Texto plano si no soporta HTML

    // Enviar el correo
    if ($mail->send()) {
        // Redirigir a la página de gracias después del envío exitoso
        header('Location: ./gracias/index.html');
        exit();  // Importante para detener la ejecución después de la redirección
    } else {
        echo 'Hubo un error al enviar el mensaje';
    }
} catch (Exception $e) {
    echo "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}";
}
?>
