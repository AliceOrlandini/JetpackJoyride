function Razzo(playground) {

	this.razzoNode            = null;
	this.razzoImmagine        = null;
	this.movimentoRazzo       = 94;
	this.aspettaAPartire      = 0;
	this.ultimaPosizioneRazzo = 0;
	
	this.init(playground);
}

Razzo.prototype.init = 
	function(playground) {

		// Creo il div del razzo
		this.razzoNode = document.createElement('div');
		this.razzoNode.setAttribute('id','razzi');
		playground.appendChild(this.razzoNode);

		// Aggiungo l'immagine del razzo
		this.razzoImmagine = document.createElement('img');
		this.razzoImmagine.setAttribute('id','razzo');
		this.razzoImmagine.setAttribute('alt','razzo');

		// Inizializzo la posizione del razzo
		this.inizializzaRazzo();

		this.razzoNode.appendChild(this.razzoImmagine);
	}

/************************************************
    Funzione per inizializzare la posizione
    e le dimensioni del razzo
*************************************************/
Razzo.prototype.inizializzaRazzo = 
	function() {

		// Imposto l'immagine dell'attenzione e la posizione iniziale
		this.razzoImmagine.src 	  = './../Images/Razzi/Attenzione0.png';
		this.razzoNode.style.left = '94%';
		this.razzoNode.style.top  = '50%';

		// Cambio le dimensioni perche' l'immagine dell'attenzione
		// e' leggermente piu' grande di quella del razzo
		this.razzoNode.style.width     = '5%';
		this.razzoNode.style.height    = '8%';
		this.razzoImmagine.style.width = '80%';

		// Inizializzo le variabili
		this.movimentoRazzo  = 94;
		this.aspettaAPartire = 0;
	}

/***********************************************
  Funzione per muovere i razzi e per 
  controllare se vengono colpiti dal giocatore 
************************************************/
Razzo.prototype.muoviRazzo = 
	function(GameStatus, personaggio, playground, metri, monete) {
		this.aspettaAPartire++;

		// Quando il razzo ha smesso di seguire il giocatore
		if(this.aspettaAPartire > 50){
			// Sposto il razzo
			this.movimentoRazzo 	 -= 1.3 * aumenta;
			this.razzoNode.style.left = this.movimentoRazzo + '%';

			// Metto l'immagine del razzo
			this.razzoImmagine.src = './../Images/Razzi/Razzo1.png';
			
			// Perche' l'immagine dell'attenzione e' leggermente
			// piu' grande di quella del razzo
			this.razzoImmagine.style.width = '100%';
			this.razzoNode.style.width     = '10%';
			this.razzoNode.style.height    = '8%';

		}
		else{
			// Il razzo dovra' seguire il giocatore
			var segui = (salita - 37);
			this.razzoNode.style.top = segui + '%';

			// Mi salvo l'ultima posizione del razzo prima di partire
			this.ultimaPosizioneRazzo = salita;
		}

		// Aspetto che il razzo sia uscito completamente 
		// dalla schermata e inizializzo come all'inizio
		if(this.movimentoRazzo < -5){

			// Chiamo la funzione per inizializzare il razzo
			this.inizializzaRazzo();
		}

		// Quando il razzo colpisce il giocatore 
		var minRazzo = this.ultimaPosizioneRazzo + 10;
		var maxRazzo = this.ultimaPosizioneRazzo - 1;
		if(Math.round(this.movimentoRazzo) <= 10 && Math.round(this.movimentoRazzo)  >= 2 && salita < minRazzo && salita > maxRazzo) {
			personaggio.morte(GameStatus, playground, metri, monete);
	
			this.movimentoRazzo       = 94;
			this.aspettaAPartire      = 0;
			this.ultimaPosizioneRazzo = 0;
		}
	}