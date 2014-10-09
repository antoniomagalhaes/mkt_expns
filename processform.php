<?php 
/*
 * BEGIN CONFIG
 */

// The page you want the user to be redirected if there are no errors.
$thankYouPage = 'thanks.html';

// Define which values we are to accept from the form. If you add additional 
// fields to the form, make sure to add the form nome values here.
$allowedFields = array(
	'nome', 
	'empresa',
	'email',
	'telefone',
	'agree',
	//'newsletter',
	//'topic',
);

// Specify the required form fields. The key is the field nome and the value 
// is the error message to display.
$requiredFields = array(
	'nome' => 'Insira o seu Nome.', 
	'empresa' => 'Insira a Empresa.',
	'telefone' => 'Insira o seu telefone.',
	'email' => 'Insira o seu email.',
	//'telefone' => 'telefone number is required.',
	//'agree' => 'You must agree with our policy.',
);

// Note: Since we are requiring two topics to be checked if they want to receive 
// our newsletter, we need to implement custom code.

/*
 * END CONFIG
 */


/*
 * Since we are doing javascript error checking on the form before the form gets submitted, 
 * the server side check is only a backup if the user has javascript disabled. Since this 
 * is unlikely, we are displaying the server side errors on a separate page of the form.
 * 
 * The more practical purpose of server side checking (in this case) is to prevent hackers from exploiting 
 * your PHP processing code.
 */


/*
 * BEGIN FORM VALIDATION
 */

$errors = array();

// We need to loop through the required variables to make sure they were posted with the form.
foreach($requiredFields as $fieldnome => $errorMsg)
{
	if(empty($_POST[$fieldnome]))
	{
		$errors[] = $errorMsg;
	}
}

// Loop through the $_POST array, to create the PHP variables from our form.
foreach($_POST AS $key => $value)
{
    // Is this an allowed field? This is a security measure.
    if(in_array($key, $allowedFields))
    {
        ${$key} = $value;
    }
}

// Code to validate the newsletter topic checkboxes
//if(!empty($_POST['newsletter']))
{
	// They checked the newsletter checkbox...make sure they 
	// checked at least two topics.
	//if(count($_POST['topic']) < 2)
	{
		//$errors[] = "In order to receive our newsletter, you must check at least two topics.";
	}
}

/*
 * END FORM VALIDATION
 */


// Were there any errors?
if(count($errors) > 0)
{
    $errorString .= '<ul>';
    foreach($errors as $error)
    {
        $errorString .= "<li>$error</li>";
    }
    $errorString .= '</ul>';
 
    // display the errors on the page
    ?>
    <html>
    <head>
    <title>Erro no processamento do Formulário</title>
    </head>
    <body>
    <h2>Erro no processamento do Formulário</h2>
    <p>Houve um erro no processamento do Formulário!</p>
    <?php echo $errorString; ?>
    <p><a href="index.php">Voltar ao formulário!</a></p>
    </body>
    </html>
    <?php 
}
else
{
    // At this point you can send out an email or do whatever you want
    // with the data...
 
    // each allowed form field nome is now a php variable that you can access
 
 
$nome = $_POST['nome'];
$email = $_POST['email'];
$localidade = $_POST['empresa'];
$telefone = $_POST['telefone'];

$subject = "Simulador Market expansion LP Go" ;

$messageBody = "
Agradecemos o seu interesse e queremos ajudá-lo a optimizar a sua frota! 
Abaixo enviamos os dados por si submetidos.

Nome: ".$nome."
Email: ".$email."
Empresa: ".$empresa."
Telefone: ".$telefone."

Muito obrigado.
";

// send a copy to the lister
$recipientemail=$email;
$firstLineOfemail = $subject;
$messageBody = $firstLineOfemail . $messageBody;
$systememail = "antonio.magalhaes@stepvalue.com";
$from = "From: $systememail\n"; /* used as the 4th mail() argument */
$replyTo = "Reply-To: $email\n";
$recipient = $recipientemail;
$xMailer = "X-Mailer: PHP/" . phpversion();
$optionalHeaders = $from . $replyTo . $xMailer;
$customer_emailed = "NO";

if( mail( $recipient, $subject, $messageBody, $optionalHeaders ) ) {
$customer_emailed = "YES";
}

$subject = "LEAD - Simulador Market Expansion LP Go";

$messageBody = "
" . $nome . "Submeteu os seguintes dados no Simulador Matrket LP GO expansion:

nome: ".$nome."
email: ".$email."
localidade: ".$empresa."
Telefone: ".$telefone."

,

";

// Send to email j

$recipientemail= "antonio.magalhaes@stepvalue.com";

$reg_emailed = "NO";

ini_set('sendmail_from', 'antonio.magalhaes@stepvalue.com');

if (mail( $recipientemail, $subject, $messageBody, $optionalHeaders )){

$reg_emailed = "YES";

}

if(($reg_emailed == "YES"))
{
//$msg = "
//
//Thanks for filling out our Quote Request Form
//Click the X to close this window
//"
;

} else {

$msg = "
Não nos foi possível processar os seus dados.
Por favor tente mais tarde.
Muito obrigado.";
}

 
    // display the thank you page
    header("Location: $thankYouPage");
}
?>