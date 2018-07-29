var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Ladybug extends Abschlussaufgabe.Food {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x -= 0.5;
            if (this.x < 0) {
                this.x = 1010;
            }
        }
        draw() {
            //Flügel
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x, this.y);
            Abschlussaufgabe.bugs.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            Abschlussaufgabe.bugs.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            Abschlussaufgabe.bugs.fillStyle = "#CEF6F5";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            //Körper
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.arc(this.x + 5, this.y + 2, 9, 0, Math.PI, true);
            Abschlussaufgabe.bugs.fillStyle = "#FF0000";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.arc(this.x + 2, this.y - 3, 1.5, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.arc(this.x + 9, this.y - 1, 1.5, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.fillStyle = "#000000";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            //Kopf
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x, this.y);
            Abschlussaufgabe.bugs.arc(this.x - 5, this.y, 4, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.fillStyle = "#000000";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            //Auge
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x, this.y);
            Abschlussaufgabe.bugs.arc(this.x - 6, this.y - 1, 1, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.fillStyle = "#FFFFFF";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            //Fühler
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x - 2, this.y - 1);
            Abschlussaufgabe.bugs.lineTo(this.x - 5, this.y - 7);
            Abschlussaufgabe.bugs.fillStyle = "#000000";
            Abschlussaufgabe.bugs.strokeStyle = "#000000";
            Abschlussaufgabe.bugs.arc(this.x - 5, this.y - 7, 1, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            Abschlussaufgabe.bugs.stroke();
        }
    }
    Abschlussaufgabe.Ladybug = Ladybug;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ladybug.js.map