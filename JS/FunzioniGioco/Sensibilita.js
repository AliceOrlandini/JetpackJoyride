function Sensibilita() {

    this.sensibilita = 3;
    this.init();
}

Sensibilita.prototype.init = 
    function() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', 'PrendiSensibilita.php', false);
        xmlHttp.send(null);

        if (xmlHttp.status === 200) {
            this.sensibilita = xmlHttp.responseText;
            return xmlHttp.responseText;
        }
    }