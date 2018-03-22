/*
Aufgabe: Aufgabe 0
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 22.03.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 
*/

document.addEventListener('DOMContentLoaded', function () {
    var eingabe: string;
    eingabe = prompt("Bitte Namen eingeben");
            
      if (eingabe != null) {
           document.getElementsByTagName("div")[0].innerHTML = "Herzlich Willkommen" + " " + eingabe;
          }
});
