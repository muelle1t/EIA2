var Aufgabe11;
(function (Aufgabe11) {
    class SmallFish extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x += 1;
            if (this.x > 1050) {
                this.x = -10;
            }
        }
        draw() {
            //Flosse hinten
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.strokeStyle = "#00ffbb";
            Aufgabe11.crc2.fillStyle = "#00ffbb";
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y - 15);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y + 15);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            //Körper
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#00ffbb";
            Aufgabe11.crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            //Auge
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            //Mund
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.moveTo(this.x + 15, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y + 6);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.SmallFish = SmallFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=smallfish.js.map