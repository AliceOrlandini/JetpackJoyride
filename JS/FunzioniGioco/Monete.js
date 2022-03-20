function Monete() {
	
	this.moneteNode       = new Array();
	this.moneteImmagine   = new Array();
	this.movimentoMonete  = 100;
	this.altezzaMonete    = 0;
	this.numeroMonete     = 0;
	this.visibilitaMonete = 0;
	this.monete 		  = 0;

	this.init(playground);
}

Monete.prototype.init = 
    function(playground) {
		// Il numero massimo di monete sara' 6, poi daro' la visibilita' ad un numero casuale di monete
		this.numeroMonete = 6;
		
		// Aggiungo le monete
		for(var j = 0; j < this.numeroMonete; ++j){

			// Creo il div della moneta
			this.moneteNode[j] = document.createElement('div');
			this.moneteNode[j].setAttribute('class','monete');
			playground.appendChild(this.moneteNode[j]);

			// Aggiungo l'immagine della moneta
			this.moneteImmagine[j] = document.createElement('img');
			this.moneteImmagine[j].setAttribute('class','moneta');
			this.moneteImmagine[j].setAttribute('alt','moneta');
			this.moneteImmagine[j].src = './../Images/Moneta.png';
			this.moneteNode[j].appendChild(this.moneteImmagine[j]);
		}
	}
/***********************************************
  Funzione per muovere le monete e per 
  controllare se vengono colpite dal giocatore 
************************************************/
Monete.prototype.muoviMonete = 
	function() {
		// Sposto le monete
		this.movimentoMonete -= 1 * aumenta;
		for(var j = 0; j < this.numeroMonete; ++j){
			this.moneteNode[j].style.left = this.movimentoMonete + '%';
		}

		// Aspetto che le monete siano uscite completamente dalla schermata e le ributto in cima
		if(this.movimentoMonete < -20){
			// Rimetto la visibilita' solo ad alcune monete
			this.visibilitaMonete = Math.floor(Math.random() * 4) + 3;
			for(var j = 0; j < this.visibilitaMonete; ++j){

				// Rendo visibili le monete
				this.moneteNode[j].style.opacity = 1;

				// La prima determina l'altezza di tutte le altre
				if(j == 0){
					var min = 60;
					var max = 20;
					this.altezzaMonete =  Math.floor(Math.random() * (max - min + 1)) + min;
				}
				this.moneteNode[j].style.top = this.altezzaMonete + '%';
			}	
			// Inizializzo la variabile
			this.movimentoMonete = 100;
		}
		// Quando il giocatore prende le monete
		var minMoneta = this.altezzaMonete + 50;
		var maxMoneta = this.altezzaMonete + 25;
		for(var j = 0; j < this.numeroMonete; ++j){
			if(this.moneteNode[j].style.opacity == 1 && Math.round(this.movimentoMonete) <= 10 - j*2 && salita < minMoneta && salita > maxMoneta){
				// Tolgo la visibilita' alle monete e incremento il contatore delle monete prese
				this.moneteNode[j].style.opacity = 0;
				this.monete++;
			}
		}
	}