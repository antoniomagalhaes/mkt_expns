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
	$localidade = trim(ucwords($_POST[localidade]));
	$telefone = trim(ucwords($_POST[localidade]));
	
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
		 if ($field=="localidade")
		 {
		 $valid_chars = " .abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãõáéíóúêâÃÕÁÉÍÓÚÂÊçÇºª";
		 }
		 if ($field=="telefone")
		 {
		 $valid_chars = " |ªº1234567890-.,:;!?()\"/%\$#€@\'_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãõáàéíóúêâÃÕÁÀÉÍÓÚÂÊçÇ";
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

	if ((Validate_String($localidade,name) === false) || (strlen($localidade)<2))
  		{
		$e_localidade = true;
		}

if ((Validate_String($ltelefone,name) === false) || (strlen($telefone)<2))
  		{
		$e_telefone = true;
		}

 	if (!$e_nome && !$e_email && !$e_localidade && !$telefone) 
  		{
  
		$mailFrom = "antonio@tsu.pt";
  		
		$mailTo = $email;
 
		$subject = 'Teste';
 
		$message ="Está é uma cópia da mensagem que nos acabou de enviar.\nObrigado pela sua participação."."\n\n\n".'Mensagem enviada de----'. "\n\n".'De: '.$nome.' ;'. "\n" .'Email: '.$email.' ;'. "\n" . 'localidade: '.$localidade.' ;'. "\n\n" .'Telefone: '.$telefone. ';';
  		
		$message = str_replace('\\',"",$message);
				
		$headers = "From:Teste <$mailFrom>\r\n";
		$headers .= "Reply-To: $mailFrom\r\n";
		$headers .= "CC: $mailFrom\r\n";	
		$headers .= "X-Mailer: PHP/" . phpversion();

		$envio = mail( $mailTo, $subject, $message, $headers);
		
		if ($envio) header("Location: obrigado.php");
		else header("Location: form.php?msgid=2");
			
		}
	}
?>

<!-- FIM DE VALIDAÇÕES EM PHP-->






<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Uma oferta para o seu bebé</title>
<style type="text/css">

/*Botão rolover submit*/
#submit_bot
{display: block; margin:0 auto; width: 128px; height: 47px;
  background: url(images/bot_submit.png) no-repeat 0 -47px; }

#submit_bot:hover
{  background-position: 0 0px;}

#submit_bot span
{ position: absolute;
  top: -999em;}
/*Botão rolover Gama de produtos*/
#bot_produtos
{display: block; margin:360px auto; width: 248px; height: 40px;
  background: url(images/bot_produtos.png) no-repeat 0 -40px; }

#bot_produtos:hover
{  background-position: 0 0px;}

#bot_produtos span
{ position: absolute;
  top: -999em;}
  



/* FORMULÁRIO 2*/
#contactform{
	margin:250px auto 5px auto;
	width: 280px!important;
	text-align:left;
	float:left;
	
	}

ol{list-style: none;}
ol.forms {
	text-align:left;
		list-style-type:none;
	padding:0;
	float: left;
	list-style: none;
	/*position:relative;*/
	font-family:Arial, Helvetica, sans-serif; color:#FFF; font-size:14px;
}

.field {
	font-family:Arial, Helvetica, sans-serif; color:#000; font-size:14px; background:#fff; border:#161616; padding:2px;
	 width:200px; 
	 float:right;
}

ol.forms li {
	float: left;
	margin-bottom: 10px;
	width: 280px;
	position:relative;
}

ol.forms label {
	
	color: #006; font-size:14px; float:left; padding-top:6px; font-weight:bold
	font-family:Arial, Helvetica, sans-serif; color:#FFF;;
}

/*ol.forms textarea {
	height: 150px; 
}
*/

ol.forms .error { 
	display: block;
}

ol.forms li.buttons {
	text-align:right;
}



#submitted{
background: url(images/bot_submit.png) 0px 0px no-repeat;
width:128px;
height:47px;
border:none;
cursor:pointer;
display:block;
float:right;
margin-right:-10px;
text-indent:-9999px;


}

#submitted:hover{
background: url(images/bot_submit.png) 0px -47px no-repeat;
width:128px;
height:47px;
border:none;
cursor:pointer;
display:block;
text-indent:-9999px;
margin-right:-10px;

}

#name_label, #telefone_label, #localidade_label, #email_label{ display:block; width:68px; height:17px; text-indent:-9999px;}
#name_label{ background:url(images/nome-label.jpg) top left no-repeat;}
#localidade_label{ background:url(images/localidade-label.jpg) top left no-repeat; background-color:#39C}
#telefone_label{  background:url(images/telefone-label.jpg) top left no-repeat; background-color:#39C}
#email_label{ background:url(images/email-label.jpg) top left no-repeat; background-color:#39C}

.error{font-family:Arial, Helvetica, sans-serif; color: #F00; font-size:12px; padding:0px 0px 5px 0px; text-align:right;}

#cleardiv{ clear:both;}
/*FIM DO FORMULÁRIO 2 */

</style>
</head>

<body>

<form action="<?=$PHP_SELF;?>?action=validate" method="post" name="form" id="contactform">

<ol  style="margin:0; padding:0;" class="forms" >
          
<p style="visibility:<?=($msgid)?"visible":"hidden"?>"><?php echo $msgid?>&nbsp;</p>


<p class="error wrong_name" style="margin-bottom:-5px;display:<?=($e_nome)?"block":"none"?>">Por favor, insira o seu nome!</p>
<div id="cleardiv"> </div>
          
            <li>
<p style="float:left; padding:0; margin:0;" id="name_label" display:<?=(!$e_nome)?"block":"none"?>">Nome</p>
<p style="padding:0; margin:0;" ><input class="field" type="text" name="nome" id="nome" value="<?=$nome?$nome:""?>" /></p>
             </li>




 <p class="error wrong_localidade" style="margin-bottom:-5px; display:<?=($e_localidade)?"block":"none"?>">Por favor, insira a sua localidade!</p>
              <li>
			  <p style="float:left; padding:0; margin:0;" id="localidade_label" class="label_name"display:<?=(!$e_localidade)?"block":"none"?>"> Localidade</p>
			  <p style=" padding:0; margin:0;"><input class="field" type="text" name="localidade" id="localidade"  value="<?=$localidade?$localidade:""?>" /></p>
              </li>
                        <div id="cleardiv"> </div>
          <p class="error wrong_email" style="margin-bottom:-5px;display:<?=($e_email)?"block":"none"?>">Por favor, insira um e-mail válido!</p>
               
               
            <li>
<p  style="float:left; padding:0; margin:0;" id="email_label" class="label_name"display:<?=(!$e_email)?"block":"none"?>">Email</p>
<p style=" padding:0; margin:0;"><input  class="field" type="text" name="email" id="emailFrom" value="<?=$email?$email:""?>"/></p>
            </li>
            
            
             <p class="error wrong_telefone" style="margin-bottom:-5px;display:<?=($telefone)?"block":"none"?>"> Por favor, insira o seu telefone</p>
			<li>
          <p style="float:left; padding:0; margin:0;" id=telefone_label" title="telefone" display:<?=(!$telefone)?"block":"none"?>">Telefone </p>
          <p style=" padding:0; margin:0;"><input class="field" id="telefone" name="telefone" value="<?=$telefone?$telefone:""?>" /></p>
            
          </li>  
            
          <li id="button">

            <input type="submit" name="submitted" id="submitted" value="Enviar" />
             </li>
          
        </ol>
      </form>
</div>
<!--fim do form_holder--></div>







</div>
</body>
</html>
