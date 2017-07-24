var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Food {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.drawFood();
            this.move();
        }
        drawFood() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = "#ACFA58";
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.arc(this.x + 7, this.y, 5, 0, 2 * Math.PI);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fill();
        }
        //zufaellige Bewegungsrichtung
        move() {
            this.y += Math.random() * 10;
        }
    }
    Semesteraufgabe.Food = Food;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=food.js.map