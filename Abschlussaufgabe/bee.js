var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            Abschlussaufgabe.bee.beginPath();
            Abschlussaufgabe.bee.moveTo(this.x, this.y);
            Abschlussaufgabe.bee.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
            Abschlussaufgabe.bee.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            Abschlussaufgabe.bee.fillStyle = "#FFFF00";
            Abschlussaufgabe.bee.closePath();
            Abschlussaufgabe.bee.fill();
            //Auge
            Abschlussaufgabe.bee.beginPath();
            Abschlussaufgabe.bee.moveTo(this.x, this.y);
            Abschlussaufgabe.bee.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
            Abschlussaufgabe.bee.fillStyle = "#000000";
            Abschlussaufgabe.bee.closePath();
            Abschlussaufgabe.bee.fill();
            //Fühler
            Abschlussaufgabe.bee.beginPath();
            Abschlussaufgabe.bee.moveTo(this.x - 1, this.y - 1);
            Abschlussaufgabe.bee.lineTo(this.x - 7, this.y - 10);
            Abschlussaufgabe.bee.fillStyle = "#000000";
            Abschlussaufgabe.bee.strokeStyle = "#000000";
            Abschlussaufgabe.bee.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
            Abschlussaufgabe.bee.closePath();
            Abschlussaufgabe.bee.fill();
            Abschlussaufgabe.bee.stroke();
            //Streifen
            Abschlussaufgabe.bee.beginPath();
            Abschlussaufgabe.bee.moveTo(this.x - 1, this.y + 5);
            Abschlussaufgabe.bee.lineWidth = 3;
            Abschlussaufgabe.bee.lineTo(this.x, this.y - 7);
            Abschlussaufgabe.bee.fillStyle = "#000000";
            Abschlussaufgabe.bee.strokeStyle = "#000000";
            Abschlussaufgabe.bee.closePath();
            Abschlussaufgabe.bee.fill();
            Abschlussaufgabe.bee.stroke();
            Abschlussaufgabe.bee.beginPath();
            Abschlussaufgabe.bee.moveTo(this.x + 6, this.y + 5);
            Abschlussaufgabe.bee.lineWidth = 3;
            Abschlussaufgabe.bee.lineTo(this.x + 6, this.y - 5);
            Abschlussaufgabe.bee.fillStyle = "#000000";
            Abschlussaufgabe.bee.strokeStyle = "#000000";
            Abschlussaufgabe.bee.closePath();
            Abschlussaufgabe.bee.fill();
            Abschlussaufgabe.bee.stroke();
            //Flügel
            Abschlussaufgabe.bee.beginPath();
            Abschlussaufgabe.bee.moveTo(this.x, this.y);
            Abschlussaufgabe.bee.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            Abschlussaufgabe.bee.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            Abschlussaufgabe.bee.fillStyle = "#CEF6F5";
            Abschlussaufgabe.bee.closePath();
            Abschlussaufgabe.bee.fill();
        }
        move() {
            this.x -= 2;
            if (this.x < 0) {
                this.x = 1010;
            }
        }
    }
    Abschlussaufgabe.Bee = Bee;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bee.js.map