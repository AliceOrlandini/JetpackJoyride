function richiestaAcquisto(gadget){
	var xmlHttp = new XMLHttpRequest();

	var parametro = 'gadget=' + gadget;
	xmlHttp.open("POST", "ControlloAcquisto.php", true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(parametro);

	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState === 4) {
			if(xmlHttp.status == 200){
				if(Number(xmlHttp.responseText) > 0){
					if(window.confirm("Questo gadget costa " + xmlHttp.responseText + " monete, procedere all'acquisto?")){
						Acquisto(gadget);
					}
				}
				else if(Number(xmlHttp.responseText) == -2){
					alert("Non hai abbastanza monete!");
				}
				else if(Number(xmlHttp.responseText) == -1){
					alert("Hai già acquistato questo gadget!");
				}
			}
			else
				alert("errore numero " + xmlHttp.status);
		}
	}
}
function Acquisto(gadget){
	var xmlHttp1 = new XMLHttpRequest();

	var parametro = 'gadget=' + gadget;
	xmlHttp1.open("POST", "Acquisto.php", true);
	xmlHttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp1.send(parametro);

	xmlHttp1.onreadystatechange = function() {
		if(xmlHttp1.readyState === 4) {
			if(xmlHttp1.status == 200){
				if(Number(xmlHttp1.responseText) >= 0){
					alert("Acquisto avvenuto con successo!");

					document.getElementById("moneta").textContent = xmlHttp1.responseText;
					
					var option = document.createElement('option');
					option.value = gadget;

					var e = document.getElementById("qualegadget");
					e.options[0].setAttribute('selected','false');
					option.setAttribute('selected','true');

					option.appendChild(document.createTextNode(gadget));
					document.getElementById('qualegadget').appendChild(option);
				}
				else{
					alert("Acquisto non avvenuto");
				}
			}
		}
	}
}
function cambiaGadget(){
	var e = document.getElementById("qualegadget");
	var gadget = e.options[e.selectedIndex].value;

	var xmlHttp = new XMLHttpRequest();

	var parametro = 'gadget=' + gadget;
	xmlHttp.open("POST", "SelezionaGadget.php", true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(parametro);

	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState === 4) {
			if(xmlHttp.status == 200){
				if(Number(xmlHttp.responseText) >= 0){
					alert("Cambio avvenuto con successo!");
				}
				else if(Number(xmlHttp.responseText) == -2){
					alert("Il gadget è già selezionato");
				}
			}
		}
	}
}