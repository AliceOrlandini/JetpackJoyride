function validateForm(){

  // Controllo che l'username sia formato da una sola parola
  var text = document.getElementById('username').value;
  text = text.split(' '); 
  if(text.length != 1){
    alert("L'USERNAME DEVE ESSERE FORMATO DA UNA SOLA PAROLA");
    return false;
  }

  // Controllo che l'username abbia minimo 5 caratteri
  if (document.getElementById('username').value.length < 5) {
    alert("L'USERNAME DEVE AVERE MINIMO 5 CARATTERI");
    return false;
  }

  // Controllo che l'username abbia al massimo 15 caratteri
  if (document.getElementById('username').value.length > 15) {
    alert("L'USERNAME DEVE AVERE AL MASSIMO 20 CARATTERI");
    return false;
  }

  // Controllo che la password sia formata da una sola parola
  text = document.getElementById('password').value;
  text = text.split(' '); 
  if(text.length != 1){
    alert("LA PASSWORD DEVE ESSERE FORMATA DA UNA SOLA PAROLA");
    return false;
  }

  // Controllo che l'username abbia minimo 5 caratteri
  if (document.getElementById('password').value.length < 5) {
      alert("LA PASSWORD DEVE AVERE MINIMO 5 CARATTERI");
      return false;
  }
    
  // Controllo che l'username abbia al massimo 15 caratteri
  if (document.getElementById('password').value.length > 20) {
    alert("L'USERNAME PU0' AVERE AL MASSIMO 20 CARATTERI");
    return false;
  }

	// Controllo che le password siano uguali
  if(document.getElementById("password").value != document.getElementById("confermapassword").value){
    alert('PASSWORD DIVERSE');
   	return false;
  }

  // Valido l'email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
    return true;
  else{
    alert("EMAIL NON VALIDA")
    return false;
  }
}