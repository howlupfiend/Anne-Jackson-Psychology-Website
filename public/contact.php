<?php
/**
 * Anne TH Jackson Psychotherapy - Contact Form Mailer
 * 
 * Handles incoming contact form submissions and delivers formatted emails
 * to Anne TH Jackson with anti-spam protection, validation, and JSON response.
 */

// -------------------------------------------------------------
// CONFIGURATION
// -------------------------------------------------------------
$recipientEmail = 'Anne.TH.JacksonCBP@gmail.com';
$practiceName   = 'Anne TH Jackson Psychotherapy';

// -------------------------------------------------------------
// CORS & HEADERS
// -------------------------------------------------------------
header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle pre-flight CORS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error'   => 'Method not allowed. Only POST requests are accepted.'
    ]);
    exit;
}

// -------------------------------------------------------------
// PARSE INCOMING DATA (supports JSON and form-data)
// -------------------------------------------------------------
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

// -------------------------------------------------------------
// ANTI-SPAM (Honeypot check)
// -------------------------------------------------------------
// Legitimate users won't see or fill this hidden field.
if (!empty($data['honeypot']) || !empty($data['website'])) {
    // Return success to confuse bots without sending any mail
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for reaching out.'
    ]);
    exit;
}

// -------------------------------------------------------------
// SANITIZE & VALIDATE INPUTS
// -------------------------------------------------------------
$name        = trim(strip_tags($data['name'] ?? ''));
$rawEmail    = trim($data['email'] ?? '');
$email       = filter_var($rawEmail, FILTER_VALIDATE_EMAIL);
$phone       = trim(strip_tags($data['phone'] ?? ''));
$inquiryType = trim(strip_tags($data['inquiryType'] ?? 'General Enquiry'));
$message     = trim(strip_tags($data['message'] ?? ''));

// Validate required fields
if (empty($name)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error'   => 'Please provide your name.'
    ]);
    exit;
}

if (!$email) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error'   => 'Please provide a valid email address.'
    ]);
    exit;
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error'   => 'Please include your message.'
    ]);
    exit;
}

// Prevent Email Header Injection (strip newlines from headers)
$cleanName  = preg_replace("/[\r\n]+/", ' ', $name);
$cleanEmail = preg_replace("/[\r\n]+/", '', $email);

// -------------------------------------------------------------
// BUILD EMAIL CONTENT
// -------------------------------------------------------------
$subject = "New Therapy Enquiry: " . htmlspecialchars($inquiryType) . " - " . $cleanName;
$date = date('d M Y, H:i');

$phoneHtml = !empty($phone)
    ? htmlspecialchars($phone)
    : '<span style="color:#888; font-style:italic;">Not provided</span>';

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>New Website Enquiry</title>
</head>
<body style='font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #292524; background-color: #faf9f6; margin: 0; padding: 24px 12px;'>
  <div style='max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e7e5e4; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);'>
    
    <!-- Header -->
    <div style='background-color: #047857; color: #ffffff; padding: 26px 28px;'>
      <h2 style='margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em;'>New Therapy Enquiry</h2>
      <p style='margin: 4px 0 0; font-size: 13px; color: #d1fae5;'>Anne TH Jackson Psychotherapy &bull; Website Contact Form</p>
    </div>

    <!-- Details Table -->
    <div style='padding: 28px;'>
      <table style='width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;'>
        <tr style='border-bottom: 1px solid #f5f5f4;'>
          <td style='padding: 10px 0; width: 140px; font-weight: 600; color: #78716c; vertical-align: top;'>Enquiry Type:</td>
          <td style='padding: 10px 0; color: #047857; font-weight: 600;'>" . htmlspecialchars($inquiryType) . "</td>
        </tr>
        <tr style='border-bottom: 1px solid #f5f5f4;'>
          <td style='padding: 10px 0; font-weight: 600; color: #78716c; vertical-align: top;'>Full Name:</td>
          <td style='padding: 10px 0; color: #1c1917; font-weight: 600;'>" . htmlspecialchars($name) . "</td>
        </tr>
        <tr style='border-bottom: 1px solid #f5f5f4;'>
          <td style='padding: 10px 0; font-weight: 600; color: #78716c; vertical-align: top;'>Email Address:</td>
          <td style='padding: 10px 0;'>
            <a href='mailto:" . htmlspecialchars($cleanEmail) . "' style='color: #047857; text-decoration: underline; font-weight: 500;'>
              " . htmlspecialchars($cleanEmail) . "
            </a>
          </td>
        </tr>
        <tr style='border-bottom: 1px solid #f5f5f4;'>
          <td style='padding: 10px 0; font-weight: 600; color: #78716c; vertical-align: top;'>Phone Number:</td>
          <td style='padding: 10px 0; color: #1c1917;'>" . $phoneHtml . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; font-weight: 600; color: #78716c; vertical-align: top;'>Received:</td>
          <td style='padding: 10px 0; color: #78716c; font-size: 13px;'>" . $date . " (UK time)</td>
        </tr>
      </table>

      <!-- Message Section -->
      <div style='margin-top: 10px;'>
        <h3 style='margin: 0 0 10px; font-size: 14px; font-weight: 600; color: #1c1917; text-transform: uppercase; letter-spacing: 0.05em;'>
          Message / Reason for Therapy:
        </h3>
        <div style='background-color: #faf9f6; border-left: 3px solid #047857; padding: 16px 18px; border-radius: 8px; font-size: 14px; color: #292524; line-height: 1.6; white-space: pre-wrap;'>
" . htmlspecialchars($message) . "
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style='background-color: #f5f5f4; border-top: 1px solid #e7e5e4; padding: 14px 24px; font-size: 12px; color: #78716c; text-align: center;'>
      You can reply directly to this email to contact <strong>" . htmlspecialchars($name) . "</strong> (" . htmlspecialchars($cleanEmail) . ").
    </div>

  </div>
</body>
</html>
";

// -------------------------------------------------------------
// HEADERS & SEND
// -------------------------------------------------------------
$serverHost = $_SERVER['SERVER_NAME'] ?? 'localhost';
$fromDomain = preg_replace('/^www\./', '', $serverHost);
if (empty($fromDomain) || $fromDomain === 'localhost') {
    $fromDomain = 'annethjacksonpsychotherapy.co.uk';
}
$fromEmail = 'no-reply@' . $fromDomain;

$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: ' . $practiceName . " <" . $fromEmail . ">";
$headers[] = 'Reply-To: ' . $cleanName . " <" . $cleanEmail . ">";
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = @mail($recipientEmail, $subject, $htmlBody, implode("\r\n", $headers));

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message. I will be in touch soon!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Sorry, there was a problem sending your message. Please try emailing directly at ' . $recipientEmail
    ]);
}
