var Aufgabe10;
(function (Aufgabe10) {
    class SmallBubble {
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 600;
            }
        }
        drawSmallBubble() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x - 5, this.y - 40, 5, 0, Math.PI * 2);
            Aufgabe10.crc2.fillStyle = "#5bb7ff";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        }
    }
    Aufgabe10.SmallBubble = SmallBubble;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=smallbubbles.js.map