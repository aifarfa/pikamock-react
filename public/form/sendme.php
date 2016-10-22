<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    http_response_code(403);
    return;
}

if (!empty($_POST)) {
    var_dump($_POST);

    $to = 'kzneko@gmail.com';
    $subject = 'hello it works';
    $headers = 'From: official@pikapok.com'."\n".
    'X-Mailer: PHP/'.phpversion();

    try {
        mail($to, $subject, $message, $headers);
        echo 'mail sent.';
    } catch (Exception $e) {
        echo 'Sorry, something went wrong. please try again later.';
        var_dump($e);
    }
} else {
    http_response_code(400); // Bad request
}
