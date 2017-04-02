document.addEventListener("DOMContentLoaded", function () {
    let n = 64; //Gesamtanzahl Felder auf dem Brett
    let line = 0; // Zeilen
    let rice = 1; // Anzahl Reis
    let i = 0;
    for (i; i < n; i++) {
        let div = document.createElement("div");
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
//# sourceMappingURL=chessboard.js.map