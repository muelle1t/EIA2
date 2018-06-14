/*
Aufgabe: Aufgabe 9
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 13.06.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe9_Seaworld;
(function (Aufgabe9_Seaworld) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
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
        //Blasen Zufallsanordnung
        for (var i = 0; i < 20; i++) {
            let bubble = Math.floor((Math.random() * 4) + 0);
            let _x = (Math.random() * (450 - 150)) + 150;
            let _y = (Math.random() * (400 - 100)) + 100;
            switch (bubble) {
                case 0:
                    drawBigBubble(_x, _y);
                    break;
                case 1:
                    drawSmallBubble(_x, _y);
                    break;
            }
        }
        drawFish(200, 500);
        drawFish(500, 250);
        drawFish(800, 400);
        drawFish(100, 100);
        //drawSmallBubble(840, 950);
        //drawBubble(700, 200);
    }
    function drawBackground() {
        let myGradient = crc2.createLinearGradient(0, 0, 0, 250);
        myGradient.addColorStop(0, "#0058ea");
        myGradient.addColorStop(1, "#00307f");
        crc2.fillStyle = myGradient; //wasser im Hintergrund
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = "#ffea87"; //Sand
        crc2.fillRect(0, 630, crc2.canvas.width, crc2.canvas.height / 10);
    }
    function drawRock(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "#8c8c8c";
        crc2.fillStyle = "#8c8c8c";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 5, _y - 20);
        crc2.lineTo(_x + 10, _y - 20);
        crc2.lineTo(_x + 10, _y - 25);
        crc2.lineTo(_x + 15, _y - 25);
        crc2.lineTo(_x + 15, _y - 30);
        crc2.lineTo(_x + 25, _y - 35);
        crc2.lineTo(_x + 25, _y - 40);
        crc2.lineTo(_x + 30, _y - 40);
        crc2.lineTo(_x + 30, _y - 45);
        crc2.lineTo(_x + 40, _y - 55);
        crc2.lineTo(_x + 40, _y - 60);
        crc2.lineTo(_x + 50, _y - 80);
        crc2.lineTo(_x + 50, _y - 90);
        crc2.lineTo(_x + 60, _y - 100);
        crc2.lineTo(_x + 70, _y - 100);
        crc2.lineTo(_x + 90, _y - 120);
        crc2.lineTo(_x + 100, _y - 120);
        crc2.lineTo(_x + 120, _y - 135);
        crc2.lineTo(_x + 140, _y - 130);
        crc2.lineTo(_x + 160, _y - 135);
        crc2.lineTo(_x + 200, _y - 135);
        crc2.lineTo(_x + 240, _y - 130);
        crc2.lineTo(_x + 280, _y - 135);
        crc2.lineTo(_x + 300, _y - 130);
        crc2.lineTo(_x + 300, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSandcastle(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#ffea87";
        crc2.strokeStyle = "#ffea87";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 70);
        crc2.lineTo(_x + 3, _y - 70);
        crc2.lineTo(_x + 3, _y - 90);
        crc2.lineTo(_x + 8, _y - 90);
        crc2.lineTo(_x + 8, _y - 82);
        crc2.lineTo(_x + 13, _y - 82);
        crc2.lineTo(_x + 13, _y - 90);
        crc2.lineTo(_x + 18, _y - 90);
        crc2.lineTo(_x + 18, _y - 82);
        crc2.lineTo(_x + 23, _y - 82);
        crc2.lineTo(_x + 23, _y - 90);
        crc2.lineTo(_x + 23, _y - 90);
        crc2.lineTo(_x + 28, _y - 90);
        crc2.lineTo(_x + 28, _y - 82);
        crc2.lineTo(_x + 28, _y - 82);
        crc2.lineTo(_x + 33, _y - 82);
        crc2.lineTo(_x + 33, _y - 90);
        crc2.lineTo(_x + 33, _y - 90);
        crc2.lineTo(_x + 38, _y - 90);
        crc2.lineTo(_x + 38, _y - 70);
        crc2.lineTo(_x + 41, _y - 70);
        crc2.lineTo(_x + 41, _y - 50);
        crc2.lineTo(_x + 60, _y - 50);
        crc2.lineTo(_x + 60, _y - 100);
        crc2.lineTo(_x + 55, _y - 100);
        crc2.lineTo(_x + 70, _y - 130);
        crc2.lineTo(_x + 85, _y - 100);
        crc2.lineTo(_x + 80, _y - 100);
        crc2.lineTo(_x + 80, _y - 50);
        crc2.lineTo(_x + 109, _y - 50);
        crc2.lineTo(_x + 109, _y - 70);
        crc2.lineTo(_x + 112, _y - 70);
        crc2.lineTo(_x + 112, _y - 90);
        crc2.lineTo(_x + 117, _y - 90);
        crc2.lineTo(_x + 117, _y - 82);
        crc2.lineTo(_x + 122, _y - 82);
        crc2.lineTo(_x + 122, _y - 90);
        crc2.lineTo(_x + 127, _y - 90);
        crc2.lineTo(_x + 127, _y - 90);
        crc2.lineTo(_x + 127, _y - 82);
        crc2.lineTo(_x + 132, _y - 82);
        crc2.lineTo(_x + 132, _y - 90);
        crc2.lineTo(_x + 137, _y - 90);
        crc2.lineTo(_x + 137, _y - 90);
        crc2.lineTo(_x + 137, _y - 82);
        crc2.lineTo(_x + 142, _y - 82);
        crc2.lineTo(_x + 142, _y - 90);
        crc2.lineTo(_x + 147, _y - 90);
        crc2.lineTo(_x + 147, _y - 90);
        crc2.lineTo(_x + 147, _y - 70);
        crc2.lineTo(_x + 150, _y - 70);
        crc2.lineTo(_x + 150, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSeeweed(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#088A08";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x, _y - 20, _x - 50, _y - 220, _x - 15, _y - 50);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#088A08";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x - 10, _y - 20, _x - 10, _y - 200, _x, _y - 50);
        crc2.closePath();
        crc2.fill();
    }
    function drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = _x;
        var y = _y;
        var step = Math.PI / spikes;
        crc2.beginPath();
        crc2.moveTo(_x, _y - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = _x + Math.cos(rot) * outerRadius;
            y = _y + Math.sin(rot) * outerRadius;
            crc2.lineTo(x, y);
            rot += step;
            x = _x + Math.cos(rot) * innerRadius;
            y = _y + Math.sin(rot) * innerRadius;
            crc2.lineTo(x, y);
            rot += step;
        }
        crc2.closePath();
        crc2.fillStyle = "#e05504";
        crc2.fill();
    }
    function drawFish(_x, _y) {
        //Flosse hinten
        crc2.beginPath();
        crc2.strokeStyle = "#f90261";
        crc2.fillStyle = "#f90261";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 30, _y - 30);
        crc2.lineTo(_x - 30, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Körper
        crc2.beginPath();
        crc2.fillStyle = "#f90261";
        crc2.arc(_x + 7, _y, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Auge
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 20, _y - 7, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Mund
        crc2.beginPath();
        crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 30, _y + 12);
        crc2.lineTo(_x + 15, _y + 5);
        crc2.lineTo(_x + 20, _y + 24);
        crc2.arcTo(_x + 20, _y + 24, _x + 30, _y + 12, 25);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawBigBubble(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 40, 9, 0, Math.PI * 2);
        crc2.fillStyle = "#c6e6ff";
        crc2.fill();
        crc2.closePath();
    }
    function drawSmallBubble(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 40, 5, 0, Math.PI * 2);
        crc2.fillStyle = "#5bb7ff";
        crc2.fill();
        crc2.closePath();
    }
})(Aufgabe9_Seaworld || (Aufgabe9_Seaworld = {}));
//# sourceMappingURL=seaworld.js.map