

//validar que todos los campos esten llenos
function validateForm()
{
  var salida_enviar = document.getElementById("salida_enviar");
  var nombre = document.getElementById("name").value;   
  var lastname = document.getElementById("lastname").value;    
  if( nombre.length == 0 && lastname.length == 0 && validaEmail()==false && validaPass()==false && validaBici()==false)
  { 
    salida_name.innerHTML="<span style='color:red; font-size:15px;' >Debe Ingresar su Nombre</span>";  
    salida_lastname.innerHTML="<span style='color:red; font-size:15px;' >Debe  Ingresar su Apellido</span>"; 
    salida_mail.innerHTML="<span style='color:red; font-size:15px;' >Debe Ingresar su correo</span>";
    salida_pass.innerHTML="<span style='color:red; font-size:15px;'>Debe Ingresar su Contraseña</span";
    salida_bici.innerHTML="<span style='color:red; font-size:15px;'>Debe seleccionar una bici</span>";
    
   	return false;
  } 
}	

//valida solo letras en el campo de nombres y apellidos
function checkInput(evt)
{
  //console.log(window.event.keyCode);
  if(window.event.keyCode >='65' && window.event.keyCode<='90' || window.event.keyCode =='8' || window.event.keyCode =='32' )
    return true;
  else
  	//salida_name.innerHTML="<span style='color:red; font-size:15px;' >Debes escribir letras</span>";
    evt.preventDefault();
}
//convierte la primera letra en mayuscula
function validaName() 
{
    var lastname = document.getElementById("name").value;    
    var nombreArray = lastname.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        } 

        salida_name.innerHTML="<span style='color:white; font-size:15px;' >Apellido valido ?</span>";  
        document.getElementById("name").value = primeraMayus; 
 }
//valida el apellido segun el formato valido
function validaLastname() 
{
    var lastname = document.getElementById("lastname").value;    
    var nombreArray = lastname.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        } 

        salida_lastname.innerHTML="<span style='color:white; font-size:15px;' >Apellido valido ?</span>";  
        document.getElementById("lastname").value = primeraMayus; 
}
//valida el email segun el formato valido
function validaEmail() 
{
  
  var email = document.getElementById("input-email").value;
  var salida_mail = document.getElementById("salida_mail");
  
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
  {
    salida_mail.innerHTML="<span style='color:red; font-size:15px;' >Formato Invalido, Ej: name@domain.com</span>";
    return false;
  }
  else 
  {
    salida_mail.innerHTML="<span style='color:white; font-size:15px;'>Email valido ?</span>";
    return true;
  }
  
}
//valida la contraseña, el minimo 6 caracteres
function validaPass()

{
  var password = document.getElementById("input-password").value;
  var salida_pass = document.getElementById("salida_pass");
  if (!password.match(/.{6,}/)) 
  {
    salida_pass.innerHTML="<span style='color:red; font-size:15px;'>Minimo 6 caracteres</span>";
    return false;
  }
  else if ( password == "123456" || password.toLowerCase() == "password" || password == "098754") 
  {
    salida_pass.innerHTML="<span style='color:red; font-size:15px;' >Contraseña Invalida</span>";
    return false;
  }
  else 
  {
    salida_pass.innerHTML="<span style='color:white; font-size:15px;'>Contraseña valida ?</span";
    return true;
  }
}
function validaBici()

{
  var tipoBici = document.getElementById("select_bici").value;
  var salida_bici = document.getElementById("salida_bici");
  if (tipoBici != 0)
  {
     salida_bici.innerHTML="<span style='color:white; font-size:15px;'>Bici Seleccionada ?</span>";
    return true; 
  }
  else 
  {
    salida_bici.innerHTML="<span style='color:red; font-size:15px;'>Selecciona una Bici</span>";
    return false;
    
  }
}