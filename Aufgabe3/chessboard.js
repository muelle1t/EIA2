/*
Aufgabe: Aufgabe 3a
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 08.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
document.addEventListener("DOMContentLoaded", function () {
    let n = 64; //Gesamtanzahl Felder auf dem Brett
    let line = 0; // Zeilen
    let rice = 1; // Anzahl Reis
    let i = 0;
    for (i; i < n; i++) {
        let div = document.createElement("div"); // erstellen des Divs
        div.innerText = "" + rice; //Anzahl Reis wird in die Div geschrieben
        rice = rice * 2; //Anzahl Reis mal zwei, damit immer die doppelte Anzahl als auf dem Feld davor steht (Legende von Sissa Ibn Dahir)
        document.body.appendChild(div);
        if (i % 8 == 0) {
            line++;
        }
        if (line % 2 == 0) {
            if (i % 2 != 0) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
            else {
                div.style.backgroundColor = "white";
            }
        }
        else {
            if (i % 2 != 0) {
                div.style.backgroundColor = "white";
            }
            else {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
        }
    }
    document.getElementsByTagName("div");
    let divList = document.getElementsByTagName("div");
    let j = 0;
    let firstLine = divList[j];
    let lineStyle = firstLine.style;
    let state = true;
    lineStyle.border = "solid black";
    for (let j = 0; j < 8; j++) {
        firstLine.addEventListener("click", markedBox);
    }
    function markedBox(_event) {
        firstLine.classList.add("selected");
        document.getElementsByClassName("selected");
        if (state) {
            lineStyle.border = "solid red";
            state = false;
        }
        else {
            lineStyle.border = "solid black";
            state = true;
        }
    }
    console.log(j);
});
//# sourceMappingURL=chessboard.js.map