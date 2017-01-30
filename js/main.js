//VARIABLES GOBLALES DE LOS CONTENEDORES 
var contenedorName=document.getElementById("contenedorName");
var contenedorLastname=document.getElementById("contenedorLastname");
var contenedorEmail=document.getElementById("contenedorEmail");
var contenedorPassword=document.getElementById("contenedorPassword");
var contenedorBici=document.getElementById("contenedorBici");
//FUNCION QUE CREA NODOS (SPAN)
function crearNodo( contenedor , mensaje)
{
  var nodo = document.createElement("span");
  nodo.innerText = mensaje;
  contenedor.appendChild(nodo);
}
//FUNCION PRINCIPAL LLAMA A LAS DEMAS FUNCIONES
//NO SE PUEDE MANDAR EL FORMULARIO SI LOS CAMPOS NO SON CORRECTOS
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
//SOLO INGRESAR NUMEROS POR EL TECLADO
function checkInput(evt)
{
  if(window.event.keyCode >='65' && window.event.keyCode<='90' || window.event.keyCode =='8' || window.event.keyCode =='32')
    return true;
  else
    evt.preventDefault();
}
// CONVIERTE LA PRIMERA LETRA EN MAYUSCULA
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
//VALIDA NOMBRE SEGUN FORMATO VALIDO
function validaName() 
{
 var name = document.getElementById("name"); 
  var flag=false;
 if(name.value.length > 0)
  {
    
    var letra=primMayuscula(name.value);
    document.getElementById("name").value = letra; 
    crearNodo( contenedorName,"Nombre Valido ✔");
    contenedorName.removeChild(name.nextSibling);
     
     flag=true;
  }
  if(name.value.length == 0){
    
    crearNodo(contenedorName,"Debes Ingresar Nombre");
    contenedorName.removeChild(name.nextSibling);
    flag=false;
  }
  return flag;
}
//VALIDA EL APELLIDO SEGUN FORMATO DADO
function validaLastname() 
{
  var lastname = document.getElementById("lastname");    
  var flag=false;
  if(lastname.value.length > 0)
  {
    
    var letra=primMayuscula(lastname.value);
    document.getElementById("lastname").value = letra; 
    
    crearNodo( contenedorLastname,"Apellido Valido ✔");
    contenedorLastname.removeChild(lastname.nextSibling);
    flag=true;
  }
  if(lastname.value.length == 0){
    
    crearNodo(contenedorLastname,"Debes Ingresar Apellido ");
    contenedorLastname.removeChild(lastname.nextSibling);
    flag=false;
  }
  return flag;
}
//VALIDA EMAIL SEGUN FORMATO DADO
function validaEmail() 
{ 
  var email = document.getElementById("input-email");
  var flag=false;
 if(email.value.length > 0 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    
    crearNodo(contenedorEmail,"Email Valido ✔");
    contenedorEmail.removeChild(email.nextSibling);
    
    flag=true;
  }
  else
  {
    crearNodo(contenedorEmail,"Debes ingresar un email valido");
    contenedorEmail.removeChild(email.nextSibling);
    flag=false;
  }
  return flag;
}
//VALIDA CONTRASEÑA SEGUN FORMATO DADO
function validaPass()
{
  var password = document.getElementById("input-password");
  var flag=false;
  if (!password.value.match(/.{6,}/) || password.value == "123456" || password.value.toLowerCase() == "password" || password.value == "098754")
  {
    crearNodo(contenedorPassword,"Debes Ingresar una contraseña valida");
    contenedorPassword.removeChild(password.nextSibling);
    flag=false;
  }
  else
  {
    contenedorPassword.removeChild(password.nextSibling);
   crearNodo(contenedorPassword,"Contraseña Valida ✔");
    flag=true;
  }
  return flag;
}
//VALIDA QUE SELECCIONES UN TIPO DE BICICLETA
function validaBici()
{
  var tipo = document.querySelector("select");
  var flag=false;    

  if(tipo.value != 0){
    contenedorBici.removeChild(tipo.nextSibling);
       crearNodo(contenedorBici,"Bicicleta seleccionada ✔");
       flag=true;
  } 
  else
  {   
      contenedorBici.removeChild(tipo.nextSibling);
      crearNodo(contenedorBici,"Debes seleccionar un tipo de  Bicicleta");
      flag=false;
  }
   return flag;    
}   