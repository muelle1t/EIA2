var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomPosition() {
            this.x = (Math.random() * (990 - 300)) + 300;
            this.y = (Math.random() * (600 - 450)) + 450;
        }
        drawRandomFlower() {
            let flower = Math.floor((Math.random() * 4) + 0);
            let x = (Math.random() * (990 - 300)) + 300;
            let y = (Math.random() * (600 - 450)) + 450;
            let d1 = new Aufgabe8_Bienen.DaisyBlue(x, y);
            let d2 = new Aufgabe8_Bienen.DaisyWhite(x, y);
            let t1 = new Aufgabe8_Bienen.TulipPurple(x, y);
            let t2 = new Aufgabe8_Bienen.TulipYellow(x, y);
            switch (flower) {
                case 0:
                    d1.drawDaisyBlue();
                    break;
                case 1:
                    d2.drawDaisyWhite();
                    break;
                case 2:
                    t1.drawTulipPurple();
                    break;
                case 3:
                    t2.drawTulipYellow();
                    break;
            }
        }
        //Magariten
        drawDaisyBlue() {
            //abstract
        }
        drawDaisyWhite() {
            //abstract
        }
        //Tuplen
        drawTulipPurple() {
            //abstract 
        }
        drawTulipYellow() {
            //abstract
        }
    }
    Aufgabe8_Bienen.Flower = Flower;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=flowers.js.map