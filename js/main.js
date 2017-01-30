
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
  var salida_form=document.getElementById("salida_form");
  validaName(event);
 validaLastname(event);
 validaEmail(event);
  validaPass(event);
  validaBici(event);

  /*if(!name &&  !apellido && !email && !pass && !bici)
      salida_form.innerHTML='<p style="color:red;">Llena el formulario correctamente</p>';
  else
      salida_form.innerHTML='<p style="color:green;">Formulario Lleno</p>';*/


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
function validaName(evt) 
{
 var name = document.getElementById("name").value; 
 var nombre = document.getElementById("name"); 
 console.log(evt.target.parentNode);
  var flag=true;
 if(name.length > 0)
  {
    
    var letra=primMayuscula(name);
    document.getElementById("name").value = letra; 
   
    crearNodo( evt.target.parentNode,"Nombre Valido ✔");
     evt.target.parentNode.removeChild(evt.target.nextSibling);
  }
  else{
    
    crearNodo(contenedorName,"Debes Ingresar Nombre");
    evt.target.parentNode.removeChild(evt.target.nextSibling);
    flag=false;
  }
  return flag;
}
//valida el apellido segun el formato valido
function validaLastname(evt) 
{
  var lastname = document.getElementById("lastname").value;    
  var flag=true;
  if(lastname.length > 0)
  {
    
    var letra=primMayuscula(lastname);
    document.getElementById("lastname").value = letra; 
    
    crearNodo( evt.target.parentNode,"Apellido Valido ✔");
    evt.target.parentNode.removeChild(evt.target.nextSibling);
  }
  else{
    
    crearNodo(contenedorLastname,"Debes Ingresar Apellido ");
    evt.target.parentNode.removeChild(evt.target.nextSibling);
    flag=false;
  }
  
  return flag;
}
//valida el email segun el formato valido
function validaEmail(evt) 
{ 
  var email = document.getElementById("input-email");
  var flag=true;
 if(email.value.length > 0 && email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    
    evt.target.parentNode.removeChild(evt.target.nextSibling);//elimino el anterior nodo
    crearNodo(contenedorEmail,"Email Valido ✔");//creo un nuevo nodo
    flag=true;
  }
  else
  {
    crearNodo(contenedorEmail,"Verifique su email");
    evt.target.parentNode.removeChild(evt.target.nextSibling);
    flag=false;
  }
  return flag;
}
//valida la contraseña, el minimo 6 caracteres
function validaPass(evt)
{
  var password = document.getElementById("input-password").value;
  var flag=true;
  if (!password.match(/.{6,}/) || password == "123456" || password.toLowerCase() == "password" || password == "098754")
  {
    crearNodo(contenedorPassword,"Contraseña Invalida");
    evt.target.parentNode.removeChild(evt.target.nextSibling);//elimino el anterior nodo
    flag=false;
  }
  else
  {
    evt.target.parentNode.removeChild(evt.target.nextSibling);
   crearNodo(contenedorPassword,"Password Valido ✔");//creo un nuevo nodo
    flag=true;
  }
  return flag;
}
function validaBici(evt)
{
  var tipo = document.querySelector("select");
  var flag=true;    

  if(tipo.value != 0){
       crearNodo(contenedorBici,"Bici seleccionada ✔");
       flag=true;
  } 
  else
  {   
      evt.target.parentNode.removeChild(evt.target.nextSibling);
      crearNodo(contenedorBici,"Seleccionada una bici");
      flag=false;
  }
   return flag;    
}   