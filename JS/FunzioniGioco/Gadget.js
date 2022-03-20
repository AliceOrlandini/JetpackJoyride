function Gadget() {

    this.nomeGadget = null;
    this.init();
}

Gadget.prototype.init = 
    function() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', 'PrendiGadget.php', false);
        xmlHttp.send(null);

        if (xmlHttp.status === 200) {
            this.nomeGadget = xmlHttp.responseText;
            return xmlHttp.responseText;
        }
    }

Gadget.prototype.mostraGadget = 
    function(gadgetImmagine, fiammaImmagine, giocatoreNode) {
        
        // A seconda del gadget devo regolare le proporzioni
        switch(this.nomeGadget) {
            case 'Ninja':
                this.assegnaValoriGadget(gadgetImmagine, fiammaImmagine, this.nomeGadget, '-45%', '20%', '-125%', '5%', '55%');
                break;
            case 'Goku':
                this.assegnaValoriGadget(gadgetImmagine, fiammaImmagine, this.nomeGadget, '-25%', '-10%', '-220%', '22%', '85%');
                break;
            case 'GokuSS':
                this.assegnaValoriGadget(gadgetImmagine, fiammaImmagine, this.nomeGadget, '-46%', '25%', '-160%', '6%', '-80%');
                break;
            case 'CascoNero':
                this.assegnaValoriGadget(gadgetImmagine, fiammaImmagine, this.nomeGadget, '-70%', '18%', '-150%', '6%', '52%');
                break;
            case 'CascoRosso':
                this.assegnaValoriGadget(gadgetImmagine, fiammaImmagine, this.nomeGadget, '-50%', '20%', '-135%', '10%', '55%');
                break;
            case 'Mario':
                this.assegnaValoriGadget(gadgetImmagine, fiammaImmagine, this.nomeGadget, '-28%', '25%', '-140%', '10%', '-70%');
                break;
            case 'Non selezionato':
                giocatoreNode.removeChild(gadgetImmagine);
                fiammaImmagine.style.top = '-23%';
                fiammaImmagine.style.left = '-10%';
                break;
        }
    }

Gadget.prototype.assegnaValoriGadget = 
    function(gadgetImmagine, fiammaImmagine, nomeGadget, fiammaTop, fiammaLeft, gadgetTop, gadgetLeft, gadgetWidth) {
        gadgetImmagine.src = "./../Images/Gadget/"+ nomeGadget +".png";
        fiammaImmagine.style.top = fiammaTop;
        fiammaImmagine.style.left = fiammaLeft;

        gadgetImmagine.style.top = gadgetTop;
        gadgetImmagine.style.left = gadgetLeft;
        gadgetImmagine.style.width = gadgetWidth;
    }