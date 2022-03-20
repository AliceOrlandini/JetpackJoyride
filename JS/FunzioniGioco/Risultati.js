function Risultati(playground, metri, monete) {
    
    // Elimino le informazioni
    // var daRimuovere = document.getElementById('informazioni');
    // document.body.removeChild(daRimuovere);
    giocoFermo = 1;
    // Creo il div che conterra' i risultati
    this.risultatiNode = document.createElement('div');
    this.risultatiNode.setAttribute('id','risultato');
    playground.appendChild(this.risultatiNode);

    // Creo la scritta 'risultati:'
    this.risultatiScritta = document.createElement('h1');
    this.risultatiScritta.setAttribute('class','font size4 shadow4');
    this.risultatiTesto = document.createTextNode('RISULTATI:');
    this.risultatiScritta.appendChild(this.risultatiTesto); 
    this.risultatiNode.appendChild(this.risultatiScritta);

    // Creo la scritta 'metri:'
    this.metriScritta = document.createElement('h1');
    this.metriScritta.setAttribute('class','font size3 shadow4 margin0');
    this.metriTesto = document.createTextNode('METRI: ' + metri);
    this.metriScritta.appendChild(this.metriTesto); 
    this.risultatiNode.appendChild(this.metriScritta);

    // Creo la scritta 'monete:'
    this.moneteScritta = document.createElement('h1');
    this.moneteScritta.setAttribute('class','font size3 shadow4 margin0');
    this.moneteTesto = document.createTextNode('MONETE: ' + monete);
    this.moneteScritta.appendChild(this.moneteTesto); 
    this.risultatiNode.appendChild(this.moneteScritta);

    // Creo il tasto per tornare alla schermata principale
    this.ritornoScritta = document.createElement('h1');
    this.ritornoScritta.setAttribute('class','font size3 shadow4 pointer exit');
    this.ritornoTesto = document.createTextNode('CONTINUA');
    this.ritornoScritta.appendChild(this.ritornoTesto); 
    this.risultatiNode.appendChild(this.ritornoScritta);

    // Chiamo la funzione per aggiornare nel database le monete e i metri
    aggiornaDatabaseMoneteMetri(metri, monete);

    this.ritornoScritta.setAttribute('onclick',"window.location.href = 'PaginaPersonale.php'; giocoFermo = 0;");
}