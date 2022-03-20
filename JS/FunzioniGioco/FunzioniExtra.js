function aggiornaDatabaseMoneteMetri(metri, monete){

    var xmlHttp = new XMLHttpRequest(); 
  
    var parametro = 'monete=' + monete + '&metri=' + metri;
    xmlHttp.open("POST", "AggiornaMoneteERecord.php", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(parametro); 
  
    function useHttpResponse(){ 
      if(xmlHttp.readyState == 4){
        alert(xmlHttp.responseText);
      }
    }
  }