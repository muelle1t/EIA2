/*
Aufgabe: Abschlussaufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 23.07.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let imgData;
    let clouds = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Hintergund aus Background Klasse
        let bg = new Abschlussaufgabe.Background;
        bg.draw();
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 640, 360);
        for (let i = 0; i < 3; i++) {
            let c = new Abschlussaufgabe.Cloud();
            c.x = (Math.random() * (1000 - 0)) + 0;
            c.y = (Math.random() * (100 - 10)) + 10;
            clouds.push(c);
        }
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 1000, 700);
        animate();
        //        new Cloud(350, 70);
        //        new Cloud(600, 95);
        //        new Cloud(890, 70);
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        drawCloud();
        moveCloud();
        window.setTimeout(animate, 20);
    }
    function drawCloud() {
        for (let i = 0; i < clouds.length; i++)
            clouds[i].drawCloud();
    }
    function moveCloud() {
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].moveCloud();
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=meadow.js.map