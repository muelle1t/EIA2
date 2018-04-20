var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", init);
    let contentCards = ["Apfel", "Apfel", "Birne", "Birne", "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Ananas", "Ananas", "Erdbeere", "Erdbeere", "Wassermelone", "Wassermelone", "Papaya", "Papaya", "Pfirsich", "Pfirsich"];
    console.log(contentCards);
    let cardsList = [];
    let askPlayer;
    let numPlayer;
    let askCards;
    let numCards;
    let amountCards;
    let removeCard;
    function init(_event) {
        askPlayer = prompt("Bitte die Anzahl der Spieler eingeben (min. 1, max. 4):");
        numPlayer = parseInt(askPlayer);
        console.log(numPlayer);
        askCards = prompt("Bitte die Anzahl der Kartenpaare eingeben (min. 5, max. 10):");
        numCards = parseInt(askCards);
        console.log(numCards);
        totalNumCards();
        createInfo(numPlayer);
    }
    //Funktion für die Infotafel
    function createInfo(_numPlayers) {
        let info = document.getElementById("info");
        for (let i = 1; i < _numPlayers + 1; i++) {
            let p = document.createElement("p");
            p.innerText = "Spieler" + " " + i + ":" + " " + " 0 Punkte";
            info.appendChild(p);
            console.log(info.textContent);
        }
    }
    //Funktion für Karten
    function createCards() {
        let card = document.getElementById("brett");
        let n = Math.floor(Math.random() * contentCards.length); //zufälliger Inhalt aus dem Array
        let randomNumber = Math.random();
        console.log(contentCards[6]);
        if (randomNumber <= 0.5) {
            let div = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "closed");
            cardsList.push(card);
            div.innerText = contentCards[n];
        }
        if (randomNumber > 0.5 && randomNumber <= 0.75) {
            let div = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "open");
            div.innerText = contentCards[n];
            cardsList.push(card);
        }
        else if (randomNumber > 0.75) {
            let div = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "taken");
            div.innerText = contentCards[n];
            cardsList.push(card);
        }
        contentCards.splice(0, 1);
    }
    //Funktion für die Anzahl der KArten
    function totalNumCards() {
        amountCards = numCards;
        console.log(amountCards);
        for (let i = 0; i < amountCards; i++) {
            createCards();
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=memory3.js.map