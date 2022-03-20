function Audio(playground, audio) {

    this.statoAudio = 0;
    
    // Aggiungo l'audio vero e proprio
	this.audioNode = document.createElement('Audio');
	this.audioNode.setAttribute('id','Audio');
  	document.body.insertBefore(this.audioNode, document.getElementById('informazioni'));
  	this.audioNode.muted 	= false;
  	this.audioNode.autoplay = true;
  	this.audioNode.loop 	= true;

  	this.sourceNode = document.createElement('Source');
  	this.sourceNode.src  = audio;
  	this.sourceNode.type ='audio/mp3';
  	this.audioNode.appendChild(this.sourceNode);

  	// Creo il div del volume
    this.volumeNode = document.createElement('div');
	this.volumeNode.setAttribute('id', 'Volume');
	playground.appendChild(this.volumeNode);

	// Creo l'immagine dentro il div del volume 
	this.volumeImmagine = document.createElement('img');
	this.volumeImmagine.setAttribute('id','Musica');
	this.volumeImmagine.setAttribute('alt','volume');
	this.volumeImmagine.addEventListener('click',this.cambiaStato.bind(this));
	this.volumeImmagine.src = "../Images/Volume0.png";
	this.volumeNode.appendChild(this.volumeImmagine);

	// Cambio l'immagine del volume 
	this.volumeImmagine.src = '../Images/Volume' + this.statoAudio + '.png';
}

Audio.prototype.cambiaStato = 
    function(evt) {
        // 0: ON, 1:OFF
        if(this.statoAudio == 0){
            this.statoAudio  = 1;
            this.audioNode.muted = true;
        }
        else{
            this.statoAudio = 0;
            this.audioNode.muted = false;
        }

        // Cambio l'immagine del volume 
        this.volumeImmagine.src = '../Images/Volume' + this.statoAudio + '.png';
    }