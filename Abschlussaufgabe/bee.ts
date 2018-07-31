namespace Abschlussaufgabe {


    
        export class Bee {
            
            x: number;
            y: number;

            constructor(_x: number, _y: number) {
                
                this.x = _x;
                this.y = _y;
            }
            update(): void {
                this.draw();
                this.move();

            }
            draw(): void {
                bee.beginPath();
                bee.moveTo(this.x, this.y);
                //bee.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
                bee.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
                bee.fillStyle = "#FFFF00";
                bee.closePath();
                bee.fill();

                //Auge
                bee.beginPath();
                bee.moveTo(this.x, this.y);
                bee.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
                bee.fillStyle = "#000000";
                bee.closePath();
                bee.fill();

                //Fühler
                bee.beginPath();
                bee.moveTo(this.x - 1, this.y - 1);
                bee.lineTo(this.x - 7, this.y - 10);
                bee.fillStyle = "#000000";
                bee.strokeStyle = "#000000";
                bee.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
                bee.closePath();
                bee.fill();
                bee.stroke();

                //Streifen
                bee.beginPath();
                bee.moveTo(this.x - 1, this.y + 5);
                bee.lineWidth = 3;
                bee.lineTo(this.x, this.y - 7);
                bee.fillStyle = "#000000";
                bee.strokeStyle = "#000000";
                bee.closePath();
                bee.fill();
                bee.stroke();

                bee.beginPath();
                bee.moveTo(this.x + 6, this.y + 5);
                bee.lineWidth = 3;
                bee.lineTo(this.x + 6, this.y - 5);
                bee.fillStyle = "#000000";
                bee.strokeStyle = "#000000";
                bee.closePath();
                bee.fill();
                bee.stroke();

                //Flügel
                bee.beginPath();
                bee.moveTo(this.x, this.y);
                //bee.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
                //bee.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
                bee.fillStyle = "#CEF6F5";
                bee.closePath();
                bee.fill();

            }
            move(): void {
                this.x -= 2;
                if (this.x < 0) {
                    this.x = 1010;
                }

        }
                redraw(): void {
                    bee.clearRect(0, 0, 1000, 500);
                    bee.beginPath();
                    bee.closePath();
                }
            }
        }

