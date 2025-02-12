<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $company = htmlspecialchars($_POST['company']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@globalbridgesolution.co.uk'; // Your custom domain email
        $mail->Password = 'your-app-password'; // App password from Google
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email settings
        $mail->setFrom('info@globalbridgesolution.co.uk', 'Contact Form');
        $mail->addAddress('info@globalbridgesolution.co.uk'); // Receiver email
        $mail->Subject = "New Contact Form Submission from $name";

        // Email body
        $mail->Body = "Name: $name\nCompany Name: $company\nEmail: $email\nPhone: $phone";

        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Failed to send email. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>
