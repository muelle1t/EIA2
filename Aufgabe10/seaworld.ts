/*
Aufgabe: Aufgabe 10
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 24.06.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe10 {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    
    let n: number = 8;
    let m: number = 6;
    
    let imagedata: ImageData;
    
    let bigFish: BigFish[] = [];
    let smallFish: SmallFish[] = [];
    let bigBubbles: BigBubble[] = [];
    let smallBubbles: SmallBubble[] = [];
 
    
    function init(_event: Event): void {
         
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();

        drawRock(700, 650);

        drawSandcastle(400, 650);

        drawSeestar(450, 660, 5, 30, 10);
        drawSeestar(550, 670, 5, 30, 10);
        drawSeestar(750, 650, 5, 30, 10);

        drawSeeweed(60, 650);
        drawSeeweed(80, 650);
        drawSeeweed(100, 650);
        drawSeeweed(120, 650);
        drawSeeweed(160, 650);
        drawSeeweed(200, 650);
        drawSeeweed(250, 650);
        drawSeeweed(90, 680);
        drawSeeweed(140, 700);
        drawSeeweed(180, 670);
        drawSeeweed(280, 680);
        drawSeeweed(300, 650);
        drawSeeweed(340, 670);
        drawSeeweed(40, 670);
        drawSeeweed(240, 680);
        drawSeeweed(80, 680);

        // Hintergrundbild
        imagedata = crc2.getImageData(0, 0, 640, 360);
        
        for (let i: number = 0; i < m; i++) {
            let bb: BigBubble = new BigBubble();
            bb.x = (Math.random() * (550 - 450)) + 450;
            bb.y = (Math.random() * (600 - 100)) + 100;
            
            bigBubbles.push(bb);
        }
        
        for (let i: number = 0; i < m; i++) {
            let sb: SmallBubble = new SmallBubble();
            sb.x = (Math.random() * (550 - 450)) + 450;
            sb.y = (Math.random() * (600 - 100)) + 100;
            
            smallBubbles.push(sb);
        }

        for (let i: number = 0; i < n; i++) {
            let bf: BigFish = new BigFish();
            bf.x = (Math.random() * (900 - 50)) + 50;
            bf.y = (Math.random() * (600 - 50)) + 50;
            
            
            
            bigFish.push(bf);
        }
        
        for (let i: number = 0; i < n; i++) {
            let sf: SmallFish = new SmallFish();
            sf.x = (Math.random() * (1000 - 70)) + 70;
            sf.y = (Math.random() * (400 - 60)) + 60;
            
            
            
            smallFish.push(sf);
        }

        
        imagedata = crc2.getImageData(0, 0, 1000, 700);
        
        animate();
    }

    function animate(): void {
        

        crc2.putImageData(imagedata, 0, 0);
        
        moveBigBubbles();
        drawBigBubbles();
        
        moveSmallBubbles();
        drawSmallBubbles();
        
        moveBigFish();
        moveSmallFish();
        
        drawBigFish();
        drawSmallFish();
        
        
        
        window.setTimeout(animate, 20);
    }
    
    function moveBigBubbles(): void {
        for (let i: number = 0; i < bigBubbles.length; i++) {
            bigBubbles[i].move();
        }
    }

    function drawBigBubbles(): void {
        for (let i: number = 0; i < bigBubbles.length; i++)
            bigBubbles[i].drawBigBubble();
    }
    
    function moveSmallBubbles(): void {
        for (let i: number = 0; i < smallBubbles.length; i++) {
            smallBubbles[i].move();
        }
    }

    function drawSmallBubbles(): void {
        for (let i: number = 0; i < smallBubbles.length; i++)
            smallBubbles[i].drawSmallBubble();
    }

    function moveBigFish(): void {
        for (let i: number = 0; i < bigFish.length; i++) {
            bigFish[i].move();
        }
    }

    function drawBigFish(): void {
        for (let i: number = 0; i < bigFish.length; i++)
            bigFish[i].drawBigFish();
    }
    
    function moveSmallFish(): void {
        for (let i: number = 0; i < smallFish.length; i++) {
            smallFish[i].move();
        }
    }

    function drawSmallFish(): void {
        for (let i: number = 0; i < smallFish.length; i++)
            smallFish[i].drawSmallFish();
    }

    


    
    function drawBackground(): void {
        let myGradient: any = crc2.createLinearGradient(0, 0, 0, 250);
        myGradient.addColorStop(0, "#0058ea");
        myGradient.addColorStop(1, "#00307f");



        crc2.fillStyle = myGradient; //wasser im Hintergrund
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        crc2.fillStyle = "#ffea87"; //Sand
        crc2.fillRect(0, 630, crc2.canvas.width, crc2.canvas.height / 10);
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
        crc2.fillStyle = "#ffea87";
        crc2.strokeStyle = "#ffea87";
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
    function drawSeeweed(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#088A08";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x, _y - 20, _x - 50, _y - 220, _x - 15, _y - 50);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#088A08";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x - 10, _y - 20, _x - 10, _y - 200, _x, _y - 50);
        crc2.closePath();
        crc2.fill();
    }

    function drawSeestar(_x: number, _y: number, spikes: number, outerRadius: number, innerRadius: number): void {

        var rot: number = Math.PI / 2 * 3;
        var x: number = _x;
        var y: number = _y;
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
        crc2.fillStyle = "#e05504";
        crc2.fill();
    }
   
    
    
    
    


   
} //End namespace