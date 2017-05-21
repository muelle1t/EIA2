/*
Aufgabe: Aufgabe 8
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 21.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    window.addEventListener("load", init);
    let imgData;
    let n = 10;
    let x = [];
    let y = [];
    Aufgabe8_Bienen.allBees = [];
    Aufgabe8_Bienen.nectarFlowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe8_Bienen.crc2 = canvas.getContext("2d");
        console.log(Aufgabe8_Bienen.crc2);
        let b = new Aufgabe8_Bienen.Background();
        //Zufällige Blumenwiese
        for (var i = 0; i < 20; i++) {
            let fr = new Aufgabe8_Bienen.Flower(0, 0);
            fr.setRandomPosition();
            fr.drawRandomFlower();
        }
        console.log(Aufgabe8_Bienen.nectarFlowers);
        // Canvas Bild abspeichern
        imgData = Aufgabe8_Bienen.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Blumenwiese
        for (let i = 0; i < 10; i++) {
            let x = (Math.random() * (990 - 300)) + 300;
            let y = (Math.random() * (700 - 600)) + 600;
            let f = new Aufgabe8_Bienen.Flower(x, y);
            f.drawRandomFlower();
            Aufgabe8_Bienen.nectarFlowers.push(f);
        }
        for (let i = 0; i < n; i++) {
            let b = new Aufgabe8_Bienen.Bees(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
            Aufgabe8_Bienen.allBees[i] = b;
        }
        window.setTimeout(animate, 40);
        //Neue Biene bei Klick oder Touch
        canvas.addEventListener("click", addNewBee);
        canvas.addEventListener("touch", addNewBee);
    }
    // Funtkion der neuen Biene 
    function addNewBee() {
        let bee = new Aufgabe8_Bienen.Bees(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
        Aufgabe8_Bienen.allBees.push(bee);
    }
    // Animation der Bienen
    function animate() {
        Aufgabe8_Bienen.crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i = 0; i < Aufgabe8_Bienen.allBees.length; i++) {
            let bees = (Aufgabe8_Bienen.allBees[i]);
            bees.update();
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (this.x < 0) {
                this.x = 1000;
            }
            if (this.y < 0) {
                this.y = 700;
            }
            if (this.y > 700) {
                this.y = 0;
            }
        }
        window.setTimeout(animate, 40);
    }
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=meadow.js.map