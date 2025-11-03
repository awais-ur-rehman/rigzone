<?php
// contact-send.php - Handle contact form submissions
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}

// Get input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$firstName = $data['firstName'] ?? '';
$lastName = $data['lastName'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';
$recaptchaToken = $data['recaptchaToken'] ?? null;

if (!$firstName || !$lastName || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'All fields are required']);
  exit;
}

$fromEmail = 'nodemailer@rigzonellc.com';

// Email recipients
$recipients = [
  'info@rigzonellc.com',
  'khan@rigzonellc.com',
  'waseem@rigzonellc.com'
];

// Email subject
$subject = "Application from $firstName $lastName";

// Email body
$emailBody = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { color: #3E4C52; border-bottom: 2px solid #3E4C52; padding-bottom: 10px; }
    .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap; }
    .info { margin: 10px 0; }
  </style>
</head>
<body>
  <div class='container'>
    <h2 class='header'>Contact Form Submission</h2>
    <p class='info'><strong>From:</strong> $firstName $lastName</p>
    <p class='info'><strong>Email:</strong> $email</p>
    <hr>
    <p><strong>Message:</strong></p>
    <div class='message-box'>" . htmlspecialchars($message) . "</div>
  </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $firstName $lastName <$fromEmail>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email to all recipients
$emailSent = true;
foreach ($recipients as $recipient) {
  if (!mail($recipient, $subject, $emailBody, $headers)) {
    $emailSent = false;
  }
}

if ($emailSent) {
  http_response_code(200);
  echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Failed to send email']);
}

