/*
Aufgabe: Aufgabe 1
Name: Annkathrin M�ller
Matrikelnr.: 254868
Datum: 18.03.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    var eingabe;
    eingabe = prompt("Bitte Namen eingeben");
    if (name == null) {
        document.getElementsByTagName("div")[0].innerHTML = "Kein Zutritt";
    }
    else {
        document.getElementsByTagName("div")[0].innerHTML = "Herzlich Willkommen" + " " + eingabe;
    }
});
//# sourceMappingURL=aufgabe1script.js.map