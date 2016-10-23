<?php

require_once dirname(__FILE__).'/../../vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    $swift_ready = class_exists('Swift_SmtpTransport', true);

    http_response_code(200);
    echo 'OK.'.$swift_ready;
    exit();
}

if (empty($_POST)) {
    http_response_code(400); // Bad request
    exit();
}

// Port 25
// TLS not required
// Dynamic IPs allowed
// Mail can only be sent to Gmail or G Suite users
$transport = Swift_SmtpTransport::newInstance('aspmx.l.google.com', 25)
  ->setUsername('official@pikapok.com')
  ->setPassword('0kpakip.com');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance('Test Subject')
  ->setFrom(array('official@pikapok.com' => 'Pikapok'))
  ->setTo(array('official@pikapok.com'))
  ->setBody('message sent via aspmx.l.google.com');

try {
    $result = $mailer->send($message);
    var_dump($result);
} catch (Exception $e) {
    echo $e->getMessage();
}

// $from = 'Pikapok <official@pikapok.com>';
// $to = 'kzneko@gmail.com';
// $subject = 'Hello! it works!';
// $body = "Foo,\n\nbar you?";
//
// $headers = array(
//     'From' => $from,
//     'To' => $to,
//     'Subject' => $subject,
// );
//
// $smtp = Mail::factory('smtp', array(
//     'host' => 'ssl://smtp.gmail.com',
//     'port' => '465',
//     'auth' => true,
//     'username' => 'official@pikapok.com',
//     'password' => '0kpakip.com',
// ));
//
// $mail = $smtp->send($to, $headers, $body);
//
// if (PEAR::isError($mail)) {
//     echo '<p>'.$mail->getMessage().'</p>';
// } else {
//     // echo $sent ? 'mail sent.' : 'Sorry, something went wrong. please try again later.';
//     echo '<p>Message successfully sent!</p>';
// }
