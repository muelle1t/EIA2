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
        document.getElementsByTagName("div");
        let divList: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div"); //List for all divs

        let j: number = 0;
        let firstLine: HTMLDivElement = divList[j];
        let lineStyle: CSSStyleDeclaration = firstLine.style;

        let state: boolean = true; //Boolean for Box selection 
        lineStyle.border = "solid black";

        for (j; j < 8; j++ ) {
            firstLine.addEventListener("click", markedBox); //Schleife für erste Reihe im Schachbrett

       }
         
        //Funktion für die Markierung der Boxen
        
        function markedBox(_event: Event): void {
            firstLine.classList.add("selected");
            let selected: NodeList = document.getElementsByClassName("selected");
            
            
            
            if (state) {
                lineStyle.border = "solid red";
                state = false;
            }

            else {
                lineStyle.border = "solid black";
                state = true;
            }
            
          } 
    
            
            
       
       

    });
}
