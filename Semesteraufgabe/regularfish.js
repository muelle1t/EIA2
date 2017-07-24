var Semesteraufgabe;
(function (Semesteraufgabe) {
    class RegularFish extends Semesteraufgabe.Fish {
        constructor(_x, _y) {
            super(_x, _y);
            this.setRandomStyle();
            this.setRandomFirstPosition();
        }
        update() {
            this.drawRegularFish();
            this.setRandomFirstPosition();
            this.move();
        }
        drawRegularFish() {
            //Flosse hinten
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.strokeStyle = this.color;
            Semesteraufgabe.crc2.fillStyle = this.color;
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x - 20, this.y - 15);
            Semesteraufgabe.crc2.lineTo(this.x - 20, this.y + 15);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fill();
            //Körper
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = this.color;
            //crc2.arc(_x + 7, _y, 20, 0, 2 * Math.PI);
            //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.stroke();
            //Auge
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#000000";
            Semesteraufgabe.crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
            //Mund
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#000000";
            Semesteraufgabe.crc2.strokeStyle = "#000000";
            Semesteraufgabe.crc2.moveTo(this.x + 15, this.y + 5);
            Semesteraufgabe.crc2.lineTo(this.x + 25, this.y + 6);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fill();
        }
        move() {
            this.x += Math.random() * 5 - 2;
            this.y += Math.random() * 9 - 5;
            if (this.x < 0) {
                this.x = 1000;
            }
            if (this.y < 0) {
                this.y = 700;
            }
            if (this.y > 700) {
                this.y = 0;
            }
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
        }
        setRandomFirstPosition() {
            this.x += Math.random() * 10;
            this.y += Math.random() * 5;
        }
    }
    Semesteraufgabe.RegularFish = RegularFish;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=regularfish.js.map