var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Fly extends Abschlussaufgabe.Food {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x -= 1;
            if (this.x < 0) {
                this.x = 1010;
            }
        }
        draw() {
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x, this.y);
            //bugs.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
            Abschlussaufgabe.bugs.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.fillStyle = "#000000";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            //Auge
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x, this.y);
            Abschlussaufgabe.bugs.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.fillStyle = "#FFFFFF";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            //Fühler
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x - 1, this.y - 1);
            Abschlussaufgabe.bugs.lineTo(this.x - 7, this.y - 10);
            Abschlussaufgabe.bugs.fillStyle = "#000000";
            Abschlussaufgabe.bugs.strokeStyle = "#000000";
            Abschlussaufgabe.bugs.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
            Abschlussaufgabe.bugs.stroke();
            //Flügel
            Abschlussaufgabe.bugs.beginPath();
            Abschlussaufgabe.bugs.moveTo(this.x, this.y);
            //bugs.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            //bugs.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            Abschlussaufgabe.bugs.fillStyle = "#CEF6F5";
            Abschlussaufgabe.bugs.closePath();
            Abschlussaufgabe.bugs.fill();
        }
    }
    Abschlussaufgabe.Fly = Fly;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fly.js.map