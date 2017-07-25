var Aquarium;
(function (Aquarium) {
    class Food {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Kreisposition herausfinden
        takeObjectPosition() {
            this.positionX = this.x;
            this.positionY = this.y;
        }
        //Ani        
        update() {
            this.drawFood();
            this.move();
            this.takeObjectPosition();
        }
        drawFood() {
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#BCF5A9";
            Aquarium.crc2.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.stroke();
        }
        //zufaellige Bewegungsrichtung
        move() {
            this.y += Math.random() * 10;
            for (let i = 0; i < 100; i++) {
                if (this.x < 0) {
                    this.x = Aquarium.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = Aquarium.crc2.canvas.height;
                }
                if (this.y >= Aquarium.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        //zufaellige Startpo        
        setRandomPosition() {
            this.x = Math.floor((Math.random() * Aquarium.crc2.canvas.width) - 50);
            this.y = Math.floor((Math.random() * Aquarium.crc2.canvas.height) - 50);
        }
    }
    Aquarium.Food = Food;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=food.js.map