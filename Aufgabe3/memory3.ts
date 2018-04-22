namespace Aufgabe3 {

    window.addEventListener("load", init);

    let contentCards: string[] = ["Apfel", "Apfel", "Birne", "Birne", "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Ananas", "Ananas", "Erdbeere", "Erdbeere", "Wassermelone", "Wassermelone", "Papaya", "Papaya", "Pfirsich", "Pfirsich"];
    console.log(contentCards);

    let cardsList: string[] = [];
    let cardsTaken: string[] = [];

    let askPlayer: string;
    let numPlayer: number;

    let askCards: string;
    let numCards: number;

    let removeCard: number;

    let numCardsOpen: number = 0;

    let numTakenCards: number = 0;


    function init(_event: Event): void {


        askPlayer = prompt("Bitte die Anzahl der Spieler eingeben (min. 1, max. 4):");
        numPlayer = parseInt(askPlayer);

        console.log(numPlayer);

        askCards = prompt("Bitte die Anzahl der Kartenpaare eingeben (min. 5, max. 10):");
        numCards = parseInt(askCards);

        console.log(numCards);

        totalNumCards();

        createInfo(numPlayer);





        console.log(_event);


    }


    //Funktion für die Infotafel
    function createInfo(_numPlayers: number): void {
        let info: HTMLElement = document.getElementById("info");
        for (let i: number = 1; i < _numPlayers + 1; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerText = "Spieler" + " " + i + ":" + " " + " 0 Punkte";

            info.appendChild(p);
            console.log(info.textContent);
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


        for (let i: number = 0; i < numCards; i++) {

            createCards();
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

        if (numCardsOpen == 2) {//wenn zwei Karten geöffnet sind werden sie verglichen und schliesen sich nach 1500 ms
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


