var AltAquarium;
(function (AltAquarium) {
    class Food {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.drawFood();
            this.setRandomPosition();
            this.move();
        }
        //Ani        
        update() {
            this.drawFood();
            this.move();
        }
        drawFood() {
            AltAquarium.trash.beginPath();
            AltAquarium.trash.fillStyle = "#BCF5A9";
            AltAquarium.trash.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            AltAquarium.trash.closePath();
            AltAquarium.trash.fill();
            AltAquarium.trash.stroke();
        }
        //zufaellige Bewegungsrichtung
        move() {
            this.y += Math.random() * 10;
            for (let i = 0; i < 100; i++) {
                if (this.x < 0) {
                    this.x = AltAquarium.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = AltAquarium.crc2.canvas.height;
                }
                if (this.y >= AltAquarium.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        //zufaellige Startpo        
        setRandomPosition() {
            this.x = Math.floor((Math.random() * AltAquarium.crc2.canvas.width) - 50);
            this.y = Math.floor((Math.random() * AltAquarium.crc2.canvas.height) - 50);
        }
    }
    AltAquarium.Food = Food;
})(AltAquarium || (AltAquarium = {}));
//# sourceMappingURL=food.js.map