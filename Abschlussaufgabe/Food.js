var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Food {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            //Abstract
        }
        draw() {
            //Abstract
        }
        redraw() {
            Abschlussaufgabe.bugs.clearRect(0, 0, 1000, 500);
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.closePath();
        }
    }
    Abschlussaufgabe.Food = Food;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Food.js.map