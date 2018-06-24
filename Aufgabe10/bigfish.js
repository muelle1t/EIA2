var Aufgabe10;
(function (Aufgabe10) {
    class BigFish {
        move() {
            this.x += Math.random() * 2;
            if (this.x < 0) {
                this.x = 1000;
            }
        }
        drawBigFish() {
            //Flosse hinten
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.strokeStyle = "#f90261";
            Aufgabe10.crc2.fillStyle = "#f90261";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x - 30, this.y - 30);
            Aufgabe10.crc2.lineTo(this.x - 30, this.y + 30);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            //Körper
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#f90261";
            Aufgabe10.crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            //Auge
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.arc(this.x + 20, this.y - 7, 3, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            //Mund
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.moveTo(this.x + 30, this.y + 12);
            Aufgabe10.crc2.lineTo(this.x + 15, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x + 20, this.y + 24);
            Aufgabe10.crc2.arcTo(this.x + 20, this.y + 24, this.x + 30, this.y + 12, 25);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.BigFish = BigFish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=bigfish.js.map