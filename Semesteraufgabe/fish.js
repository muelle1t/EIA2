var Aquarium;
(function (Aquarium) {
    class Fish {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomDirection();
        }
        update() {
            this.drawFish();
            this.move();
            this.setRandomDirection();
        }
        drawFish() {
            //draw
        }
        move() {
            //move
        }
        setRandomDirection() {
            this.direction = Math.round((Math.random() * 50) + 1000);
        }
    }
    Aquarium.Fish = Fish;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=fish.js.map