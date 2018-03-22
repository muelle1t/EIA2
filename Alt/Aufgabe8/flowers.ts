namespace Aufgabe8_Bienen {

    export class Flower {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        
        setRandomPosition(): void {
            this.x = (Math.random() * (990 - 300)) + 300;
            this.y = (Math.random() * (600 - 450)) + 450;

        }
        
        
        drawRandomFlower(): void {
            let flower: number = Math.floor((Math.random() * 4) + 0);
            let x: number = (Math.random() * (990 - 300)) + 300;
            let y: number = (Math.random() * (600 - 450)) + 450;
            let d1: DaisyBlue = new DaisyBlue(x, y);
            let d2: DaisyWhite = new DaisyWhite(x, y);
            let t1: TulipPurple = new TulipPurple(x, y);
            let t2: TulipYellow = new TulipYellow(x, y);
            
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
        drawDaisyBlue(): void {
            //abstract
        }

        drawDaisyWhite(): void {
           //abstract
        }


        //Tuplen
        drawTulipPurple(): void {
           //abstract 
        }

        drawTulipYellow(): void {
           //abstract
        }




    }


}