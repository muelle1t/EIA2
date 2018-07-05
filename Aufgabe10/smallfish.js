var Aufgabe10;
(function (Aufgabe10) {
    class SmallFish {
        move() {
            this.x += 1;
            if (this.x > 1050) {
                this.x = -10;
            }
        }
        drawSmallFish() {
            //Flosse hinten
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.strokeStyle = "#00ffbb";
            Aufgabe10.crc2.fillStyle = "#00ffbb";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x - 20, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x - 20, this.y + 15);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            //Körper
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#00ffbb";
            //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            //Auge
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            //Mund
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.moveTo(this.x + 15, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y + 6);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.SmallFish = SmallFish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=smallfish.js.map