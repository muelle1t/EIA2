var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Lost {
        constructor() {
            this.drawScreenAndText();
        }
        drawScreenAndText() {
            Abschlussaufgabe.tweety.fillStyle = "#000033";
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.rect(20, 20, 800, 460);
            Abschlussaufgabe.tweety.globalAlpha = 0.8;
            Abschlussaufgabe.tweety.closePath();
            Abschlussaufgabe.tweety.fill();
            Abschlussaufgabe.tweety.fillStyle = "white";
            Abschlussaufgabe.tweety.font = "30px Arial";
            Abschlussaufgabe.tweety.textAlign = "center";
            Abschlussaufgabe.tweety.fillText("Tweets was stung by to many bees!", 1000 / 2, 500 / 2 - 55);
            Abschlussaufgabe.tweety.fillText("You have to start again!", 1000 / 2, 500 / 2 - 20);
            Abschlussaufgabe.tweety.fillText("Just reaload the page", 1000 / 2, 500 / 2 + 20);
            Abschlussaufgabe.tweety.fillText("and you can help Tweety, again.", 1000 / 2, 500 / 2 + 55);
        }
    }
    Abschlussaufgabe.Lost = Lost;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=lost.js.map