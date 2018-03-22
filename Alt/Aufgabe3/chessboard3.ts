/*
Aufgabe: Aufgabe 3a
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 09.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
Dieser Code ist in Zusammenarbeit mit Ina Radzuweit entstanden.*/

namespace Aufgabe3_chessboard {

    document.addEventListener("DOMContentLoaded", function(): void {
        let n: number = 64; //Gesamtanzahl Felder auf dem Brett
        let line: number = 0; // Zeilen
        let rice: number = 1; // Anzahl Reis
        let i: number = 0;
        let sum: number = 0;
        
        let state: boolean = true; //Boolean for Box selection 

        for (i; i < n; i++) {

            let div: HTMLDivElement = document.createElement("div"); // erstellen des Divs
            div.innerText = "" + rice; //Anzahl Reis wird in die Div geschrieben
            rice = rice * 2; //Anzahl Reis mal zwei, damit immer die doppelte Anzahl als auf dem Feld davor steht (Legende von Sissa Ibn Dahir)
            document.body.appendChild(div);


            if (i % 8 == 0) {  //nach jedem 8. div wird eine neue Zeile begonnen 
                line++;
            }

            if (line % 2 == 0) {  //in allen ungeraden Zeilen wird mit schwarz angefangen
                if (i % 2 != 0) {
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                }
                else {
                    div.style.backgroundColor = "white";
                }
            }
            else { //in allen geraden Zeilen wird mit Weiß angefangen
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
        let divList: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div"); //List for all divs

        let j: number = 0;
        let clickedDiv: any;
        let firstLine: HTMLDivElement = divList[j];
       // let lineStyle: CSSStyleDeclaration = firstLine.style;

        
        //lineStyle.border = "solid black";

        for (j; j < 9; j++ ) {
            firstLine.addEventListener("click", markedBox); //Schleife für erste Reihe im Schachbrett

       }
         
        //Funktion für die Markierung der Boxen
        
        function markedBox(_event: Event): void {
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
                        
          };
    
    });
}

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
