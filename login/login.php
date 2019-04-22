
<?php
    if(!empty($_POST['email']) && !empty($_POST['pass'])){
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $message = '';
        
        if ($email == 'abc@abc.com' && $pass = 123) {
            $message = 'Login success';
        } else {
            $message = 'Wrong email or password';
        }
    } else {
        $message = 'Please enter your email and password';
    }

    echo json_encode($message);
?>