function Personaggio(playground) {

  this.giocatoreNode     = null;
  this.giocatoreImmagine = null;
  this.i     = 0;
  this.conta = 0;

  this.fiammaImmagine = null;
  this.gadgetImmagine = null;
  this.numCicli       = 0;
  this.letteraRazzo   = 'b';
  this.primaVolta     = 0;

  this.morto      = 0;
  this.scendi     = null;
  this.distante   = 5;
  this.tipoGadget = 0;

  this.init(playground);
}

Personaggio.prototype.init =
  function(playground) {

    // Creo il div del giocatore
    this.giocatoreNode = document.createElement('div');
    this.giocatoreNode.setAttribute('id','boxGiocatore');
    playground.appendChild(this.giocatoreNode);

    // Aggiungo l'immagine dentro il div del giocatore
    this.giocatoreImmagine = document.createElement('img');
    this.giocatoreImmagine.setAttribute('id','giocatore');
    this.giocatoreImmagine.setAttribute('alt','giocatore');
    this.giocatoreImmagine.src = "./../Images/Giocatore/Giocatore0.png";
    this.giocatoreNode.appendChild(this.giocatoreImmagine);

    // Aggiungo la fiamma dentro il div del giocatore
    this.fiammaImmagine = document.createElement('img');
    this.fiammaImmagine.setAttribute('id','fiamma');
    this.fiammaImmagine.setAttribute('alt','fiamma');
    this.fiammaImmagine.src = "./../Images/Fiamma.png";
    this.giocatoreNode.appendChild(this.fiammaImmagine);

    // Aggiungo il gadget dentro il div del giocatore
    this.gadgetImmagine = document.createElement('img');
    this.gadgetImmagine.setAttribute('id','gadget');
    this.gadgetImmagine.setAttribute('alt','gadget');
    this.giocatoreNode.appendChild(this.gadgetImmagine);

    // Prendo il nome del gadget 
    this.gadget = new Gadget();
    this.gadget.mostraGadget(this.gadgetImmagine, this.fiammaImmagine, this.giocatoreNode);

    // Prendo la sensibilità impostata dal giocatore
    this.sensibilita = new Sensibilita();
    sensibilita = this.sensibilita.sensibilita;
  }
/******************************************
    Funione che crea l'effetto che il 
    giocatore cammini
*******************************************/
Personaggio.prototype.muoviPersonaggio = 
  function() {
    if (this.i == 16) {
      if(this.conta == 0) {
        this.conta = 1;
        this.i     = 16;
      }
      else {
        this.conta = 0;
        this.i     = 0;
      }
    }
    else {
      // Cambio l'immagine del giocatore
      this.giocatoreImmagine.src = './../Images/Giocatore/Giocatore' + this.i +'.png';
      if(this.conta == 1)
        this.i--;
      else
        this.i++;
    }
  }
/*************************************************
    Quando il giocatore muore fermo il tempo e 
    lo sfondo, faccio scendere il giocatore fino 
    al terreno e mostro i risultati
**************************************************/
Personaggio.prototype.morte = 
  function(GameStatus, playground, metri, monete) {

    this.morto = 1;

    // Tolgo l'immagine del gadget
    this.gadgetImmagine.style.opacity = '0';

    // Il gioco e' finito quindi fermo il tempo
    GameStatus.end();

    // Fermo lo sfondo
    playground.style.setProperty("-webkit-animation", "none");

    // Faccio scendere il giocatore fino al pavimento
    this.scendi = setInterval(this.scendere.bind(this), 30);

    GameStatus.mostraRisultati(playground, metri, monete);

    this.i     = 0;
    this.conta = 0;
  
    this.numCicli     = 0;
    this.letteraRazzo = 'b';
    this.primaVolta   = 0;
    this.scendi       = null;
    this.distante     = 5;
    this.tipoGadget   = 0;
  }

/************************************************
    Funzione per far scendere il giocarore
    fino al terreno quando muore
*************************************************/
Personaggio.prototype.scendere = 
  function() {

    if(salita < 95){
      // Imposto l'immagine del giocatore morto
      this.giocatoreImmagine.src = './../Images/Morte.png';

      // Faccio scendere il giocatore
      salita         += 0.7 * discesa;
      this.distante  += 0.3 * discesa;
      discesa        += 0.2;

      // Caso in cui con l'addizione vada sopra il valore massimo
      if(salita > 95){
        salita = 95;
        clearInterval(this.scendi);
      }

      this.giocatoreNode.style.top  = salita + '%'; 
      this.giocatoreNode.style.left = this.distante + '%';
    }
  }