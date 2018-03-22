var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class Bees {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.setRandomStyle();
        }
        update() {
            this.drawBee();
            this.move();
        }
        drawBee() {
            //draw
        }
        move() {
            //move
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
        }
    }
    Aufgabe8_Bienen.Bees = Bees;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=bees.js.map