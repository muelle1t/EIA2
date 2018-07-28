var Aquarium;
(function (Aquarium) {
    class Background {
        draw() {
            this.drawWater();
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
        drawRock(_x, _y) {
            Aquarium.crc2.beginPath();
            Aquarium.crc2.strokeStyle = "#8c8c8c";
            Aquarium.crc2.fillStyle = "#8c8c8c";
            Aquarium.crc2.moveTo(_x, _y);
            Aquarium.crc2.lineTo(_x + 5, _y - 20);
            Aquarium.crc2.lineTo(_x + 10, _y - 20);
            Aquarium.crc2.lineTo(_x + 10, _y - 25);
            Aquarium.crc2.lineTo(_x + 15, _y - 25);
            Aquarium.crc2.lineTo(_x + 15, _y - 30);
            Aquarium.crc2.lineTo(_x + 25, _y - 35);
            Aquarium.crc2.lineTo(_x + 25, _y - 40);
            Aquarium.crc2.lineTo(_x + 30, _y - 40);
            Aquarium.crc2.lineTo(_x + 30, _y - 45);
            Aquarium.crc2.lineTo(_x + 40, _y - 55);
            Aquarium.crc2.lineTo(_x + 40, _y - 60);
            Aquarium.crc2.lineTo(_x + 50, _y - 80);
            Aquarium.crc2.lineTo(_x + 50, _y - 90);
            Aquarium.crc2.lineTo(_x + 60, _y - 100);
            Aquarium.crc2.lineTo(_x + 70, _y - 100);
            Aquarium.crc2.lineTo(_x + 90, _y - 120);
            Aquarium.crc2.lineTo(_x + 100, _y - 120);
            Aquarium.crc2.lineTo(_x + 120, _y - 135);
            Aquarium.crc2.lineTo(_x + 140, _y - 130);
            Aquarium.crc2.lineTo(_x + 160, _y - 135);
            Aquarium.crc2.lineTo(_x + 200, _y - 135);
            Aquarium.crc2.lineTo(_x + 240, _y - 130);
            Aquarium.crc2.lineTo(_x + 280, _y - 135);
            Aquarium.crc2.lineTo(_x + 300, _y - 130);
            Aquarium.crc2.lineTo(_x + 300, _y);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.stroke();
        }
        drawSandcastle(_x, _y) {
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#F2F5A9";
            Aquarium.crc2.strokeStyle = "#F2F5A9";
            Aquarium.crc2.moveTo(_x, _y);
            Aquarium.crc2.lineTo(_x, _y - 70);
            Aquarium.crc2.lineTo(_x + 3, _y - 70);
            Aquarium.crc2.lineTo(_x + 3, _y - 90);
            Aquarium.crc2.lineTo(_x + 8, _y - 90);
            Aquarium.crc2.lineTo(_x + 8, _y - 82);
            Aquarium.crc2.lineTo(_x + 13, _y - 82);
            Aquarium.crc2.lineTo(_x + 13, _y - 90);
            Aquarium.crc2.lineTo(_x + 18, _y - 90);
            Aquarium.crc2.lineTo(_x + 18, _y - 82);
            Aquarium.crc2.lineTo(_x + 23, _y - 82);
            Aquarium.crc2.lineTo(_x + 23, _y - 90);
            Aquarium.crc2.lineTo(_x + 23, _y - 90);
            Aquarium.crc2.lineTo(_x + 28, _y - 90);
            Aquarium.crc2.lineTo(_x + 28, _y - 82);
            Aquarium.crc2.lineTo(_x + 28, _y - 82);
            Aquarium.crc2.lineTo(_x + 33, _y - 82);
            Aquarium.crc2.lineTo(_x + 33, _y - 90);
            Aquarium.crc2.lineTo(_x + 33, _y - 90);
            Aquarium.crc2.lineTo(_x + 38, _y - 90);
            Aquarium.crc2.lineTo(_x + 38, _y - 70);
            Aquarium.crc2.lineTo(_x + 41, _y - 70);
            Aquarium.crc2.lineTo(_x + 41, _y - 50);
            Aquarium.crc2.lineTo(_x + 60, _y - 50);
            Aquarium.crc2.lineTo(_x + 60, _y - 100);
            Aquarium.crc2.lineTo(_x + 55, _y - 100);
            Aquarium.crc2.lineTo(_x + 70, _y - 130);
            Aquarium.crc2.lineTo(_x + 85, _y - 100);
            Aquarium.crc2.lineTo(_x + 80, _y - 100);
            Aquarium.crc2.lineTo(_x + 80, _y - 50);
            Aquarium.crc2.lineTo(_x + 109, _y - 50);
            Aquarium.crc2.lineTo(_x + 109, _y - 70);
            Aquarium.crc2.lineTo(_x + 112, _y - 70);
            Aquarium.crc2.lineTo(_x + 112, _y - 90);
            Aquarium.crc2.lineTo(_x + 117, _y - 90);
            Aquarium.crc2.lineTo(_x + 117, _y - 82);
            Aquarium.crc2.lineTo(_x + 122, _y - 82);
            Aquarium.crc2.lineTo(_x + 122, _y - 90);
            Aquarium.crc2.lineTo(_x + 127, _y - 90);
            Aquarium.crc2.lineTo(_x + 127, _y - 90);
            Aquarium.crc2.lineTo(_x + 127, _y - 82);
            Aquarium.crc2.lineTo(_x + 132, _y - 82);
            Aquarium.crc2.lineTo(_x + 132, _y - 90);
            Aquarium.crc2.lineTo(_x + 137, _y - 90);
            Aquarium.crc2.lineTo(_x + 137, _y - 90);
            Aquarium.crc2.lineTo(_x + 137, _y - 82);
            Aquarium.crc2.lineTo(_x + 142, _y - 82);
            Aquarium.crc2.lineTo(_x + 142, _y - 90);
            Aquarium.crc2.lineTo(_x + 147, _y - 90);
            Aquarium.crc2.lineTo(_x + 147, _y - 90);
            Aquarium.crc2.lineTo(_x + 147, _y - 70);
            Aquarium.crc2.lineTo(_x + 150, _y - 70);
            Aquarium.crc2.lineTo(_x + 150, _y);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.stroke();
        }
        drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
            var rot = Math.PI / 2 * 3;
            var x = _x;
            var y = _y;
            var step = Math.PI / spikes;
            Aquarium.crc2.beginPath();
            Aquarium.crc2.moveTo(_x, _y - outerRadius);
            for (var i = 0; i < spikes; i++) {
                x = _x + Math.cos(rot) * outerRadius;
                y = _y + Math.sin(rot) * outerRadius;
                Aquarium.crc2.lineTo(x, y);
                rot += step;
                x = _x + Math.cos(rot) * innerRadius;
                y = _y + Math.sin(rot) * innerRadius;
                Aquarium.crc2.lineTo(x, y);
                rot += step;
            }
            Aquarium.crc2.closePath();
            Aquarium.crc2.fillStyle = "#ff6600";
            Aquarium.crc2.fill();
        }
        drawSeeweed(_x, _y) {
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#088A08";
            Aquarium.crc2.moveTo(_x, _y);
            Aquarium.crc2.bezierCurveTo(_x, _y - 20, _x - 50, _y - 220, _x - 15, _y - 50);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#088A08";
            Aquarium.crc2.moveTo(_x, _y);
            Aquarium.crc2.bezierCurveTo(_x - 10, _y - 20, _x - 10, _y - 200, _x, _y - 50);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
        }
        drawWater() {
            let myGradient = Aquarium.crc2.createLinearGradient(0, 0, 0, 150);
            myGradient.addColorStop(0, "#ccccff");
            myGradient.addColorStop(1, "#000066");
            Aquarium.crc2.fillStyle = myGradient; //wasser im Hintergrund
            Aquarium.crc2.fillRect(0, 0, Aquarium.crc2.canvas.width, Aquarium.crc2.canvas.height);
            Aquarium.crc2.fillStyle = "#F2F5A9"; //Sand
            Aquarium.crc2.fillRect(0, 630, Aquarium.crc2.canvas.width, Aquarium.crc2.canvas.height / 10);
        }
    }
    Aquarium.Background = Background;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=background.js.map