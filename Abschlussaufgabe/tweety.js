var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bird {
        constructor(_x, _y) {
            console.log("Hello Tweety");
            this.x = _x;
            this.y = _y;
        }
        move(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Funtion für Tweety
        drawTweety() {
            //Schnabel
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.strokeStyle = "#FF8000";
            Abschlussaufgabe.tweety.fillStyle = "#FF8000";
            Abschlussaufgabe.tweety.moveTo(this.x + 30, this.y - 4);
            Abschlussaufgabe.tweety.lineTo(this.x + 30, this.y + 5);
            Abschlussaufgabe.tweety.lineTo(this.x + 45, this.y + 3);
            Abschlussaufgabe.tweety.lineTo(this.x + 30, this.y - 4);
            Abschlussaufgabe.tweety.closePath();
            Abschlussaufgabe.tweety.fill();
            //Körper
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.strokeStyle = "#FFFF00";
            Abschlussaufgabe.tweety.fillStyle = "#FFFF00";
            Abschlussaufgabe.tweety.arc(this.x, this.y, 16, 0, Math.PI * 2);
            Abschlussaufgabe.tweety.fill();
            Abschlussaufgabe.tweety.closePath();
            //Kopf
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.strokeStyle = "#FFFF00";
            Abschlussaufgabe.tweety.fillStyle = "#FFFF00";
            Abschlussaufgabe.tweety.arc(this.x + 20, this.y - 1, 11, 0, Math.PI * 2);
            Abschlussaufgabe.tweety.fill();
            Abschlussaufgabe.tweety.closePath();
            //Auge
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.strokeStyle = "#000000";
            Abschlussaufgabe.tweety.fillStyle = "#000000";
            Abschlussaufgabe.tweety.arc(this.x + 25, this.y - 6, 1.5, 0, Math.PI * 2);
            Abschlussaufgabe.tweety.fill();
            Abschlussaufgabe.tweety.closePath();
            //Flügel
            Abschlussaufgabe.tweety.beginPath();
            Abschlussaufgabe.tweety.moveTo(this.x, this.y);
            Abschlussaufgabe.tweety.ellipse(this.x - 10, this.y - 10, 10, 25, 60 * Math.PI/90, 0, 2 * Math.PI);
            Abschlussaufgabe.tweety.fillStyle = "#FFFF00";
            Abschlussaufgabe.tweety.closePath();
            Abschlussaufgabe.tweety.fill();
            Abschlussaufgabe.tweety.ellipse(this.x - 10, this.y + 10, 10, 25, 60 * Math.PI/180, 0, 2 * Math.PI);
            Abschlussaufgabe.tweety.fillStyle = "#FFFF00";
            Abschlussaufgabe.tweety.closePath();
            Abschlussaufgabe.tweety.fill();
        }
    }
    Abschlussaufgabe.Bird = Bird;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=tweety.js.map