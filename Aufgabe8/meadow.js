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
        //Blumenwiese
        for (let i = 0; i < 3; i++) {
            let x = (Math.random() * (990 - 300)) + 300;
            let y = (Math.random() * (700 - 600)) + 600;
            let d1 = new Aufgabe8_Bienen.DaisyBlue(x, y);
            d1.drawDaisyBlue();
            Aufgabe8_Bienen.nectarFlowers.push(d1);
            let d2 = new Aufgabe8_Bienen.DaisyWhite(x + 40, y - 4);
            d2.drawDaisyWhite();
            Aufgabe8_Bienen.nectarFlowers.push(d2);
            let t1 = new Aufgabe8_Bienen.TulipPurple(x + 20, y);
            t1.drawTulipPurple();
            Aufgabe8_Bienen.nectarFlowers.push(t1);
            let t2 = new Aufgabe8_Bienen.TulipYellow(x - 30, y + 3);
            t2.drawTulipYellow();
            Aufgabe8_Bienen.nectarFlowers.push(t2);
        }
        console.log("nectar Flowers", Aufgabe8_Bienen.nectarFlowers);
        // Canvas Bild abspeichern
        imgData = Aufgabe8_Bienen.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < n; i++) {
            let hb = new Aufgabe8_Bienen.HoneyBee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
            hb.drawBee();
            Aufgabe8_Bienen.allBees.push(hb);
            let rb = new Aufgabe8_Bienen.RegularBee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
            rb.drawBee();
            rb.update();
            Aufgabe8_Bienen.allBees.push(rb);
        }
        console.log("Bees", Aufgabe8_Bienen.allBees);
        window.setTimeout(animate, 40);
        //Neue Biene bei Klick oder Touch
        canvas.addEventListener("click", addNewBee);
        canvas.addEventListener("touch", addNewBee);
    }
    // Funtkion der neuen Biene 
    function addNewBee() {
        Aufgabe8_Bienen.allBees.push(new Aufgabe8_Bienen.RegularBee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)"));
        n++;
    }
    // Animation der Bienen
    function animate() {
        Aufgabe8_Bienen.crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i = 0; i < Aufgabe8_Bienen.allBees.length; i++) {
            let bees = (Aufgabe8_Bienen.allBees[i]);
            Aufgabe8_Bienen.allBees[i].update();
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (bees.x < 0) {
                bees.x = 1000;
            }
            if (bees.y < 0) {
                bees.y = 700;
            }
            if (bees.y > 700) {
                bees.y = 0;
            }
        }
        window.setTimeout(animate, 40);
    }
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=meadow.js.map