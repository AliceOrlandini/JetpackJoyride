var game = null;
var salita = 90;
var discesa = 1;
var sensibilita = 3;
var aumenta  = 1;
var giocoFermo = 0;

function begin() {
    game = new Game(document.getElementById("playground"));
    salita = 90;
    discesa = 1;
    sensibilita = 3;
    aumenta = 1;
}

function Game(playground) {

    this.salto        = 1;
    this.numCicli     = 0;
    this.letteraRazzo = 'b';
    this.primaVolta   = 0;
    
    // Cambio il colore dello sfondo
	document.body.style.backgroundColor = 'rgb(143,159,176)';

	// Rimuovo gli elementi presenti nel playground
  	while (playground.firstChild){
    	playground.removeChild(playground.firstChild);
  	}

    // Faccio partire il gioco
    playground.addEventListener('mouseenter', this.start.bind(this), false);
    document.addEventListener('keydown', this.keydown.bind(this), false);
    document.addEventListener('keyup', this.keyup.bind(this), false);

    this.GameStatus     = new GameStatus();
    this.audio          = new Audio(playground, '../Audio/Audio.mp3');
    this.informazioni   = new Informazioni(playground);
	this.esplosione     = new Esplosione(playground);
    this.personaggio    = new Personaggio(playground);
    this.elettrodo      = new Elettrodo(playground);
    this.monete         = new Monete(playground);
}

Game.prototype.start = 
    function() {
        if(giocoFermo == 0)
            this.GameStatus.start(this.clock.bind(this));
    }

Game.prototype.clock = 
    function() {
        // Faccio muovere il personaggio
        this.personaggio.muoviPersonaggio();

        // Aggiorno i metri e le monete
        this.informazioni.monete = this.monete.monete;
        this.informazioni.aggiornaMetrieMonete();

        // Faccio scendere il giocatore solo se non sono gia' sul pavimento
        if(salita < 90){
            // Imposto l'immagine del giocatore che scende
            this.personaggio.giocatoreImmagine.src = './../Images/Giocatore/Giocatore7.png';

            // Faccio scendere il giocatore
            salita    += 0.5 * discesa;
            discesa   += 0.2;

            // Caso in cui con l'addizione vada sopra il valore massimo
            if(salita > 90){
                salita = 90;
            }
            this.personaggio.giocatoreNode.style.top = salita + '%'; 
        }

        // Chiamo la funzione per far muovere l'elettrodo
        this.elettrodo.muoviElettrodo(this.GameStatus, this.personaggio, document.getElementById("playground"), this.informazioni.metri, this.informazioni.monete);

        // Chiamo la funzione per far muovere le monete
        this.monete.muoviMonete();

        // Voglio che il razzo venga creato una sola volta
        // un po' dopo l'elettrodo per questo uso le variabili
        // numCicli e primaVolta
        this.numCicli++;
        if(this.numCicli == 100 && this.primaVolta == 0){

            // Creo il razzo 
            this.razzo = new Razzo(playground);
            this.letteraRazzo = 'a';
            this.primaVolta   = 1;
        }
        // La funzione muoviRazzo dovra' essere eseguita solo dopo che il razzo e' stato creato
        if(this.letteraRazzo == 'a'){

            // Faccio muovere il razzo
            this.razzo.muoviRazzo(this.GameStatus, this.personaggio, document.getElementById("playground"), this.informazioni.metri, this.informazioni.monete);
        }
    }

Game.prototype.keydown = 
    function(e){ 
        // Permetto di far saltare il giocatore solo se non e' morto
        if(this.personaggio.morto == 0){
            // e = e || window.event;
        
            // "Blocco" la gravita' (perche' così viene moltiplicata per zero)
            discesa = 0;
            
            if (e.code === 'Space'){
                // Eseguo solo se non sono sul soffitto
                if(salita >= 20){
                    // Nuovi valori di salita
                    salita -= sensibilita * this.salto;
                    this.salto++;
            
                    // Caso in cui la sottrazione vada sotto il valore minimo
                    if(salita < 20){
                        salita = 20;
                    }
            
                    // Metto la fiamma
                    this.personaggio.fiammaImmagine.style.opacity = 1;
                    
                    // Faccio salire il giocatore
                    this.personaggio.giocatoreNode.style.top = salita + '%'; // salita
                }
            }
        }   
    }

Game.prototype.keyup = 
    function(e){
        // Quando viene rilasciata la barra spaziatrice
        // il giocatore dovra' scendere
        if (e.code == 'Space') {
            this.salto   = 1;
            discesa = 1.5;
        
            // Tolgo la fiamma
            this.personaggio.fiammaImmagine.style.opacity = 0;
        }
    }