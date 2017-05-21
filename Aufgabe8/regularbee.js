var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class RegularBee extends Aufgabe8_Bienen.Bees {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        drawBee() {
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            //crc2.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
            Aufgabe8_Bienen.crc2.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = this.color;
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            //Auge
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe8_Bienen.crc2.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#000000";
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            //Fühler
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x - 1, this.y - 1);
            Aufgabe8_Bienen.crc2.lineTo(this.x - 7, this.y - 10);
            Aufgabe8_Bienen.crc2.fillStyle = "#000000";
            Aufgabe8_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe8_Bienen.crc2.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.stroke();
            //Streifen
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x - 1, this.y + 5);
            Aufgabe8_Bienen.crc2.lineWidth = 3;
            Aufgabe8_Bienen.crc2.lineTo(this.x, this.y - 7);
            Aufgabe8_Bienen.crc2.fillStyle = "#000000";
            Aufgabe8_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x + 6, this.y + 5);
            Aufgabe8_Bienen.crc2.lineWidth = 3;
            Aufgabe8_Bienen.crc2.lineTo(this.x + 6, this.y - 5);
            Aufgabe8_Bienen.crc2.fillStyle = "#000000";
            Aufgabe8_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.stroke();
            //Flügel
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            //crc2.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            Aufgabe8_Bienen.crc2.fillStyle = "#CEF6F5";
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
        }
        move() {
            super.x += Math.random() * 3 - 2 + this.direction;
            super.y += Math.random() * 4 - 2;
        }
    }
    Aufgabe8_Bienen.RegularBee = RegularBee;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=regularbee.js.map