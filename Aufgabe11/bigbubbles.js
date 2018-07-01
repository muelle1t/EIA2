var Aufgabe11;
(function (Aufgabe11) {
    class BigBubble extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 600;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe11.crc2.fillStyle = "#c6e6ff";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
        }
    }
    Aufgabe11.BigBubble = BigBubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bigbubbles.js.map