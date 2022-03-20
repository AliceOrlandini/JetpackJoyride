function aggiornaSensibilita(){
	var e = document.getElementById("qualesensibilita");
	var sensibilita = e.options[e.selectedIndex].value;

	var xmlHttp = new XMLHttpRequest();

	var parametro = 'sensibilita=' + sensibilita;
	xmlHttp.open("POST", "SelezionaSensibilita.php", true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(parametro);

	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState === 4) {
			if(xmlHttp.status == 200){
				if(Number(xmlHttp.responseText) >= 0){
					alert("Sensibilità impostata con successo");
				}
				else if(Number(xmlHttp.responseText) == -2){
					alert("Questa sensibilita è già impostata");
				}
			}
		}
	}
}