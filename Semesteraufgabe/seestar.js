var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Seestar {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomPosition() {
            this.x = (Math.random() * (950 - 350)) + 350;
            this.y = (Math.random() * (700 - 650)) + 650;
        }
        drawRandomSeestar() {
            let seeweed = Math.floor((Math.random() * 4) + 0);
            switch (seeweed) {
                case 0:
                    this.drawSeestar();
                    break;
                case 1:
                    this.drawSeestarOrange();
                    break;
                case 2:
                    this.drawSeestarRed();
                    break;
            }
        }
        drawSeestar() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#FFFF00";
            Semesteraufgabe.crc2.strokeStyle = "#ffff00";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 10, this.y - 15);
            Semesteraufgabe.crc2.lineTo(this.x + 15, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y + 5);
            Semesteraufgabe.crc2.lineTo(this.x + 15, this.y + 15);
            Semesteraufgabe.crc2.lineTo(this.x + 7, this.y + 30);
            Semesteraufgabe.crc2.lineTo(this.x, this.y + 12);
            Semesteraufgabe.crc2.lineTo(this.x - 13, this.y + 5);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
        }
        drawSeestarOrange() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#ff6600";
            Semesteraufgabe.crc2.strokeStyle = "#ff6600";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 10, this.y - 15);
            Semesteraufgabe.crc2.lineTo(this.x + 15, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y + 5);
            Semesteraufgabe.crc2.lineTo(this.x + 15, this.y + 15);
            Semesteraufgabe.crc2.lineTo(this.x + 7, this.y + 30);
            Semesteraufgabe.crc2.lineTo(this.x, this.y + 12);
            Semesteraufgabe.crc2.lineTo(this.x - 13, this.y + 5);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
        }
        drawSeestarRed() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#e60000";
            Semesteraufgabe.crc2.strokeStyle = "#e60000";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 10, this.y - 15);
            Semesteraufgabe.crc2.lineTo(this.x + 15, this.y);
            Semesteraufgabe.crc2.lineTo(this.x + 30, this.y + 5);
            Semesteraufgabe.crc2.lineTo(this.x + 15, this.y + 15);
            Semesteraufgabe.crc2.lineTo(this.x + 7, this.y + 30);
            Semesteraufgabe.crc2.lineTo(this.x, this.y + 12);
            Semesteraufgabe.crc2.lineTo(this.x - 13, this.y + 5);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
        }
    }
    Semesteraufgabe.Seestar = Seestar;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=seestar.js.map