/*
Aufgabe: Aufgabe 10
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 24.06.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let n = 9;
    let nBubbles = 20;
    let imagedata;
    let bigFish = [];
    //let bubbles: Bubbles[] = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        drawBackground();
        drawRock(700, 650);
        drawSandcastle(400, 650);
        drawSeestar(450, 660, 5, 30, 10);
        drawSeestar(550, 670, 5, 30, 10);
        drawSeestar(750, 650, 5, 30, 10);
        drawSeeweed(60, 650);
        drawSeeweed(80, 650);
        drawSeeweed(100, 650);
        drawSeeweed(120, 650);
        drawSeeweed(160, 650);
        drawSeeweed(200, 650);
        drawSeeweed(250, 650);
        drawSeeweed(90, 680);
        drawSeeweed(140, 700);
        drawSeeweed(180, 670);
        drawSeeweed(280, 680);
        drawSeeweed(300, 650);
        drawSeeweed(340, 670);
        drawSeeweed(40, 670);
        drawSeeweed(240, 680);
        drawSeeweed(80, 680);
        // Hintergrundbild
        imagedata = Aufgabe10.crc2.getImageData(0, 0, 640, 360);
        for (let i = 0; i < n; i++) {
            let bf = new Aufgabe10.BigFish();
            bf.x = Math.random() * 900;
            bf.y = Math.random() * 450;
            bigFish.push(bf);
        }
        //        for (let i: number = 0; i < n - 2; i++) {
        //            let bubble: Bubbles = new Bubbles();
        //            bubble.x = Math.random() * (100 - 550) + 300;
        //            bubble.y = Math.random() * 180;
        //            bubble.r = Math.random() * 10;
        //            bubbles.push(bubble);
        //        }
        imagedata = Aufgabe10.crc2.getImageData(0, 0, 640, 360);
        animate();
    }
    function animate() {
        Aufgabe10.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        //moveBubbles();
        drawFishes();
        //drawBubbles();
        window.setTimeout(animate, 20);
    }
    function moveFishes() {
        for (let i = 0; i < bigFish.length; i++) {
            bigFish[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < bigFish.length; i++)
            bigFish[i].drawBigFish();
    }
    //    function moveBubbles(): void {
    //        for (let i: number = 0; i < bubbles.length; i++) {
    //            bubbles[i].move();
    //        }
    //    }
    //
    //    function drawBubbles(): void {
    //        for (let i: number = 0; i < bubbles.length; i++)
    //            bubbles[i].draw();
    //    }
    function drawBackground() {
        let myGradient = Aufgabe10.crc2.createLinearGradient(0, 0, 0, 250);
        myGradient.addColorStop(0, "#0058ea");
        myGradient.addColorStop(1, "#00307f");
        Aufgabe10.crc2.fillStyle = myGradient; //wasser im Hintergrund
        Aufgabe10.crc2.fillRect(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        Aufgabe10.crc2.fillStyle = "#ffea87"; //Sand
        Aufgabe10.crc2.fillRect(0, 630, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height / 10);
    }
    function drawRock(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.strokeStyle = "#8c8c8c";
        Aufgabe10.crc2.fillStyle = "#8c8c8c";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 5, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 10, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 10, _y - 25);
        Aufgabe10.crc2.lineTo(_x + 15, _y - 25);
        Aufgabe10.crc2.lineTo(_x + 15, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 25, _y - 35);
        Aufgabe10.crc2.lineTo(_x + 25, _y - 40);
        Aufgabe10.crc2.lineTo(_x + 30, _y - 40);
        Aufgabe10.crc2.lineTo(_x + 30, _y - 45);
        Aufgabe10.crc2.lineTo(_x + 40, _y - 55);
        Aufgabe10.crc2.lineTo(_x + 40, _y - 60);
        Aufgabe10.crc2.lineTo(_x + 50, _y - 80);
        Aufgabe10.crc2.lineTo(_x + 50, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 60, _y - 100);
        Aufgabe10.crc2.lineTo(_x + 70, _y - 100);
        Aufgabe10.crc2.lineTo(_x + 90, _y - 120);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 120);
        Aufgabe10.crc2.lineTo(_x + 120, _y - 135);
        Aufgabe10.crc2.lineTo(_x + 140, _y - 130);
        Aufgabe10.crc2.lineTo(_x + 160, _y - 135);
        Aufgabe10.crc2.lineTo(_x + 200, _y - 135);
        Aufgabe10.crc2.lineTo(_x + 240, _y - 130);
        Aufgabe10.crc2.lineTo(_x + 280, _y - 135);
        Aufgabe10.crc2.lineTo(_x + 300, _y - 130);
        Aufgabe10.crc2.lineTo(_x + 300, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function drawSandcastle(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "#ffea87";
        Aufgabe10.crc2.strokeStyle = "#ffea87";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 3, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 3, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 8, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 8, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 13, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 13, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 18, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 18, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 23, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 23, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 23, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 28, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 28, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 28, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 33, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 33, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 33, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 38, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 38, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 41, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 41, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 60, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 60, _y - 100);
        Aufgabe10.crc2.lineTo(_x + 55, _y - 100);
        Aufgabe10.crc2.lineTo(_x + 70, _y - 130);
        Aufgabe10.crc2.lineTo(_x + 85, _y - 100);
        Aufgabe10.crc2.lineTo(_x + 80, _y - 100);
        Aufgabe10.crc2.lineTo(_x + 80, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 109, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 109, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 112, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 112, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 117, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 117, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 122, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 122, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 127, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 127, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 127, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 132, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 132, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 137, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 137, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 137, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 142, _y - 82);
        Aufgabe10.crc2.lineTo(_x + 142, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 147, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 147, _y - 90);
        Aufgabe10.crc2.lineTo(_x + 147, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 150, _y - 70);
        Aufgabe10.crc2.lineTo(_x + 150, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function drawSeeweed(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "#088A08";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.bezierCurveTo(_x, _y - 20, _x - 50, _y - 220, _x - 15, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "#088A08";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.bezierCurveTo(_x - 10, _y - 20, _x - 10, _y - 200, _x, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
    }
    function drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = _x;
        var y = _y;
        var step = Math.PI / spikes;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = _x + Math.cos(rot) * outerRadius;
            y = _y + Math.sin(rot) * outerRadius;
            Aufgabe10.crc2.lineTo(x, y);
            rot += step;
            x = _x + Math.cos(rot) * innerRadius;
            y = _y + Math.sin(rot) * innerRadius;
            Aufgabe10.crc2.lineTo(x, y);
            rot += step;
        }
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#e05504";
        Aufgabe10.crc2.fill();
    }
})(Aufgabe10 || (Aufgabe10 = {})); //namespace ende
//# sourceMappingURL=seaworld.js.map