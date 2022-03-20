function Esplosione(playground) {

	this.esplosioneNode = null;
	this.esplosioneImmagine = null;

	this.init(playground);

	this.explosion(playground);
}

Esplosione.prototype.init = 
    function(playground) {
		// Creo il div dell'immagine
		this.esplosioneNode = document.createElement('div');
		this.esplosioneNode.setAttribute('id','Esplosione');
		playground.appendChild(this.esplosioneNode);

		// Creo l'immagine dentro il div dell'esplosione
		this.esplosioneImmagine = document.createElement('img');
		this.esplosioneImmagine.setAttribute('id','Exp');
		this.esplosioneImmagine.src = "./../Images/Esplosione/Esplosione0.png";
		this.esplosioneNode.appendChild(this.esplosioneImmagine);
	}

Esplosione.prototype.explosion = 
	function(playground) {
		// Variabili per creare l'effetto dell'esplosione  
		var id = setInterval(frame, 50);
		var i = 0;
		var esplosioneNode = this.esplosioneNode;
		var esplosioneImmagine = this.esplosioneImmagine;
		function frame() {
			if(i == 4) {
			  // Cambio lo sfondo e lo imposto scorrevole
			  playground.style.setProperty("-webkit-animation", "slide 25s linear infinite");
			  playground.style.backgroundImage = "url('./../Images/SfondoGioco.png')";
		  	}
		  	if (i == 7) {
			  	// L'esplosione e' finita
			  	clearInterval(id);
			  	esplosioneNode.removeChild(esplosioneNode.childNodes[0]);	
		  	}
		  	else {
			  	// Cambio l'immagine dell'esplosione
			  	esplosioneImmagine.src = "./../Images/Esplosione/Esplosione" + i + ".png";
			  	i++;
		  	}
		}
	}