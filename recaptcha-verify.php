<?php
// public_html/recaptcha-verify.php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}
$secret = getenv('RECAPTCHA_SECRET_KEY');
if (!$secret) {
  $secretFile = './recaptcha.php';
  if (file_exists($secretFile)) {
    $secret = @include $secretFile;
  }
}
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$token = $data['token'] ?? null;
if (!$token || !$secret) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'Missing token or secret']);
  exit;
}
$resp = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, stream_context_create([
  'http' => [
    'method'  => 'POST',
    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    'content' => http_build_query(['secret' => $secret, 'response' => $token]),
    'timeout' => 10,
  ],
]));
echo $resp ?: json_encode(['success' => false, 'error' => 'Verification failed']);