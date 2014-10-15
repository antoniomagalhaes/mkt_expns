<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Comparison Tool</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
		<script type="text/javascript" src="js/effects.js"></script>
		<script type="text/javascript" src="js/labels.js"></script>
		<script type="text/javascript" src="js/general.js"></script>
		<script type="text/javascript" src="js/json2.js"></script>

		<link rel="stylesheet" type="text/css" href="css/theme1.css" />
		<style type="text/css">
		body {
	background-color: #FFF;
}
        </style>



<!-- GA-->


 <!-- Google - UA-51481384-1 - Tracking Code-->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-51481384-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<!-- Google Tracking Code-->



<!--VALIDAÇÕES EM PHP-->
<?php

if (isset($_GET[msgid]) && ($_GET[msgid] == '1' || $_GET[msgid] =='2')){
	$msgid = $_GET[msgid];
	if ($msgid == 1) $msgid = "Os Seus Dados Foram Enviados! Obrigado";
	elseif ($msgid == 2)$msgid = "Ocorreu um erro por favor reintroduza os seus dados.";
}

if ($_GET[action]=="validate")
	{
	$nome = trim(ucwords($_POST[nome]));
	$email = trim(strtolower($_POST[email]));
	$empresa = trim(ucwords($_POST[empresa]));
	$telefone = trim(ucwords($_POST[telefone]));
	
	function Validate_String($string,$field)
         {
		 if ($field=="name")
		 {
		 $valid_chars =  " |ªº1234567890-.,:;!?()\"/%\$#€@\'_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãõáàéíóúêâÃÕÁÀÉÍÓÚÂÊçÇ";
		 }
		 if ($field=="email")
		 {
		 $valid_chars = "1234567890-_.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		 }
		 if ($field=="empresa")
		 {
		 $valid_chars = " .abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãõáéíóúêâÃÕÁÉÍÓÚÂÊçÇºª";
		 }
		 if ($field=="telefone")
		 {
		 $valid_chars = "1234567890-";
		 }
		 
         if($string == null || $string == "")
            return(true);
         
         for($index = 0; $index < strlen($string); $index++)
            {
            $char = substr($string, $index, 1);
            
            if(strpos($valid_chars, $char) === false)
              {
  				return (false);
              }
            }
          }
		  
function Validate_Email($email_address)
         {
         $at = strpos($email_address, "@");
         $dot = strrpos($email_address, ".");
         $fst_dot = strpos($email_address, ".");

         if($at === false || 
            $dot === false || 
            $dot <= $at + 1 ||
            $fst_dot == 0 ||
			($email_address{$at-1} == ".") ||
			($email_address{$at+1} == ".") ||
			$at == 0 ||  
            $dot == strlen($email_address) - 2 ||
			$dot == strlen($email_address)-1)
            return(false);
            
         $user_name = substr($email_address, 0, $at);
         $domain_name = substr($email_address, $at + 1, strlen($email_address));
         
         if(Validate_String($user_name,email) === false || 
            Validate_String($domain_name,email) === false)
            return(false);
         
         return(true);
         }  
		 
	$error_msg = "";

	$liners   = array("\r\n", "\n", "\r");
	
 	if ((Validate_String($nome,name) === false) || (strlen($nome)<2))
 		{
		$e_nome = true;
		}
	
 	if (!(Validate_email($email)))
  		{
		$e_email = true;
		}

	if ((Validate_String($empresa,name) === false) || (strlen($empresa)<2))
  		{
		$e_empresa = true;
		}

if ((Validate_String($telefone,name) === false) || (strlen($telefone)<2))
  		{
		$e_telefone = true;
		}

 	if (!$e_nome && !$e_email && !$e_empresa && !$telefone) 
  		{
  
		$mailFrom = "antonio.magalhaes@stepvalue.com";
  		
		$mailTo = "antonio.magalhaes@stepvalue.com";
		
		//$mailTo = $email;
 
		$subject = 'submisão de formulário';
 
		$message ="Está é uma cópia da mensagem que nos acabou de enviar.\nObrigado pela sua participação."."\n\n\n".'Mensagem enviada de----'. "\n\n".'De: '.$nome.' ;'. "\n" .'Email: '.$email.' ;'. "\n" . 'empresa: '.$empresa.' ;'. "\n\n" .'Telefone: '.$telefone. ';';
  		
		$message = str_replace('\\',"",$message);
				
		$headers = "From:Teste <$mailFrom>\r\n";
		$headers .= "Reply-To: $mailFrom\r\n";
		$headers .= "CC: $mailFrom\r\n";	
		$headers .= "X-Mailer: PHP/" . phpversion();

		$envio = mail( $mailTo, $subject, $message, $headers);
		
		if ($envio) header("Location: obrigado.php");
		else header("Location: form_final.php?msgid=2");
			
		}
	}
?>

<!-- FIM DE VALIDAÇÕES EM PHP-->



	</head>

	<body >
<!--Inline contact Form-->
<div id="inline3" style="width:400px;">
<form id="contactform" method="post" action="<?=$PHP_SELF;?>?action=validate"  name="form" >

<ul  style="margin:0; padding:0;" class="forms">
<p style="visibility:<?=($msgid)?"visible":"hidden"?>"><?php echo $msgid?>&nbsp;</p>

<li id="titulo"><strong>Pretendo Ser Contactado</strong></li>

<li style="margin:0; padding:0;" class="forms">
<li span style="font-size:14px; color: #000; width:360px; margin-bottom:10px;">
Preencha o formul&aacute;rio para receber uma simula&ccedil;&atilde;o
&aacute; medida das suas necessidades!</br>
Ou contacte-nos pelo: <strong>707 02 03 04</strong>
</li>

<li>
<div class="wrong" style="margin-bottom: -5px; font-size: 10px; color: #F00; position: absolute; display:<?=($e_nome)?"block":"none"?>; left: 214px; top: 27px; width: 138px;">Por favor, insira o seu nome!</div>
<div id="cleardiv"> </div>
<label id="nome_label" >Nome*</label><br>
<input id="nome" name="nome" type="text" style="width:350px;" value="<?=$nome?$nome:""?>" />
</li>
<li>
<div class="wrong" style="margin-bottom: -5px; font-size: 10px; color: #F00; position: absolute; display:<?=($e_empresa)?"block":"none"?>; left: 178px; top: 26px; width: 173px;">Por favor prencha o campo empresa</div>
<label id="empresa_label">Empresa*</label><br>
<input id="empresa" name="empresa" type="text" style="width:350px;" value="<?=$empresa?$empresa:""?>"/>
</li>
<li>
<div class="wrong" style="margin-bottom: -5px; font-size: 10px; color: #F00; position: absolute; display:<?=($e_telefone)?"block":"none"?>; left: 203px; top: 25px; width: 145px;">Por favor insira o seu Telefone </div>
<label id="telefone_label">Telefone*</label><br>
<input id="telefone" name="telefone" type="text" style="width:350px;" value="<?=$telefone?$telefone:""?>"/>
</li>
<li>
<div class="wrong" style="margin-bottom: -5px; font-size: 10px; color: #F00; position: absolute; display:<?=($e_email)?"block":"none"?>; left: 193px; top: 26px; width: 158px;">Por favor, insira um e-mail válido!</div>
<label id="email_label">E-mail*</label><br>
<input id="email" name="email" type="text" style="width:350px;" value="<?=$email?$email:""?>"/>
</li>
<div style=" clear:both"></div>
<li style="margin:0;"> <span id="obriga"> *os campos assinalados s&atilde;o obrigat&oacute;rios.
 </span>
</li>
<li id="button">
<input class="button-orange2" type="submit" name="submitted" id="submitted" value="Enviar" />
</li>
</ul>
</form>
 </div>
        
	</body>
</html>