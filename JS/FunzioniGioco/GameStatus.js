var CLOCK_INTERVAL = 30;
function GameStatus() {
    this.gameTimer = null;
    this.risultati = null;
}

GameStatus.prototype.start = 
    function(clockFunction) {
        if(this.gameTimer === null)
            this.gameTimer = setInterval(clockFunction, CLOCK_INTERVAL);
    }

GameStatus.prototype.end = 
    function() {
        clearInterval(this.gameTimer);
        this.gameTimer = null;
    }

GameStatus.prototype.mostraRisultati = 
    function(playground, metri, monete) {
        this.risultati = new Risultati(playground, metri, monete);
    }