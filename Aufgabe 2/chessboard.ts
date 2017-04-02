document.addEventListener("DOMContentLoaded", function() {
    let n: number = 64; //Gesamtanzahl Felder auf dem Brett
    let line: number = 0; // Zeilen
    let rice: number = 1; // Anzahl Reis
    let i: number = 0; 
    
    for (i; i < n; i++) {
        
        let div: HTMLDivElement = document.createElement("div");
        div.innerText = "" + rice;
        rice = rice * 2;
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
 });
    