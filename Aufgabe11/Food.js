var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y == 690) {
                this.y += 0;
            }
            else {
                this.y += 1;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillRect(this.x - 5, this.y + 5, 5, 5);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#f48e41";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Food.js.map