var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Background {
        constructor() {
            Semesteraufgabe.myGradient.addColorStop(0, "#ccccff");
            Semesteraufgabe.myGradient.addColorStop(1, "#000066");
            Semesteraufgabe.crc2.fillStyle = Semesteraufgabe.myGradient; //wasser im Hintergrund
            Semesteraufgabe.crc2.fillRect(0, 0, Semesteraufgabe.crc2.canvas.width, Semesteraufgabe.crc2.canvas.height);
            Semesteraufgabe.crc2.fillStyle = "#F2F5A9"; //Sand
            Semesteraufgabe.crc2.fillRect(0, 630, Semesteraufgabe.crc2.canvas.width, Semesteraufgabe.crc2.canvas.height / 10);
            this.drawRock(700, 650);
            this.drawSandcastle(400, 650);
            this.drawSeestar(450, 660, 5, 30, 10);
            this.drawSeestar(550, 670, 5, 30, 10);
            this.drawSeestar(750, 650, 5, 30, 10);
        }
        drawRock(_x, _y) {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.strokeStyle = "#8c8c8c";
            Semesteraufgabe.crc2.fillStyle = "#8c8c8c";
            Semesteraufgabe.crc2.moveTo(_x, _y);
            Semesteraufgabe.crc2.lineTo(_x + 5, _y - 20);
            Semesteraufgabe.crc2.lineTo(_x + 10, _y - 20);
            Semesteraufgabe.crc2.lineTo(_x + 10, _y - 25);
            Semesteraufgabe.crc2.lineTo(_x + 15, _y - 25);
            Semesteraufgabe.crc2.lineTo(_x + 15, _y - 30);
            Semesteraufgabe.crc2.lineTo(_x + 25, _y - 35);
            Semesteraufgabe.crc2.lineTo(_x + 25, _y - 40);
            Semesteraufgabe.crc2.lineTo(_x + 30, _y - 40);
            Semesteraufgabe.crc2.lineTo(_x + 30, _y - 45);
            Semesteraufgabe.crc2.lineTo(_x + 40, _y - 55);
            Semesteraufgabe.crc2.lineTo(_x + 40, _y - 60);
            Semesteraufgabe.crc2.lineTo(_x + 50, _y - 80);
            Semesteraufgabe.crc2.lineTo(_x + 50, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 60, _y - 100);
            Semesteraufgabe.crc2.lineTo(_x + 70, _y - 100);
            Semesteraufgabe.crc2.lineTo(_x + 90, _y - 120);
            Semesteraufgabe.crc2.lineTo(_x + 100, _y - 120);
            Semesteraufgabe.crc2.lineTo(_x + 120, _y - 135);
            Semesteraufgabe.crc2.lineTo(_x + 140, _y - 130);
            Semesteraufgabe.crc2.lineTo(_x + 160, _y - 135);
            Semesteraufgabe.crc2.lineTo(_x + 200, _y - 135);
            Semesteraufgabe.crc2.lineTo(_x + 240, _y - 130);
            Semesteraufgabe.crc2.lineTo(_x + 280, _y - 135);
            Semesteraufgabe.crc2.lineTo(_x + 300, _y - 130);
            Semesteraufgabe.crc2.lineTo(_x + 300, _y);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
        }
        drawSandcastle(_x, _y) {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#F2F5A9";
            Semesteraufgabe.crc2.strokeStyle = "#F2F5A9";
            Semesteraufgabe.crc2.moveTo(_x, _y);
            Semesteraufgabe.crc2.lineTo(_x, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 3, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 3, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 8, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 8, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 13, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 13, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 18, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 18, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 23, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 23, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 23, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 28, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 28, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 28, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 33, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 33, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 33, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 38, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 38, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 41, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 41, _y - 50);
            Semesteraufgabe.crc2.lineTo(_x + 60, _y - 50);
            Semesteraufgabe.crc2.lineTo(_x + 60, _y - 100);
            Semesteraufgabe.crc2.lineTo(_x + 55, _y - 100);
            Semesteraufgabe.crc2.lineTo(_x + 70, _y - 130);
            Semesteraufgabe.crc2.lineTo(_x + 85, _y - 100);
            Semesteraufgabe.crc2.lineTo(_x + 80, _y - 100);
            Semesteraufgabe.crc2.lineTo(_x + 80, _y - 50);
            Semesteraufgabe.crc2.lineTo(_x + 109, _y - 50);
            Semesteraufgabe.crc2.lineTo(_x + 109, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 112, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 112, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 117, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 117, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 122, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 122, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 127, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 127, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 127, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 132, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 132, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 137, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 137, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 137, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 142, _y - 82);
            Semesteraufgabe.crc2.lineTo(_x + 142, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 147, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 147, _y - 90);
            Semesteraufgabe.crc2.lineTo(_x + 147, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 150, _y - 70);
            Semesteraufgabe.crc2.lineTo(_x + 150, _y);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
        }
        drawSeestar(_x, _y, spikes, outerRadius, innerRadius) {
            var rot = Math.PI / 2 * 3;
            var x = _x;
            var y = _y;
            var step = Math.PI / spikes;
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.moveTo(_x, _y - outerRadius);
            for (var i = 0; i < spikes; i++) {
                x = _x + Math.cos(rot) * outerRadius;
                y = _y + Math.sin(rot) * outerRadius;
                Semesteraufgabe.crc2.lineTo(x, y);
                rot += step;
                x = _x + Math.cos(rot) * innerRadius;
                y = _y + Math.sin(rot) * innerRadius;
                Semesteraufgabe.crc2.lineTo(x, y);
                rot += step;
            }
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fillStyle = "#ff6600";
            Semesteraufgabe.crc2.fill();
        }
    }
    Semesteraufgabe.Background = Background;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=background.js.map