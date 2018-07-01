var Aufgabe11;
(function (Aufgabe11) {
    class BigFish extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x += 2;
            if (this.x > 1050) {
                this.x = -10;
            }
        }
        draw() {
            //Flosse hinten
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.strokeStyle = "#f90261";
            Aufgabe11.crc2.fillStyle = "#f90261";
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x - 30, this.y - 30);
            Aufgabe11.crc2.lineTo(this.x - 30, this.y + 30);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            //Körper
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#f90261";
            Aufgabe11.crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            //Auge
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.arc(this.x + 20, this.y - 7, 3, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            //Mund
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.moveTo(this.x + 30, this.y + 12);
            Aufgabe11.crc2.lineTo(this.x + 15, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y + 24);
            Aufgabe11.crc2.arcTo(this.x + 20, this.y + 24, this.x + 30, this.y + 12, 25);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.BigFish = BigFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bigfish.js.map