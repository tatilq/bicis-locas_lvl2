//funcion que cree nodos 
function crearNodo(	contenedor , mensaje)
{
	var nodo = document.createElement("span");
	nodo.innerText = mensaje;
	contenedor.appendChild(nodo);
}
//funcion valida formulario
function validateForm()
{    
  validaName();
  validaLastname();
  validaEmail();
  validaPass();
  validaBici();
}
//solo se pueden ingresar numeros x el teclado
function checkInput(evt)
{
  if(window.event.keyCode >='65' && window.event.keyCode<='90' || window.event.keyCode =='8' || window.event.keyCode =='32')
    return true;
  else
    evt.preventDefault();
}
//convierte la primera letra de una palabra en mayuscula
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
//convierte la primera letra en mayuscula
function validaName() 
{
  var name = document.getElementById("name").value; 
  if(name.length==0)
    {  
       crearNodo( contenedorName ,"Debes Ingresar Nombre");
    } 
  if(name.length!= 0){
      var letra=primMayuscula(name);
      document.getElementById("name").value = letra; 
      crearNodo( contenedorName ,"Nombre Valido ✔");
   } 
}
//valida el apellido segun el formato valido
function validaLastname() 
{
  var lastname = document.getElementById("lastname").value;    
  if(lastname==0){
      crearNodo(contenedorLastname,"Debes Ingresar Apellido");}
  if(lastname.length!= 0)
  {
    var letra=primMayuscula(lastname);
    crearNodo(contenedorLastname,"Apellido Valido ✔");
    document.getElementById("lastname").value = letra; 
  }
}
//valida el email segun el formato valido
function validaEmail() 
{ 
  var email = document.getElementById("input-email").value;
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ crearNodo(contenedorEmail,"Formato Invalido, Ej: name@domain.com");}
  else{ crearNodo(contenedorEmail,"Email valido ✔");}
}
//valida la contraseña, el minimo 6 caracteres
function validaPass()
{
  var password = document.getElementById("input-password").value;
  if (!password.match(/.{6,}/)){ crearNodo(contenedorPassword,"Minimo 6 caracteres");}
  else if ( password == "123456" || password.toLowerCase() == "password" || password == "098754") 
  {
    crearNodo(contenedorPassword,"Contraseña Invalida");
  }
  else{ crearNodo(contenedorPassword,"Contraseña valida ✔");}
}
function validaBici()
{
  var tipoBici = document.getElementById("select_bici").value;
  if (tipoBici != 0){ crearNodo(contenedorBici,"Bici Seleccionada  ✔");}
  else{ crearNodo(contenedorBici,"Selecciona una Bici");}
}