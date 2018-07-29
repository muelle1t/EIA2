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
    }
    Abschlussaufgabe.Food = Food;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Food.js.map