var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class RegularBee extends Aufgabe8_Bienen.Bees {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        drawBee() {
            //abstract
        }
        move() {
            this.x += Math.random() * 3 - 2 + this.direction;
            this.y += Math.random() * 4 - 2;
        }
    }
    Aufgabe8_Bienen.RegularBee = RegularBee;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=regularbee.js.map