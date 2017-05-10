/*
Aufgabe: Aufgabe 3a
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 09.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
Dieser Code ist in Zusammenarbeit mit Ina Radzuweit entstanden.*/
var Aufgabe3_chessboard;
(function (Aufgabe3_chessboard) {
    document.addEventListener("DOMContentLoaded", function () {
        let n = 64; //Gesamtanzahl Felder auf dem Brett
        let line = 0; // Zeilen
        let rice = 1; // Anzahl Reis
        let i = 0;
        let sum = 0;
        let state = true; //Boolean for Box selection 
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
        //Aufgabe 3a
        document.getElementsByTagName("div")[0];
        let divList = document.getElementsByTagName("div"); //List for all divs
        let j = 0;
        let clickedDiv;
        let firstLine = divList[j];
        // let lineStyle: CSSStyleDeclaration = firstLine.style;
        //lineStyle.border = "solid black";
        for (j; j < 9; j++) {
            firstLine.addEventListener("click", markedBox); //Schleife für erste Reihe im Schachbrett
        }
        //Funktion für die Markierung der Boxen
        function markedBox(_event) {
            clickedDiv = _event.target;
            if (clickedDiv.style.border != "solid red") {
                divList[j].style.border = "solid red";
                sum = sum + Number(divList[j].textContent);
            }
            else {
                divList[j].style.border = "solid black";
            }
            sum = sum + Number(divList[j].textContent);
            document.getElementById("tooltip").textContent = "Dezimalzahl: " + sum.toString() + "Hexadezimal: " + sum.toString(16);
        }
        ;
    });
})(Aufgabe3_chessboard || (Aufgabe3_chessboard = {}));
document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let box = document.getElementById("tooltip");
    box.style.position = "abolute";
    box.style.top = y + 15 + "px";
    box.style.left = x + 15 + "px";
    box.style.border = "2px solid black";
    box.style.backgroundColor = "white";
    box.style.padding = "10px";
});
//# sourceMappingURL=chessboard3.js.map