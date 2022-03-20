function Informazioni(playground) {
    
    this.metri = 0;
    this.monete = 0;

    this.velocita = 25;
    this.rallenta = 0;
    this.unita    = 1;

    this.init(playground);
}

Informazioni.prototype.init = 
    function(playground) {
        this.divInformazioni = document.createElement('div');
        this.divInformazioni.setAttribute('id','informazioni');
        document.body.insertBefore(this.divInformazioni, document.body.firstChild);

        // Aggiungo i titoli nel div delle informazini
        this.titoloMetri = document.createElement('h1');
        this.titoloMetri.setAttribute('class','font shadow4 size3 inline marginRight');
        this.titoloMetri.setAttribute('id','metri');
        this.titoloMetri.textContent = ('METRI: ');
        this.divInformazioni.appendChild(this.titoloMetri);

        this.titoloMonete = document.createElement('h1');
        this.titoloMonete.setAttribute('class','font shadow4 size3 inline marginRight');
        this.titoloMonete.setAttribute('id','monete');
        this.titoloMonete.textContent = ('MONETE: ');
        this.divInformazioni.appendChild(this.titoloMonete);

        // Mostro le informazioni relative ai metri e alle monete
        this.divInformazioni.style.marginTop = 0;
        this.divInformazioni.style.marginBottom = 0;
        playground.style.marginTop = 0;
        document.getElementById("playgroundWrapper").style.marginTop = 0;
        document.body.style.marginTop = 0;
    }

Informazioni.prototype.aggiornaMetrieMonete = 
    function() {
        // Questo serve perche' voglio che i metri
        // vengano aggiornati meno velocemente
        this.rallenta++;
        if((this.rallenta % this.velocita) == 0){
            this.metri += Math.round(1 * this.unita);
        }

        // Quando raggiungo multipli di 30 metri 
        // aumento la velocita degli ostacoli
        if(this.metri == Math.floor(30 * this.unita)){

            this.unita++;
            aumenta += 0.2;
        }
        
        // Aggiorno i metri e le monete
        document.getElementById('metri').textContent = 'METRI: '+ this.metri;
        document.getElementById('monete').textContent = 'MONETE: '+ this.monete;
    }