//span.style.display="none";
//funcion que cree nodos 
function crearNodo(	contenedor , mensaje)
{
	var nodo = document.createElement("span");
	nodo.innerText = mensaje;
	contenedor.appendChild(nodo);
}
//validar que todos los campos esten llenos
function validateForm()
{
  var salida_enviar = document.getElementById("salida_enviar");
  var nombre = document.getElementById("name").value;   
  var lastname = document.getElementById("lastname").value;    
  if( nombre.length == 0 && lastname.length == 0 && validaEmail()==false && validaPass()==false && validaBici()==false)
  { 
  	salida_name.innerHTML="<span style='color:white; font-size:15px;' >Debe Ingresar su Nombre</span>";  
    salida_lastname.innerHTML="<span style='color:white; font-size:15px;' >Debe  Ingresar su Apellido</span>"; 
    salida_mail.innerHTML="<span style='color:red; font-size:15px;' >Debe Ingresar su correo</span>";
    salida_pass.innerHTML="<span style='color:red; font-size:15px;'>Debe Ingresar su Contraseña</span";
    salida_bici.innerHTML="<span style='color:red; font-size:15px;'>Debe seleccionar una bici</span>";
    salida_form.innerHTML='<p style="color:red;">Faltan llenar Campos</p> ✔';
   	return false;
  } 
  if( nombre.length != 0 && lastname.length != 0 && validaEmail()==true && validaPass()==true && validaBici()==true)
  { 
	salida_form.innerHTML='<p style="color:green;">Formulario enviado</p> ✔';
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
    var name = document.getElementById("name").value;    
    var nombreArray = name.split("");
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
    var textNombre="Nombre Valido ✔";
	crearNodo(contenedorName,textNombre);
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
	var textLastname="Apellido Valido ✔";
    crearNodo(contenedorLastname,textLastname);
    document.getElementById("lastname").value = primeraMayus; 
}
//valida el email segun el formato valido
function validaEmail() 
{
  
  var email = document.getElementById("input-email").value;
  var salida_mail = document.getElementById("salida_mail");
  var textEmailFalla="Formato Invalido, Ej: name@domain.com";
  var textEmailValido="Email valido ✔";
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
  {
  	crearNodo(contenedorEmail,textEmailFalla);
    return false;
  }
  else 
  {
    crearNodo(contenedorEmail,textEmailValido);
    return true;
  }
  
}
//valida la contraseña, el minimo 6 caracteres
function validaPass()

{
  var password = document.getElementById("input-password").value;
  var salida_pass = document.getElementById("salida_pass");
  var textPassFalla="Minimo 6 caracteres";
  var textPasValida="Contraseña valida ✔";
  var textPasInvalida="Contraseña Invalida";
  if (!password.match(/.{6,}/)) 
  {
  	crearNodo(contenedorPassword,textPassFalla);
    return false;
  }
  else if ( password == "123456" || password.toLowerCase() == "password" || password == "098754") 
  {
    crearNodo(contenedorPassword,textPasInvalida);
    return false;
  }
  else 
  {
    crearNodo(contenedorPassword,textPasValida);
    return true;
  }
}
function validaBici()
{
  var tipoBici = document.getElementById("select_bici").value;
  var salida_bici = document.getElementById("salida_bici");
  var textBici="Bici Seleccionada  ✔";
  var textBiciInv="Selecciona una Bici";
  if (tipoBici != 0)
  {
  	
  	crearNodo(contenedorBici,textBici);
    return true; 
  }
  else 
  {
  	crearNodo(contenedorBici,textBiciInv);
    return false;
    
  }
}