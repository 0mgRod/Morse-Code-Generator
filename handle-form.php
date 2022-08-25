<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>HTML Form Demo</title>
    </head>
    <body>
        <p>Processing feedback...</p>
        <?php 
            //Set an error message
            $submission_error = "Sorry, a submission error occurred: ";
            // Define a filter function for data sanitization
            function clean_data($data) {
                // trim whitespace
                $data = trim($data);
                // reduce website manipulation via HTML tags
                $data = htmlspecialchars($data);
                return $data;
            }
            //Check for reCAPTCHA token
            if (isset($_POST['g-recaptcha-response'])) {
                $captcha = $_POST['g-recaptcha-response'];
            } else {
                $captcha = false;
            }
            //If no reCAPTCA token, show an error, otherwise verify data.
            if (!$captcha) {
                //Do something with no reCAPTCHA available
                 echo "<p>".$submission_error." No verification data.</p>";
            } else {
                $secret='YOUR_reCAPTCHA_SECRET_KEY_GOES_HERE';
                //Verify with Google reCAPTCHA servers
                //Construct query paramters
                $query_content = http_build_query(array('secret'=>$secret,'response'=>$captcha));
                //Start curl
                $curl=curl_init();
                //Set options for cURL: url, return as value, do a post
                curl_setopt($curl, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl, CURLOPT_POST, true);
                curl_setopt($curl, CURLOPT_POSTFIELDS,$query_content);
                //Do the post to Google servers
                $response=curl_exec($curl);
                //Close cURL resource, free up system resources
                curl_close($curl);
                //Check curl response
                if ($response === false)
                    //set error in JSON format
                    $response='{"success": false, "error-codes": ["connection-failed"]}';
                //Use json_decode to decode response
                $response = json_decode($response);
                //See if verification failed
                if ($response->success===false) {
                    //Do something with failure
                    echo "<p>".$submission_error." Data verification failed.</p>";
                } else {
                    //If the reCAPTCHA is valid use the data
                    //Otherwise filter out bad submissions
                    //Change acceptable score as required
                    if ($response->score <= 0.5) {
                        //Do something to deny the form data
                        echo "<p>".$submission_error." Data check failed.</p>";
                    } else {
                        //Process data as required
                        if(isset($_POST['name']))
                            echo "<p>Welcome ".clean_data($_POST['message'])."</p>";
                        if(isset($_POST['message']))
                            echo "<p>Your message is: ".clean_data($_POST['name'])."</p>";
                    }
                }
            }
        ?>
     </body>
</html>
