var Aufgabe10;
(function (Aufgabe10) {
    class BigBubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 600;
            }
        }
        drawBigBubble() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe10.crc2.fillStyle = "#c6e6ff";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        }
    }
    Aufgabe10.BigBubble = BigBubble;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=bigbubbles.js.map