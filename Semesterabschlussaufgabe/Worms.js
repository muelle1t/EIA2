var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Worm {
        constructor() {
            console.log("A New Worm has appeared!");
        }
        randomSize() {
            //abstract
        }
        randomPosition() {
            //abstract
        }
        drawGhost() {
            //abstract
        }
        update() {
            //abstract
        }
        move() {
            //abstract
        }
    }
    Abschlussaufgabe.Worm = Worm;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Worms.js.map