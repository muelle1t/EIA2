/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var AltAquarium;
(function (AltAquarium) {
    window.addEventListener("load", init);
    let imgData;
    let n = 15;
    AltAquarium.allFish = [];
    let allTrash = [];
    let canvas;
    canvas = document.getElementsByTagName("canvas")[0];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        AltAquarium.crc2 = canvas.getContext("2d");
        console.log(AltAquarium.crc2);
        let trashCanvas;
        trashCanvas = document.getElementsByTagName("canvas")[4];
        AltAquarium.trash = trashCanvas.getContext("2d");
        let myGradient = AltAquarium.crc2.createLinearGradient(0, 0, 0, 150);
        myGradient.addColorStop(0, "#ccccff");
        myGradient.addColorStop(1, "#000066");
        AltAquarium.crc2.fillStyle = myGradient; //wasser im Hintergrund
        AltAquarium.crc2.fillRect(0, 0, canvas.width, canvas.height);
        AltAquarium.crc2.fillStyle = "#F2F5A9"; //Sand
        AltAquarium.crc2.fillRect(0, 630, canvas.width, canvas.height / 10);
        //Schleife für SeeBegrünung
        for (var i = 0; i < 40; i++) {
            let sw = new AltAquarium.Seeweed(0, 0);
            sw.setRandomPosition();
            sw.drawRandomSeeweed();
        }
        drawRock(700, 650);
        drawSandcastle(400, 650);
        drawSeestar(450, 660, 5, 30, 10);
        drawSeestar(550, 670, 5, 30, 10);
        drawSeestar(750, 650, 5, 30, 10);
        drawWater(0, 0);
        // Canvas Bild abspeichern
        imgData = AltAquarium.crc2.getImageData(0, 0, canvas.width, canvas.height);
        placeRegularFish();
        placeTrash();
    }
    function placeRegularFish() {
        for (let i = 0; i < n; i++) {
            let x = Math.random() * 900;
            let y = Math.random() * 450;
            let _color;
            let rf = new AltAquarium.RegularFish(x, y, _color);
            rf.setRandomStyle();
            rf.drawRegularFish();
            rf.move();
            rf.setRandomDirection();
            AltAquarium.allFish.push(rf);
        }
        window.setTimeout(animateFish, 100);
    }
    function animateFish() {
        AltAquarium.crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        //Schwimmverhalten regulärer Fische
        for (let i = 0; i < AltAquarium.allFish.length; i++) {
            let fish = (AltAquarium.allFish[i]);
            AltAquarium.allFish[i].update();
        }
        window.setTimeout(animateFish, 100);
    }
    function placeTrash() {
        //Müll erstellen und fallen lassen
        for (let i = 0; i < allTrash.length; i++) {
            let x = (Math.random() * (1200 - 0)) + 0;
            let y = (Math.random() * (600 - 0)) + 0;
            let p = new AltAquarium.Food(x, y);
            allTrash.push(p);
        }
    }
    function drawRock(_x, _y) {
        AltAquarium.crc2.beginPath();
        AltAquarium.crc2.strokeStyle = "#8c8c8c";
        AltAquarium.crc2.fillStyle = "#8c8c8c";
        AltAquarium.crc2.moveTo(_x, _y);
        AltAquarium.crc2.lineTo(_x + 5, _y - 20);
        AltAquarium.crc2.lineTo(_x + 10, _y - 20);
        AltAquarium.crc2.lineTo(_x + 10, _y - 25);
        AltAquarium.crc2.lineTo(_x + 15, _y - 25);
        AltAquarium.crc2.lineTo(_x + 15, _y - 30);
        AltAquarium.crc2.lineTo(_x + 25, _y - 35);
        AltAquarium.crc2.lineTo(_x + 25, _y - 40);
        AltAquarium.crc2.lineTo(_x + 30, _y - 40);
        AltAquarium.crc2.lineTo(_x + 30, _y - 45);
        AltAquarium.crc2.lineTo(_x + 40, _y - 55);
        AltAquarium.crc2.lineTo(_x + 40, _y - 60);
        AltAquarium.crc2.lineTo(_x + 50, _y - 80);
        AltAquarium.crc2.lineTo(_x + 50, _y - 90);
        AltAquarium.crc2.lineTo(_x + 60, _y - 100);
        AltAquarium.crc2.lineTo(_x + 70, _y - 100);
        AltAquarium.crc2.lineTo(_x + 90, _y - 120);
        AltAquarium.crc2.lineTo(_x + 100, _y - 120);
        AltAquarium.crc2.lineTo(_x + 120, _y - 135);
        AltAquarium.crc2.lineTo(_x + 140, _y - 130);
        AltAquarium.crc2.lineTo(_x + 160, _y - 135);
        AltAquarium.crc2.lineTo(_x + 200, _y - 135);
        AltAquarium.crc2.lineTo(_x + 240, _y - 130);
        AltAquarium.crc2.lineTo(_x + 280, _y - 135);
        AltAquarium.crc2.lineTo(_x + 300, _y - 130);
        AltAquarium.crc2.lineTo(_x + 300, _y);
        AltAquarium.crc2.closePath();
        AltAquarium.crc2.fill();
        AltAquarium.crc2.stroke();
    }
    function drawSandcastle(_x, _y) {
        AltAquarium.crc2.beginPath();
        AltAquarium.crc2.fillStyle = "#F2F5A9";
        AltAquarium.crc2.strokeStyle = "#F2F5A9";
        AltAquarium.crc2.moveTo(_x, _y);
        AltAquarium.crc2.lineTo(_x, _y - 70);
        AltAquarium.crc2.lineTo(_x + 3, _y - 70);
        AltAquarium.crc2.lineTo(_x + 3, _y - 90);
        AltAquarium.crc2.lineTo(_x + 8, _y - 90);
        AltAquarium.crc2.lineTo(_x + 8, _y - 82);
        AltAquarium.crc2.lineTo(_x + 13, _y - 82);
        AltAquarium.crc2.lineTo(_x + 13, _y - 90);
        AltAquarium.crc2.lineTo(_x + 18, _y - 90);
        AltAquarium.crc2.lineTo(_x + 18, _y - 82);
        AltAquarium.crc2.lineTo(_x + 23, _y - 82);
        AltAquarium.crc2.lineTo(_x + 23, _y - 90);
        AltAquarium.crc2.lineTo(_x + 23, _y - 90);
        AltAquarium.crc2.lineTo(_x + 28, _y - 90);
        AltAquarium.crc2.lineTo(_x + 28, _y - 82);
        AltAquarium.crc2.lineTo(_x + 28, _y - 82);
        AltAquarium.crc2.lineTo(_x + 33, _y - 82);
        AltAquarium.crc2.lineTo(_x + 33, _y - 90);
        AltAquarium.crc2.lineTo(_x + 33, _y - 90);
        AltAquarium.crc2.lineTo(_x + 38, _y - 90);
        AltAquarium.crc2.lineTo(_x + 38, _y - 70);
        AltAquarium.crc2.lineTo(_x + 41, _y - 70);
        AltAquarium.crc2.lineTo(_x + 41, _y - 50);
        AltAquarium.crc2.lineTo(_x + 60, _y - 50);
        AltAquarium.crc2.lineTo(_x + 60, _y - 100);
        AltAquarium.crc2.lineTo(_x + 55, _y - 100);
        AltAquarium.crc2.lineTo(_x + 70, _y - 130);
        AltAquarium.crc2.lineTo(_x + 85, _y - 100);
        AltAquarium.crc2.lineTo(_x + 80, _y - 100);
        AltAquarium.crc2.lineTo(_x + 80, _y - 50);
        AltAquarium.crc2.lineTo(_x + 109, _y - 50);
        AltAquarium.crc2.lineTo(_x + 109, _y - 70);
        AltAquarium.crc2.lineTo(_x + 112, _y - 70);
        AltAquarium.crc2.lineTo(_x + 112, _y - 90);
        AltAquarium.crc2.lineTo(_x + 117, _y - 90);
        AltAquarium.crc2.lineTo(_x + 117, _y - 82);
        AltAquarium.crc2.lineTo(_x + 122, _y - 82);
        AltAquarium.crc2.lineTo(_x + 122, _y - 90);
        AltAquarium.crc2.lineTo(_x + 127, _y - 90);
        AltAquarium.crc2.lineTo(_x + 127, _y - 90);
        AltAquarium.crc2.lineTo(_x + 127, _y - 82);
        AltAquarium.crc2.lineTo(_x + 132, _y - 82);
        AltAquarium.crc2.lineTo(_x + 132, _y - 90);
        AltAquarium.crc2.lineTo(_x + 137, _y - 90);
        AltAquarium.crc2.lineTo(_x + 137, _y - 90);
        AltAquarium.crc2.lineTo(_x + 137, _y - 82);
        AltAquarium.crc2.lineTo(_x + 142, _y - 82);
        AltAquarium.crc2.lineTo(_x + 142, _y - 90);
        AltAquarium.crc2.lineTo(_x + 147, _y - 90);
        AltAquarium.crc2.lineTo(_x + 147, _y - 90);
        AltAquarium.crc2.lineTo(_x + 147, _y - 70);
        AltAquarium.crc2.lineTo(_x + 150, _y - 70);
        AltAquarium.crc2.lineTo(_x + 150, _y);
        AltAquarium.crc2.closePath();
        AltAquarium.crc2.fill();
        AltAquarium.crc2.stroke();
    }
    function drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = this.x;
        var y = this.y;
        var step = Math.PI / spikes;
        AltAquarium.crc2.beginPath();
        AltAquarium.crc2.moveTo(_x, _y - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = _x + Math.cos(rot) * outerRadius;
            y = _y + Math.sin(rot) * outerRadius;
            AltAquarium.crc2.lineTo(x, y);
            rot += step;
            x = _x + Math.cos(rot) * innerRadius;
            y = _y + Math.sin(rot) * innerRadius;
            AltAquarium.crc2.lineTo(x, y);
            rot += step;
        }
        AltAquarium.crc2.closePath();
        AltAquarium.crc2.fillStyle = "#ff6600";
        AltAquarium.crc2.fill();
    }
    function drawWater(_x, _y) {
        AltAquarium.crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        AltAquarium.crc2.fillRect(_x, _y, 1000, 700);
        AltAquarium.crc2.fill();
        AltAquarium.crc2.stroke();
    }
})(AltAquarium || (AltAquarium = {}));
//# sourceMappingURL=waterworld.js.map