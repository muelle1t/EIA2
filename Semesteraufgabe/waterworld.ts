/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */
namespace Aquarium {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;

    let n: number = 15;
    export let allFish: RegularFish[] = [];
    //let allFood: Food[] = [];
    
    export let bady: BigFish;

     let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        
     



    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        let myGradient: any = crc2.createLinearGradient(0, 0, 0, 150);
        myGradient.addColorStop(0, "#ccccff");
        myGradient.addColorStop(1, "#000066");



        crc2.fillStyle = myGradient; //wasser im Hintergrund
        crc2.fillRect(0, 0, canvas.width, canvas.height);


        crc2.fillStyle = "#F2F5A9"; //Sand
        crc2.fillRect(0, 630, canvas.width, canvas.height / 10);

        //Schleife für SeeBegrünung
        for (var i: number = 0; i < 40; i++) {
            let sw: Seeweed = new Seeweed(0, 0);
            sw.setRandomPosition();
            sw.drawRandomSeeweed();
        }



        drawRock(700, 650);

        drawSandcastle(400, 650);

        drawSeestar(450, 660, 5, 30, 10);

        drawSeestar(550, 670, 5, 30, 10);

        drawSeestar(750, 650, 5, 30, 10);

        drawWater(0, 0);

        
        // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
       
        
        placeRegularFish();
        
        drawBigFish(); 
        
        window.setTimeout(animatefish, 100);
       
}
    
function placeRegularFish(): void {
       

        for (let i: number = 0; i < n; i++) {
            let x: number = Math.random() * 900;
            let y: number = Math.random() * 450;
            let _color: string;
//            let p: number = Math.round((Math.random() * 3) + 0);
            
            let rf: RegularFish = new RegularFish(x, y, _color);
            rf.setRandomStyle();
            rf.drawRegularFish();
            rf.move();
            rf.setRandomDirection();
            allFish.push(rf);
            
                    
            }
    
              
        window.setTimeout(animatefish, 100);
        }
    
function drawBigFish(): void {
        let bady: BigFish = new BigFish(300, 100);
        
        bady.update();

    }


function animatefish(): void {
        crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        
        //Schwimmverhalten regulärer Fische
        for (let i: number = 0; i < allFish.length; i++) {
            let fish: RegularFish = (allFish[i]);
            
            
            allFish[i].update();
                      
                                            
           }
        drawBigFish(); 
     
        window.setTimeout(animatefish, 100);
    }
    



    function drawRock(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "#8c8c8c";
        crc2.fillStyle = "#8c8c8c";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 5, _y - 20);
        crc2.lineTo(_x + 10, _y - 20);
        crc2.lineTo(_x + 10, _y - 25);
        crc2.lineTo(_x + 15, _y - 25);
        crc2.lineTo(_x + 15, _y - 30);
        crc2.lineTo(_x + 25, _y - 35);
        crc2.lineTo(_x + 25, _y - 40);
        crc2.lineTo(_x + 30, _y - 40);
        crc2.lineTo(_x + 30, _y - 45);
        crc2.lineTo(_x + 40, _y - 55);
        crc2.lineTo(_x + 40, _y - 60);
        crc2.lineTo(_x + 50, _y - 80);
        crc2.lineTo(_x + 50, _y - 90);
        crc2.lineTo(_x + 60, _y - 100);
        crc2.lineTo(_x + 70, _y - 100);
        crc2.lineTo(_x + 90, _y - 120);
        crc2.lineTo(_x + 100, _y - 120);
        crc2.lineTo(_x + 120, _y - 135);
        crc2.lineTo(_x + 140, _y - 130);
        crc2.lineTo(_x + 160, _y - 135);
        crc2.lineTo(_x + 200, _y - 135);
        crc2.lineTo(_x + 240, _y - 130);
        crc2.lineTo(_x + 280, _y - 135);
        crc2.lineTo(_x + 300, _y - 130);
        crc2.lineTo(_x + 300, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSandcastle(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#F2F5A9";
        crc2.strokeStyle = "#F2F5A9";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 70);
        crc2.lineTo(_x + 3, _y - 70);
        crc2.lineTo(_x + 3, _y - 90);
        crc2.lineTo(_x + 8, _y - 90);
        crc2.lineTo(_x + 8, _y - 82);
        crc2.lineTo(_x + 13, _y - 82);
        crc2.lineTo(_x + 13, _y - 90);
        crc2.lineTo(_x + 18, _y - 90);
        crc2.lineTo(_x + 18, _y - 82);
        crc2.lineTo(_x + 23, _y - 82);
        crc2.lineTo(_x + 23, _y - 90);
        crc2.lineTo(_x + 23, _y - 90);
        crc2.lineTo(_x + 28, _y - 90);
        crc2.lineTo(_x + 28, _y - 82);
        crc2.lineTo(_x + 28, _y - 82);
        crc2.lineTo(_x + 33, _y - 82);
        crc2.lineTo(_x + 33, _y - 90);
        crc2.lineTo(_x + 33, _y - 90);
        crc2.lineTo(_x + 38, _y - 90);
        crc2.lineTo(_x + 38, _y - 70);
        crc2.lineTo(_x + 41, _y - 70);
        crc2.lineTo(_x + 41, _y - 50);
        crc2.lineTo(_x + 60, _y - 50);
        crc2.lineTo(_x + 60, _y - 100);
        crc2.lineTo(_x + 55, _y - 100);
        crc2.lineTo(_x + 70, _y - 130);
        crc2.lineTo(_x + 85, _y - 100);
        crc2.lineTo(_x + 80, _y - 100);
        crc2.lineTo(_x + 80, _y - 50);
        crc2.lineTo(_x + 109, _y - 50);
        crc2.lineTo(_x + 109, _y - 70);
        crc2.lineTo(_x + 112, _y - 70);
        crc2.lineTo(_x + 112, _y - 90);
        crc2.lineTo(_x + 117, _y - 90);
        crc2.lineTo(_x + 117, _y - 82);
        crc2.lineTo(_x + 122, _y - 82);
        crc2.lineTo(_x + 122, _y - 90);
        crc2.lineTo(_x + 127, _y - 90);
        crc2.lineTo(_x + 127, _y - 90);
        crc2.lineTo(_x + 127, _y - 82);
        crc2.lineTo(_x + 132, _y - 82);
        crc2.lineTo(_x + 132, _y - 90);
        crc2.lineTo(_x + 137, _y - 90);
        crc2.lineTo(_x + 137, _y - 90);
        crc2.lineTo(_x + 137, _y - 82);
        crc2.lineTo(_x + 142, _y - 82);
        crc2.lineTo(_x + 142, _y - 90);
        crc2.lineTo(_x + 147, _y - 90);
        crc2.lineTo(_x + 147, _y - 90);
        crc2.lineTo(_x + 147, _y - 70);
        crc2.lineTo(_x + 150, _y - 70);
        crc2.lineTo(_x + 150, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawSeestar(_x: number, _y: number, spikes: number, outerRadius: number, innerRadius: number): void {

        var rot: number = Math.PI / 2 * 3;
        var x: number = this.x;
        var y: number = this.y;
        var step: number = Math.PI / spikes;

        crc2.beginPath();
        crc2.moveTo(_x, _y - outerRadius);
        
        for (var i: number = 0; i < spikes; i++) {
            x = _x + Math.cos(rot) * outerRadius;
            y = _y + Math.sin(rot) * outerRadius;
            crc2.lineTo(x, y);
            rot += step;

            x = _x + Math.cos(rot) * innerRadius;
            y = _y + Math.sin(rot) * innerRadius;
            crc2.lineTo(x, y);
            rot += step;
        }

        crc2.closePath();
        crc2.fillStyle = "#ff6600";
        crc2.fill();
    }

    

    function drawWater(_x: number, _y: number): void {
        crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        crc2.fillRect(_x, _y, 1000, 700);
        crc2.fill();
        crc2.stroke();
    }


}


