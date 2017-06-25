var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class TulipYellow extends Aufgabe8_Bienen.Flower {
        constructor(_x, _y) {
            super(_x, _y);
        }
        drawTulipYellow() {
            //grüner Stil          
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe8_Bienen.crc2.fillRect(this.x, this.y - 25, 5, 40);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            //Blüten 
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y - 30);
            Aufgabe8_Bienen.crc2.arc(this.x, this.y - 35, 15, 0, Math.PI);
            Aufgabe8_Bienen.crc2.fillStyle = "#FFFF00";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x, this.y - 35, 7, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
        }
    }
    Aufgabe8_Bienen.TulipYellow = TulipYellow;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=tulipyellow.js.map