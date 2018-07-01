/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 30.06.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let n = 8;
    let m = 6;
    let imagedata;
    let objects = [];
    let bigFish = [];
    let smallFish = [];
    let bigBubbles = [];
    let smallBubbles = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        //Hintergund aus Background Klasse
        let bg = new Aufgabe11.Background;
        bg.draw();
        // Hintergrundbild
        imagedata = Aufgabe11.crc2.getImageData(0, 0, 640, 360);
        console.log(imagedata);
        canvas.addEventListener("click", insertFood);
        canvas.addEventListener("touchstart", insertFood);
        for (let i = 0; i < m; i++) {
            let bb = new Aufgabe11.BigBubble((Math.random() * (550 - 450)) + 450, (Math.random() * (600 - 100)) + 100);
            objects.push(bb);
        }
        for (let i = 0; i < m; i++) {
            let sb = new Aufgabe11.SmallBubble((Math.random() * (550 - 450)) + 450, (Math.random() * (600 - 100)) + 100);
            objects.push(sb);
        }
        for (let i = 0; i < n; i++) {
            let bf = new Aufgabe11.BigFish((Math.random() * (900 - 50)) + 50, (Math.random() * (600 - 50)) + 50);
            objects.push(bf);
        }
        for (let i = 0; i < n; i++) {
            let sf = new Aufgabe11.SmallFish((Math.random() * (1000 - 70)) + 70, (Math.random() * (400 - 60)) + 60);
            objects.push(sf);
        }
        imagedata = Aufgabe11.crc2.getImageData(0, 0, 1000, 700);
        animate();
    }
    function insertFood(_event) {
        let fx = _event.pageX;
        let fy = _event.pageY;
        let flake = new Aufgabe11.Food(fx, fy);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }
    function animate() {
        Aufgabe11.crc2.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
        window.setTimeout(animate, 20);
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {})); //End namespace
//# sourceMappingURL=seaworld.js.map