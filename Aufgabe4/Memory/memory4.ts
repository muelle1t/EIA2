namespace Aufgabe4 {

    window.addEventListener("load", init);

    let contentCards: string[] = [];
    console.log(contentCards);

    let cardsList: string[] = [];
    let cardsTaken: string[] = [];

    let askPlayer: string;
    let numPlayer: number = 1;
    let playerScore: number = 0;

    let askCards: string;
    let numCards: number;


    //let removeCard: number;
    let amountCards: number;

    let numCardsOpen: number = 0;

    let numTakenCards: number = 0;


    function init(_event: Event): void {

        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        



    }


    //Funktion für die Infotafel
    function addPlayer(): void {
        if (numPlayer < 4) { //Anzahl Spieler muss kleiner 4 sein

            let player: HTMLElement = document.createElement("input");

            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen");
            player.setAttribute("name", "player");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);

            numPlayer++;

        }

    }

    function removePlayer(): void {
        document.getElementById("player").remove();
        numPlayer--;
    }

    function createStepper(): void { }

    function start(): void {

        let input: any = document.getElementById("player");

        // Spieler Anzeige generieren
        for (let i: number = 0; i < numPlayer; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("info").appendChild(playerDiv);
            playerDiv.innerHTML = input[0].value + ": " + playerScore + " Punkte";
        }
    }

    //Funktion für Karten
    function createCards(): void {
        let div: HTMLElement = document.createElement("div");
        let card: any = document.getElementById("brett");

        let n: number = Math.floor(Math.random() * contentCards.length); //zufälliger Inhalt aus dem Array
        let randomNumber: number = Math.random();

        console.log(contentCards[n]);

        //        if (randomNumber <= 0.5) { //        
        //            card.appendChild(div);
        div.setAttribute("class", "closed");
        //            cardsList.push(card);
        //        }
        //
        //        if (randomNumber > 0.5 && randomNumber <= 0.75) { //open
        //            let div: HTMLDivElement = document.createElement("div");
        //            card.appendChild(div);
        //            div.setAttribute("class", "open");
        div.innerText = contentCards[n];
        //            cardsList.push(card);
        //
        //        }
        //        else if (randomNumber > 0.75) { //taken
        //            let div: HTMLDivElement = document.createElement("div");
        //            card.appendChild(div);
        //            div.setAttribute("class", "taken");
        //            cardsList.push(card);
        //
        //        }
        div.addEventListener("click", openCard);

        card.appendChild(div);

        contentCards.splice(n, 1);

    }
    //Funktion für die Anzahl der KArten

    function totalNumCards(): void {

        amountCards = numCards * 2;
        console.log(amountCards);


        for (let i: number = 0; i < amountCards; i++) {

            createCards();

        }

    }

    //Funktion Karte öffnen
    function openCard(_event: Event): void {

        let clicked: HTMLElement = <HTMLElement>_event.target;

        if (clicked.className == "closed") { //öffnet beim click die Karte
            clicked.className = "open";
        }
        let cardContent: string;
        if (clicked.className == "open" && numCardsOpen <= 2) { //wenn Karte geöffnet ist und die Anzahl der geöffneten KArten kleiner oder gleich ist
            cardContent = clicked.textContent;                  //Karteninhalt entspricht dem Inhalt der geklickten Karte und wird in das neue Array gepusht
            cardsList.push(cardContent);
            console.log(cardsList);
            numCardsOpen++;
        }
        console.log("OpenCards:" + numCardsOpen)

        if (numCardsOpen == 2) {//wenn zwei Karten geöffnet sind werden sie verglichen und schliesen sich nach 1,5s
            setTimeout(compareCards, 1500);
        }

        if (numCardsOpen > 2) {// nur 2 Karten können geöffnet werden
            clicked.className = "closed";
        }


    }
    function compareCards(): void {

        let firstCard: any = document.getElementsByClassName("open")[0]; // die zwei offenen Karten werden geholt
        let secondCard: any = document.getElementsByClassName("open")[1];

        console.log("Erste Karte:" + firstCard);
        console.log("Zweite Karte:" + secondCard);

        if (firstCard.innerHTML == secondCard.innerHTML) {//wenn der Karteninhalt der Karten gleich ist wird das Attribut auf taken gesetzt

            firstCard.setAttribute("class", "taken");
            secondCard.setAttribute("class", "taken");
            numTakenCards++;

            console.log("CardsTaken:" + numTakenCards)

            numCardsOpen = 0;

        }

        else {
            firstCard.setAttribute("class", "closed");
            secondCard.setAttribute("class", "closed");
            numCardsOpen = 0;
        }
        endGame();
    }

    function endGame(): void {

        if (numTakenCards == numCards) {
            alert("Herzlichen Glückwunsch! Du hast das Spiel erfolgreich beendet.");
        }
    }



}


