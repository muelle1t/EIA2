var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Won {
        constructor() {
            this.drawScreenAndText();
        }
        drawScreenAndText() {
            Abschlussaufgabe.tweety.fillStyle = "#CED8F6";
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.rect(20, 20, 800, 460);
            Abschlussaufgabe.tweety.globalAlpha = 0.8;
            Abschlussaufgabe.tweety.closePath();
            Abschlussaufgabe.tweety.fill();
            Abschlussaufgabe.tweety.fillStyle = "white";
            Abschlussaufgabe.tweety.font = "30px Arial";
            Abschlussaufgabe.tweety.textAlign = "center";
            Abschlussaufgabe.tweety.fillText("Hey! You helped Tweety", 1000 / 2, 500 / 2 - 55);
            Abschlussaufgabe.tweety.fillText("collect all the bugs.", 1000 / 2, 500 / 2 - 20);
            Abschlussaufgabe.tweety.fillText("Now she can go back to her family.", 1000 / 2, 500 / 2 + 20);
            Abschlussaufgabe.tweety.fillText("Thanks for your help!", 1000 / 2, 500 / 2 + 55);
        }
    }
    Abschlussaufgabe.Won = Won;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=won.js.map