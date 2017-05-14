var Aufgabe7_Bienen;
(function (Aufgabe7_Bienen) {
    class Bee {
        constructor(_x, _y, _color, _direction) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.direction = _direction;
            this.setRandomDirection();
            this.setRandomStyle();
        }
        update() {
            this.drawBee();
            this.move();
        }
        drawBee() {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y);
            //crc2.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
            Aufgabe7_Bienen.crc2.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fillStyle = this.color;
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            //Auge
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bienen.crc2.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            //Fühler
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x - 1, this.y - 1);
            Aufgabe7_Bienen.crc2.lineTo(this.x - 7, this.y - 10);
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe7_Bienen.crc2.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.stroke();
            //Streifen
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x - 1, this.y + 5);
            Aufgabe7_Bienen.crc2.lineWidth = 3;
            Aufgabe7_Bienen.crc2.lineTo(this.x, this.y - 7);
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.stroke();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 6, this.y + 5);
            Aufgabe7_Bienen.crc2.lineWidth = 3;
            Aufgabe7_Bienen.crc2.lineTo(this.x + 6, this.y - 5);
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.stroke();
            //Flügel
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y);
            //crc2.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            Aufgabe7_Bienen.crc2.fillStyle = "#CEF6F5";
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
        }
        move() {
            this.x += Math.random() * 3 - 2 + this.direction;
            this.y += Math.random() * 4 - 2;
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
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
        setRandomDirection() {
            this.direction = (Math.random() * 1.5);
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
        }
    }
    Aufgabe7_Bienen.Bee = Bee;
})(Aufgabe7_Bienen || (Aufgabe7_Bienen = {}));
//# sourceMappingURL=bees.js.map