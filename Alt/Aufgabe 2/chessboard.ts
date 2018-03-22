/*
Aufgabe: Aufgabe 2a
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/

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
 });
    