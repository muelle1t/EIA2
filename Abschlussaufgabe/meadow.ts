/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 01.07.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    export let tweety: CanvasRenderingContext2D;
    export let bugs: CanvasRenderingContext2D;
    export let heart: CanvasRenderingContext2D;
    export let bee: CanvasRenderingContext2D;



    let n: number = (Math.random() * 4) + 1;
    let m: number = 8;

    let imagedata: ImageData;

    let numLives: number = 4;



    let poison: Bee[] = [];
    export let food: Food[] = [];

    var moved: boolean = false;
    let gameEnd: boolean = false;
    
    alert("Hurry up! Tweety needs your help. Collect all Bugs but watch out for the Bees. They sting!")

    
    
    function init(_event: Event): void {

        //Background Canvas
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Tweety Canvas
        let tweetyCanvas: HTMLCanvasElement;
        tweetyCanvas = document.getElementsByTagName("canvas")[2];
        tweety = tweetyCanvas.getContext("2d");

        //Tweety Futter Canvas
        let foodCanvas: HTMLCanvasElement;
        foodCanvas = document.getElementsByTagName("canvas")[1];
        bugs = foodCanvas.getContext("2d");

        //Herzen Canvas
        let heartCanvas: HTMLCanvasElement;
        heartCanvas = document.getElementsByTagName("canvas")[3];
        heart = heartCanvas.getContext("2d");

        //Bienen Canvas
        let beeCanvas: HTMLCanvasElement;
        beeCanvas = document.getElementsByTagName("canvas")[4];
        bee = beeCanvas.getContext("2d");




        //Hintergund aus Background Klasse
        let bg: Background = new Background;
        bg.draw();



        //Bienen werden erstellt und ins Array gepusht
        for (let i: number = 0; i < m; i++) {
            let b: Bee = new Bee((Math.random() * (900 - 50)) + 50, (Math.random() * (500 - 10)) + 10);

            poison.push(b);
        }

        //Fliegen werden erstellt und ins Array gepusht
        for (let i: number = 0; i < n; i++) {
            let f: Fly = new Fly((Math.random() * (1000 - 70)) + 70, (Math.random() * (500 - 20)) + 20);

            food.push(f);
        }

        //Marienkäfer werden erstellt und ins Array gepusht
        for (let i: number = 0; i < n; i++) {
            let lb: Ladybug = new Ladybug((Math.random() * (1000 - 70)) + 70, (Math.random() * (500 - 20)) + 20);

            food.push(lb);
        }





        let t: Bird = new Bird(40, 150);

        function updateTweety(): void {//Funktion Tweety
            if (!gameEnd) {
                tweety.clearRect(0, 0, 1000, 500);
                t.drawTweety();
                setTimeout(updateTweety, 1);
            }
        }
        
        function getMousePos(canvas: any, evt: any) { //Funktion zum bestimmen der Maus Position
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        tweetyCanvas.addEventListener("mousemove", function(evt) { //Funktion hängt Tweety an den Cursor
            var mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateTweety();
            }
            moved = true;
            t.move(mousePos.x, mousePos.y);
            checkFlyEaten(mousePos.x, mousePos.y);
            checkBeeTouched(mousePos.x, mousePos.y);
            console.log(food.length);

            if (food.length == 0) {//wenn das food Array leer ist, ist das Spiel gewonnen
                GameWon();
            }

            if (numLives == 0) {//wenn mehr als 4 Bienen "gegessen" werden ist das Spiel verloren
                GameLost();
            }

        },
            true);

        function getTouchPos(canvas: any, evt: any) { //Funktion zum bestimmen der Maus Position
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        tweetyCanvas.addEventListener("mousemove", function(evt) { //Funktion hängt Tweety an den Cursor
            var mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateTweety();
            }
            moved = true;
            t.move(mousePos.x, mousePos.y);
            checkFlyEaten(mousePos.x, mousePos.y);
            checkBeeTouched(mousePos.x, mousePos.y);
            console.log(food.length);

            if (food.length == 0) {//wenn das food Array leer ist, ist das Spiel gewonnen
                GameWon();
            }

            if (numLives == 0) {//wenn mehr als 4 Bienen "gegessen" werden ist das Spiel verloren
                GameLost();
            }

        },
            true);
        
        //Touch Event fürs Handy
        tweetyCanvas.addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            const canvasTouchPosy = e.touches.item(0).clientY - document.querySelector('canvas').clientTop;
            
            if (!moved) {
                updateTweety();
            }
            
            t.move(canvasTouchPosX, canvasTouchPosy);
            checkFlyEaten(canvasTouchPosX, canvasTouchPosy);
            checkBeeTouched(canvasTouchPosX, canvasTouchPosy);
           

            if (food.length == 0) {//wenn das food Array leer ist, ist das Spiel gewonnen
                GameWon();
            }

            if (numLives == 0) {//wenn mehr als 4 Bienen "gegessen" werden ist das Spiel verloren
                GameLost();
            }
            console.log(canvasTouchPosX);
        });

        tweetyCanvas.addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            const canvasTouchPosy = e.touches.item(0).clientY - document.querySelector('canvas').clientTop;

            
            if (!moved) {
                updateTweety();
            }
            
            t.move(canvasTouchPosX, canvasTouchPosy);
            checkFlyEaten(canvasTouchPosX, canvasTouchPosy);
            checkBeeTouched(canvasTouchPosX, canvasTouchPosy);
           

            if (food.length == 0) {//wenn das food Array leer ist, ist das Spiel gewonnen
                GameWon();
            }

            if (numLives == 0) {//wenn mehr als 4 Bienen "gegessen" werden ist das Spiel verloren
                GameLost();
            }
            console.log(canvasTouchPosX);
        });

        

      
       

        imagedata = crc2.getImageData(0, 0, 1000, 500);

        animate();


    }



    function animate(): void {//Animation Bienen, Fliegen und Marienkäfer



        crc2.putImageData(imagedata, 0, 0);
        bee.clearRect(0, 0, 1000, 500);

        movePoison();
        drawPoison();

        bugs.clearRect(0, 0, 1000, 500);

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


    function checkFlyEaten(_x: number, _y: number): void {//Fliegen und Marienkäfer werden "gegessen" und aus dem Array entnommen
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

    function checkBeeTouched(_x: number, _y: number): void {//Bienen werden "gegessen" und aus dem Array entnommen
        for (let i: number = 0; i < poison.length; i++) {
            if (Math.abs(poison[i].x - _x) < 9 && Math.abs(poison[i].y - _y) < 9) {
                console.log("poison eaten");
                poison[i].redraw();
                poison.splice(i, 1);
                for (var j: number; j < poison.length; j++) {
                    let newBee: Bee = new Bee(poison[j].x, poison[j].y);
                    newBee.draw();
                }
                numLives--;
            }
        }

    }




    function GameWon(): void {
        gameEnd = true;
        tweety.clearRect(0, 0, 1000, 500);
        tweety.fillStyle = "#F4FA58";
        tweety.beginPath();
        tweety.rect(0, 0, 1000, 500);
        tweety.globalAlpha = 0.8;
        tweety.closePath();
        tweety.fill();


        tweety.fillStyle = "#000000";
        tweety.font = "30px Arial";
        tweety.textAlign = "center";
        tweety.fillText("You helped Tweety collect all the bugs.", 1000 / 2, 500 / 2 - 55);
        tweety.fillText("Now she can go back to her family.", 1000 / 2, 500 / 2 - 20);
        tweety.fillText(" ", 1000 / 2, 500 / 2 + 20);
        tweety.fillText("Thanks for your help!", 1000 / 2, 500 / 2 + 55);

        console.log("Spiel gewonnen");


    }

    function GameLost(): void {

        gameEnd = true;
        tweety.clearRect(0, 0, 1000, 500);
        tweety.fillStyle = "#000000";
        tweety.beginPath();
        tweety.rect(0, 0, 1000, 500);
        tweety.globalAlpha = 0.8;
        tweety.closePath();
        tweety.fill();


        tweety.fillStyle = "#FF0000";
        tweety.font = "30px Arial";
        tweety.textAlign = "center";
        tweety.fillText("You Lost!", 1000 / 2, 500 / 2 - 55);
        tweety.fillText("Tweety was stung by to many bees.", 1000 / 2, 500 / 2 - 20);
        tweety.fillText(" ", 1000 / 2, 500 / 2 + 20);
        tweety.fillText("Just reload the page and you can help Tweety, again.", 1000 / 2, 500 / 2 + 55);

        console.log("Spiel verloren");
    }


} //End namespace