namespace Abschlussaufgabe {

    export class Fly extends Food {

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }

        move(): void {
            this.x -= 1;
            if (this.x < 0) {
                this.x = 1010;
            }




        }

        draw(): void {
            bugs.beginPath();
            bugs.moveTo(this.x, this.y);
            //bugs.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
            bugs.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            bugs.fillStyle = "#000000";
            bugs.closePath();
            bugs.fill();

            //Auge
            bugs.beginPath();
            bugs.moveTo(this.x, this.y);
            bugs.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
            bugs.fillStyle = "#FFFFFF";
            bugs.closePath();
            bugs.fill();

            //Fühler
            bugs.beginPath();
            bugs.moveTo(this.x - 1, this.y - 1);
            bugs.lineTo(this.x - 7, this.y - 10);
            bugs.fillStyle = "#000000";
            bugs.strokeStyle = "#000000";
            bugs.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
            bugs.closePath();
            bugs.fill();
            bugs.stroke();

            //Flügel
            bugs.beginPath();
            bugs.moveTo(this.x, this.y);
            //bugs.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            //bugs.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            bugs.fillStyle = "#CEF6F5";
            bugs.closePath();
            bugs.fill();


        }
    }

}