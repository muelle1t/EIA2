var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Seeweed {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomPosition() {
            this.x = (Math.random() * (350 - 0)) + 0;
            this.y = (Math.random() * (700 - 650)) + 650;
        }
        drawRandomSeeweed() {
            let seeweed = Math.floor((Math.random() * 4) + 0);
            switch (seeweed) {
                case 0:
                    this.drawSeeweed();
                    break;
                case 1:
                    this.drawSeeweed2();
                    break;
            }
        }
        drawSeeweed() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#088A08";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.bezierCurveTo(this.x, this.y - 20, this.x - 50, this.y - 220, this.x - 15, this.y - 50);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#088A08";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.bezierCurveTo(this.x - 10, this.y - 20, this.x - 10, this.y - 200, this.x, this.y - 50);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
        }
        drawSeeweed2() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#4dff88";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.fillRect(this.x, this.y - 60, 4, 60);
            //crc2.ellipse(this.x - 2, this.y - 10, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 4, this.y - 20, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x - 2, this.y - 30, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 4, this.y - 40, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x - 2, this.y - 50, 5, 3, 0, Math.PI * 2, 0);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
        }
    }
    Semesteraufgabe.Seeweed = Seeweed;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=seeweed.js.map