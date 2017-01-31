//-------------------------------FUNCION QUE CREA NODOS (SPAN)-----------------------------------//
function crearNodo( contenedor , mensaje)
{
  var nodo = document.createElement("span");
  nodo.innerText = mensaje;
  contenedor.appendChild(nodo);
}
//-------------------------------FUNCION QUE ELIMINA NODOS (SPAN)-----------------------------------//
function eliminarNodo( contenedor , campo)
{
  contenedor.removeChild(campo.nextSibling);
}
//-------------------------------FUNCION PRINCIPAL LLAMA A LAS DEMAS FUNCIONES---------------------//
//------------------------NO SE PUEDE MANDAR EL FORMULARIO SI LOS CAMPOS NO SON CORRECTOS----------//
function validateForm()
{    
  var salida_form=document.getElementById("salida_form");
  validaName();
  validaLastname(); 
  validaEmail(); 
  validaPass(); 
  validaBici();
      
  if(validaName() == true && validaLastname()==true && validaEmail()==true && validaPass()==true && validaBici()==true)
      salida_form.innerHTML='<p style="color:green;">Formulario Enviado Correctamente ✔</p>';  
  else
     salida_form.innerHTML='<p style="color:red;">Llena todos los campos correctamente</p>';
}
//----------------------------------------CONVIERTE LA PRIMERA LETRA EN MAYUSCULA-----------------------------------//
function primMayuscula(id)
{
    var nombreArray = id.split("");
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
    return primeraMayus;
} 
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
function validaName() 
{
  var name = document.getElementById("name"); 
  var isValid=false;
 if(name.value.length > 0 && name.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(name.value);
    document.getElementById("name").value = palabra; 
    crearNodo( contenedorName,"Nombre Valido ✔.");
    eliminarNodo(contenedorName,name);
    isValid=true;
  }
  else{
    crearNodo(contenedorName,"Debes Ingresar un nombre valido (solo letras).");
    eliminarNodo(contenedorName,name);
    isValid=false;
  }
  return isValid;
}
//------------------------------------------VALIDA EL APELLIDO SEGUN FORMATO DADO----------------------------------//
function validaLastname() 
{
  var lastname = document.getElementById("lastname");    
  var isValid=false;
  if(lastname.value.length > 0 && lastname.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(lastname.value);
    document.getElementById("lastname").value = palabra;  
    crearNodo( contenedorLastname,"Apellido Valido ✔.");
    eliminarNodo(contenedorLastname,lastname);
    isValid=true;
  }
  else{ 
    crearNodo(contenedorLastname,"Debes Ingresar un apellido valido (solo letras).");
    eliminarNodo(contenedorLastname,lastname);
    isValid=false;
  }
  return isValid;
}
//-------------------------------------------VALIDA EMAIL SEGUN FORMATO DADO----------------------------------------//
function validaEmail() 
{ 
  var email = document.getElementById("input-email");
  var isValid=false;
 if(email.value.length > 0 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    
    crearNodo(contenedorEmail,"Email Valido ✔.");
    eliminarNodo(contenedorEmail,email);
    isValid=true;
  }
  else{
    crearNodo(contenedorEmail,"Debes Ingresar un email valido.");
    eliminarNodo(contenedorEmail,email);
    isValid=false;
  }
  return isValid;
}
//--------------------------------------------VALIDA CONTRASEÑA SEGUN FORMATO DADO-----------------------------------//
function validaPass()
{
  var password = document.getElementById("input-password");
  var isValid=false;
  if (!password.value.match(/.{6,}/) || password.value == "123456" || password.value.toLowerCase() == "password" || password.value == "098754"){
    crearNodo(contenedorPassword,"Debes Ingresar una contraseña valida.");
    eliminarNodo(contenedorPassword,password);
    isValid=false;
  }
  else{
    eliminarNodo(contenedorPassword,password);
    crearNodo(contenedorPassword,"Contraseña Valida ✔.");
    isValid=true;
  }
  return isValid;
}
//------------------------------------------VALIDA QUE SELECCIONES UN TIPO DE BICICLETA---------------------------------//
function validaBici()
{
  var tipo = document.querySelector("select");
  var isValid=false;    
  if(tipo.value != 0){
    eliminarNodo(contenedorBici,tipo);
    crearNodo(contenedorBici,"Bicicleta seleccionada ✔.");
    isValid=true;
  } 
  else
  {   
    eliminarNodo(contenedorBici,tipo);
    crearNodo(contenedorBici,"Debes seleccionar un tipo de  Bicicleta.");
    isValid=false;
  }
   return isValid;    
}   
//_----------------------------------------------------------FIN-------------------------------------------------------//