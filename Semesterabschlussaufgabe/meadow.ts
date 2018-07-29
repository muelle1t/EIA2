/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 01.07.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe2 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    export let lost: CanvasRenderingContext2D;
    export let won: CanvasRenderingContext2D;
    

    let n: number = (Math.random() * 4) + 1;
    let m: number = 8;

    let imagedata: ImageData;

    let numHeart: number = 3;



    let poison: Bee[] = [];
    export let food: Food[] = [];

    var moved = false;
    var gameEnd = false;
    var lastBee: Bee;




    function init(_event: Event): void {

        
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        
       
        
        

        //Hintergund aus Background Klasse
        let bg: Background = new Background;
        bg.draw();

        // Hintergrundbild
        imagedata = crc2.getImageData(0, 0, 640, 360);
        console.log(imagedata);



        for (let i: number = 0; i < m; i++) {
            let b: Bee = new Bee((Math.random() * (900 - 50)) + 50, (Math.random() * (500 - 10)) + 10);

            poison.push(b);
        }

        for (let i: number = 0; i < n; i++) {
            let f: Fly = new Fly((Math.random() * (1000 - 70)) + 70, (Math.random() * (500 - 20)) + 20);

            food.push(f);
        }

        for (let i: number = 0; i < n; i++) {
            let lb: Ladybug = new Ladybug((Math.random() * (1000 - 70)) + 70, (Math.random() * (500 - 20)) + 20);

            food.push(lb);
        }




        imagedata = crc2.getImageData(0, 0, 1000, 500);

        animate();
        
        

        let t: Bird = new Bird(40, 150);
        function updateTweety(): void {
            if (!gameEnd) {
                t.drawTweety();
                setTimeout(updateTweety, 1);
            }
        }

        function getMousePos(canvas: any, evt: any) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        canvas.addEventListener("mousemove", function(evt) {
            var mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateTweety();
            }
            moved = true;
            t.move(mousePos.x, mousePos.y);
            checkFlyEaten(mousePos.x, mousePos.y);
            checkBeeTouched(mousePos.x, mousePos.y);
            console.log(food.length);


        },
            true);
    }



    function animate(): void {



        crc2.putImageData(imagedata, 0, 0);

        movePoison();
        drawPoison();

        moveFood();
        drawFood();

        window.setTimeout(animate, 20);
    }

    function drawPoison(): void {
        for (let i: number = 0; i < poison.length; i++) {
            poison[i].draw();
        }
    }

    function movePoison(): void {
        for (let i: number = 0; i < poison.length; i++) {
            poison[i].move();
        }
    }

    function drawFood(): void {
        for (let i: number = 0; i < food.length; i++) {
            food[i].draw();
        }
    }

    function moveFood(): void {
        for (let i: number = 0; i < food.length; i++) {
            food[i].move();
        }

    }
    

    function checkFlyEaten(_x: number, _y: number): void {
        for (let i: number = 0; i < food.length; i++) {
            if (Math.abs(food[i].x - _x) < 10 && Math.abs(food[i].y - _y) < 10) {
                console.log("fly eaten");
                food[i].redraw();
                food.splice(i, 1);

                for (var j: number = 0; j < food.length; j++) {
                    let newFood: Food = new Food(food[j].x, food[j].y);
                    newFood.draw();
                }
            }
        }
    }

    function checkBeeTouched(_x: number, _y: number): void {
        for (let i: number = 0; i < poison.length; i++) {
            if (Math.abs(poison[i].x - _x) < 9 && Math.abs(poison[i].y - _y) < 9) {
                console.log("poison eaten");
                poison[i].redraw();
                poison.splice(i, 1);
                for (var j: number; j < poison.length; j++) {
                    let newBee: Bee = new Bee(poison[j].x, poison[j].y);
                    newBee.draw();
                }
                numHeart--;
                drawHearts();
            }
        }

    }

    function drawHearts(): void {

        for (let i: number = 0; i < numHeart; i++) {

            let h1: Heart = new Heart(60, 50);
            let h2: Heart = new Heart(60, 100);
            let h3: Heart = new Heart(60, 200);

        }

    }



    function GameWon() {
        if (food.length == 0) {
            
            crc2.clearRect(0, 0, 1000, 500);
            let winningScreen: Won = new Won;
        }
        console.log("Spiel gewonnen");


    }

    function GameLost() {

        if (numHeart == 0) {
            crc2.clearRect(0, 0, 1000, 500);
            let loosingscreen: Lost = new Lost;
        }

        console.log("Spiel verloren");
    }


} //End namespace