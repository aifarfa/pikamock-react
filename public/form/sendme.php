<?php

if ( $_SERVER['REQUEST_METHOD'] != 'POST' ) {
  http_response_code(403);
  return;
}

if(!empty($_POST)){
  var_dump($_POST);

  $to = 'kzneko@gmail.com';
  $subject = 'hello it works';
  $headers = 'from: official@pikapok.com' . "\r\n" .
    'Reply-To: official@pikapok.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}
else {
  echo 'empty body';
}
