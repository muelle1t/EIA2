var Aufgabe11;
(function (Aufgabe11) {
    class Background {
        draw() {
            this.drawBackground();
            this.drawRock(700, 650);
            this.drawSandcastle(400, 650);
            this.drawSeestar(450, 660, 5, 30, 10);
            this.drawSeestar(550, 670, 5, 30, 10);
            this.drawSeestar(750, 650, 5, 30, 10);
            this.drawSeeweed(60, 650);
            this.drawSeeweed(80, 650);
            this.drawSeeweed(100, 650);
            this.drawSeeweed(120, 650);
            this.drawSeeweed(160, 650);
            this.drawSeeweed(200, 650);
            this.drawSeeweed(250, 650);
            this.drawSeeweed(90, 680);
            this.drawSeeweed(140, 700);
            this.drawSeeweed(180, 670);
            this.drawSeeweed(280, 680);
            this.drawSeeweed(300, 650);
            this.drawSeeweed(340, 670);
            this.drawSeeweed(40, 670);
            this.drawSeeweed(240, 680);
            this.drawSeeweed(80, 680);
        }
        drawBackground() {
            let myGradient = Aufgabe11.crc2.createLinearGradient(0, 0, 0, 250);
            myGradient.addColorStop(0, "#0058ea");
            myGradient.addColorStop(1, "#00307f");
            Aufgabe11.crc2.fillStyle = myGradient; //wasser im Hintergrund
            Aufgabe11.crc2.fillRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
            Aufgabe11.crc2.fillStyle = "#ffea87"; //Sand
            Aufgabe11.crc2.fillRect(0, 630, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height / 10);
        }
        drawRock(_x, _y) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.strokeStyle = "#8c8c8c";
            Aufgabe11.crc2.fillStyle = "#8c8c8c";
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x + 5, _y - 20);
            Aufgabe11.crc2.lineTo(_x + 10, _y - 20);
            Aufgabe11.crc2.lineTo(_x + 10, _y - 25);
            Aufgabe11.crc2.lineTo(_x + 15, _y - 25);
            Aufgabe11.crc2.lineTo(_x + 15, _y - 30);
            Aufgabe11.crc2.lineTo(_x + 25, _y - 35);
            Aufgabe11.crc2.lineTo(_x + 25, _y - 40);
            Aufgabe11.crc2.lineTo(_x + 30, _y - 40);
            Aufgabe11.crc2.lineTo(_x + 30, _y - 45);
            Aufgabe11.crc2.lineTo(_x + 40, _y - 55);
            Aufgabe11.crc2.lineTo(_x + 40, _y - 60);
            Aufgabe11.crc2.lineTo(_x + 50, _y - 80);
            Aufgabe11.crc2.lineTo(_x + 50, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 60, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 70, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 90, _y - 120);
            Aufgabe11.crc2.lineTo(_x + 100, _y - 120);
            Aufgabe11.crc2.lineTo(_x + 120, _y - 135);
            Aufgabe11.crc2.lineTo(_x + 140, _y - 130);
            Aufgabe11.crc2.lineTo(_x + 160, _y - 135);
            Aufgabe11.crc2.lineTo(_x + 200, _y - 135);
            Aufgabe11.crc2.lineTo(_x + 240, _y - 130);
            Aufgabe11.crc2.lineTo(_x + 280, _y - 135);
            Aufgabe11.crc2.lineTo(_x + 300, _y - 130);
            Aufgabe11.crc2.lineTo(_x + 300, _y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        drawSandcastle(_x, _y) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#ffea87";
            Aufgabe11.crc2.strokeStyle = "#ffea87";
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 3, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 3, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 8, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 8, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 13, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 13, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 18, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 18, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 23, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 23, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 23, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 28, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 28, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 28, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 33, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 33, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 33, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 38, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 38, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 41, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 41, _y - 50);
            Aufgabe11.crc2.lineTo(_x + 60, _y - 50);
            Aufgabe11.crc2.lineTo(_x + 60, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 55, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 70, _y - 130);
            Aufgabe11.crc2.lineTo(_x + 85, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 80, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 80, _y - 50);
            Aufgabe11.crc2.lineTo(_x + 109, _y - 50);
            Aufgabe11.crc2.lineTo(_x + 109, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 112, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 112, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 117, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 117, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 122, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 122, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 127, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 127, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 127, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 132, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 132, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 137, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 137, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 137, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 142, _y - 82);
            Aufgabe11.crc2.lineTo(_x + 142, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 147, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 147, _y - 90);
            Aufgabe11.crc2.lineTo(_x + 147, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 150, _y - 70);
            Aufgabe11.crc2.lineTo(_x + 150, _y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        drawSeeweed(_x, _y) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#088A08";
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.bezierCurveTo(_x, _y - 20, _x - 50, _y - 220, _x - 15, _y - 50);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#088A08";
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.bezierCurveTo(_x - 10, _y - 20, _x - 10, _y - 200, _x, _y - 50);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
        }
        drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
            var rot = Math.PI / 2 * 3;
            var x = _x;
            var y = _y;
            var step = Math.PI / spikes;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x, _y - outerRadius);
            for (var i = 0; i < spikes; i++) {
                x = _x + Math.cos(rot) * outerRadius;
                y = _y + Math.sin(rot) * outerRadius;
                Aufgabe11.crc2.lineTo(x, y);
                rot += step;
                x = _x + Math.cos(rot) * innerRadius;
                y = _y + Math.sin(rot) * innerRadius;
                Aufgabe11.crc2.lineTo(x, y);
                rot += step;
            }
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "#e05504";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Background = Background;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=background.js.map