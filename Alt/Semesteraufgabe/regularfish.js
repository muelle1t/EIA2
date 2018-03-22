var Aquarium;
(function (Aquarium) {
    class RegularFish {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.setRandomStyle(); // die Fische haben verschiedene Farben
            this.drawFish();
        }
        update() {
            this.setRandomStyle();
            this.drawFish(); // Fisch wird gezeichnet
            this.move(); // Fisch bewegt sich minimal
        }
        drawFish() {
            //Flosse hinten
            Aquarium.crc2.beginPath();
            Aquarium.crc2.strokeStyle = this.color;
            Aquarium.crc2.fillStyle = this.color;
            Aquarium.crc2.moveTo(this.x, this.y);
            Aquarium.crc2.lineTo(this.x - 20, this.y - 15);
            Aquarium.crc2.lineTo(this.x - 20, this.y + 15);
            Aquarium.crc2.closePath();
            Aquarium.crc2.stroke();
            Aquarium.crc2.fill();
            //Körper
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = this.color;
            //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.stroke();
            //Auge
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#000000";
            Aquarium.crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            //Mund
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#000000";
            Aquarium.crc2.strokeStyle = "#000000";
            Aquarium.crc2.moveTo(this.x + 15, this.y + 5);
            Aquarium.crc2.lineTo(this.x + 25, this.y + 6);
            Aquarium.crc2.closePath();
            Aquarium.crc2.stroke();
            Aquarium.crc2.fill();
        }
        move() {
            //abtsract
        }
        //Funktion für unterschiedliche Farben       
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
        }
    }
    Aquarium.RegularFish = RegularFish;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=regularfish.js.map