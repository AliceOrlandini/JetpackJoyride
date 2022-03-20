function Elettrodo(playground) {

    this.elettrodoPresente  = 1;
    this.elettrodiNode      = null;
    this.elettrodiImmagine  = null;
    this.movimentoElettrodo = 93;
    this.altezza            = 0;
    this.tipo               = 0;
    this.angolo             = 0;
    this.lettera            = 'a';
    this.elettrodoPresente  = 0;

    this.init(playground);
}

Elettrodo.prototype.init = 
    function(playground) {
        // Creo il div degli elettrodi
        this.elettrodiNode = document.createElement('div');
        this.elettrodiNode.setAttribute('id','elettrodi');
        playground.appendChild(this.elettrodiNode);

        // Aggiungo l'immagine
        this.elettrodiImmagine = document.createElement('img');
        this.elettrodiImmagine.setAttribute('alt','elettrodo');
        this.elettrodiImmagine.setAttribute('id','elettrodo');

        // Chiamo la funzione per inizializzare la posizione dell'elettrodo
        this.inizializzaElettrodo();

        this.elettrodiNode.appendChild(this.elettrodiImmagine);
    }

/******************************************
  Funzione per inizializzare la posizione
  degli elettrodi 
*******************************************/
Elettrodo.prototype.inizializzaElettrodo = 
    function() {
        // Genero un numero casuale per determinare il tipo di elettrodo
        this.tipo = Math.floor(Math.random() * 3);
        this.elettrodiImmagine.src = './../Images/Elettrodi/Elettrodi' + this.tipo + this.lettera + '.png';

        // Imposto valori casuali per la posizione (senza andare sopra il tetto e sotto il pavimento)
        var min = 50;
        var max = 20;
        this.altezza = Math.floor(Math.random() * (max - min + 1)) + min;
        this.elettrodiNode.style.top = this.altezza + '%';
    }

/***********************************************
  Funzione per muovere gli elettrodi e per 
  controllare se vengono colpiti dal giocatore 
************************************************/
Elettrodo.prototype.muoviElettrodo = 
    function(GameStatus, personaggio, playground, metri, monete) {
        // Sposto l'elettrodo
        this.movimentoElettrodo -= 1 * aumenta;
        document.getElementById('elettrodi').style.left = this.movimentoElettrodo + '%';
        
        // Questo serve per cambiare l'immagine dell'elettrodo e dare l'impressione della scossa elettrica
        if(this.lettera == 'a')
            this.lettera = 'b';
        else
            this.lettera = 'a';
        this.elettrodiImmagine.src = './../Images/Elettrodi/Elettrodi' + this.tipo + this.lettera + '.png';

        // Aspetto che l'elettrodo sia uscito completamente 
        // dalla schermata e lo ributto in cima
        if(this.movimentoElettrodo < -10){

            // Riporto l'elettrodo in cima
            this.movimentoElettrodo = 100;

            // Chiamo la funzione per inizializzare la posizione dell'elettrodo
            this.inizializzaElettrodo();
        }

        // Variabili per la lunghezza dell'elettrodo
        var minElettrodo = 0;
        var maxElettrodo = 0;

        // L'intervallo dell'urto variera' a seconda del tipo di elettrodo:
        // Tipo 0 (elettrodo piccolo) 
        if(this.tipo == 0){

            minElettrodo = this.altezza + 34;
            maxElettrodo = this.altezza - 1;
        }

        // Tipo 1 (elettrodo medio) 
        if(this.tipo == 1){

            minElettrodo = this.altezza + 44;
            maxElettrodo = this.altezza - 1;
        }

        // Tipo 2 (elettrodo grande) 
        if(this.tipo == 2){

            minElettrodo = this.altezza + 50;
            maxElettrodo = this.altezza - 1;
        }

        // Se l'elettrodo viene colpito
        if(Math.round(this.movimentoElettrodo) == 10 && salita < minElettrodo && salita > maxElettrodo) {
            personaggio.morte(GameStatus, playground, metri, monete);
            
            this.movimentoElettrodo = 93;
            this.altezza            = 0;
            this.tipo               = 0;
            this.angolo             = 0;
            this.lettera            = 'a';
            this.elettrodoPresente  = 0;
        }         
    }