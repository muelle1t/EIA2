var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class DaisyWhite extends Aufgabe8_Bienen.Flower {
        constructor(_x, _y) {
            super(_x, _y);
        }
        drawDaisyWhite() {
            //grüner Stil
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe8_Bienen.crc2.fillRect(this.x, this.y - 40, 4, 40);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            //Blüten
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#FFFFFF";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x, this.y - 47, 9, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x, this.y - 33, 9, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x, this.y - 40, 6, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#F4FA58";
            Aufgabe8_Bienen.crc2.fill();
        }
    }
    Aufgabe8_Bienen.DaisyWhite = DaisyWhite;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=daisywhite.js.map