namespace Aufgabe4 { 


    export interface CardDeck {
        cardContent: string[];
        cardColor: string;
        cardFont: string;
        cardBatch: string;
    }

    export let deck: CardDeck;

    export interface CardPacket {
        [cardName: string]: CardDeck;
    };

    // Definieren der einzelnen Kartendecks
    export let decks: CardPacket = {};
    deck = {
        cardContent: ["Puddel", "Terrier", "Labrador", "Mops", "Dalmatiner", "Schäferhund", "Apenzeller", "Border Collie", "Shi Tzu", "Malteser", "Husky", "Dackel"],
        cardColor: "green",
        cardFont: "sans-serif",
        cardBatch: "12"
    };

    decks["dogs"] = deck;
    
    deck = {
        cardContent: ["Aschenputtel", "Dornröschen", "Schneewittchen", "Ariel", "Mulan", "Belle", "Pocahontas", "Rapunzel", "Jasmin", "Tiana"],
        cardColor: "pink",
        cardFont: "sans-serif",
        cardBatch: "10"
    };

    decks["disney"] = deck;
    
    deck = {
        cardContent: ["Apfel", "Apfel", "Birne", "Birne", "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Ananas", "Ananas", "Erdbeere", "Erdbeere", "Wassermelone", "Wassermelone", "Papaya", "Papaya", "Pfirsich", "Pfirsich"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardBatch: "10"
    };

    decks["fruits"] = deck;
  
    export interface Scoreboard {
        player: string;
        score: number;
    }

    export let scoreboard: Scoreboard[] = [];
    
}