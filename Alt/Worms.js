var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Worm {
        constructor() {
            console.log("A New Worm has appeared!");
        }
        randomPosition() {
            //abstract
        }
        drawWorm() {
            //abstract
        }
        update() {
            //abstract
        }
    }
    Abschlussaufgabe.Worm = Worm;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Worms.js.map