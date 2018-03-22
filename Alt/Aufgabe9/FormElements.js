/*
Aufgabe: Aufgabe 9
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.06.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Der Code entstand in Zusammenarbeit mir Alisia Steiner und Ina Radzuweit*/
var Form;
(function (Form) {
    let sorten = ["Vanille",
        "Schoko",
        "Erdbeer",
        "Zitrone",
        "Nuss",
        "Sahnekirsch"];
    let varianten = ["Waffel",
        "Becher"];
    let extras = ["Sahne",
        "Buntestreusel",
        "Schokostreusel",
        "Krokantstreusel",
        "Schokosoße",
        "Erdbeersoße"];
    let lieferOptionen = ["Express",
        "Premium",
        "Standard"];
    let kontakt = ["Name",
        "Nachname",
        "Straße + Hausnr.",
        "PLZ + Ort",
        "Telefonnummer",
        "E-mail"];
    let inputSorten = [];
    let inputVarianten = [];
    let inputExtras = [];
    let inputLieferOptionen = [];
    let inputKontakt = [];
    let fieldSetBestellung = document.getElementById("Bestellung");
    let fieldSetVarianten = document.getElementById("Varianten");
    let fieldSetSorten = document.getElementById("Sorten");
    let fieldSetExtras = document.getElementById("Extras");
    let fieldSetÜbersicht = document.getElementById("Uebersicht");
    let kontaktdaten = document.getElementById("Kontakt");
    let lieferoptionen = document.getElementById("lieferoptionen");
    let sendeButton = document.getElementById("BestellButton");
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();
        sendeButton.addEventListener("click", bestellungPrüfen);
        fieldSetSorten.addEventListener("change", change);
        fieldSetVarianten.addEventListener("change", change);
        fieldSetExtras.addEventListener("change", change);
        lieferoptionen.addEventListener("change", change);
    }
    function createFieldSetBestellung() {
        let fieldSetBestellung = document.getElementById("Bestellung");
        let fieldSetVarianten = document.getElementById("Varianten");
        let fieldSetSorten = document.getElementById("Sorten");
        let fieldSetExtras = document.getElementById("Extras");
        /* Schleife für Sorten */
        for (let i = 0; i < sorten.length; i++) {
            let eissortenP = document.createElement("p");
            eissortenP.textContent = sorten[i];
            let eissortenInput = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorten[i];
            eissortenInput.className = "styleName";
            eissortenInput.max = "5";
            eissortenInput.min = "0";
            eissortenInput.value = "0";
            fieldSetSorten.appendChild(eissortenP);
            fieldSetSorten.appendChild(eissortenInput);
            inputSorten.push(eissortenInput);
            console.log(inputSorten);
        }
        /*Schleife für Varianten*/
        for (let i = 0; i < varianten.length; i++) {
            let buttonLabel = document.createElement("label");
            let variantenP = document.createElement("p");
            variantenP.textContent = varianten[i];
            let variantenInput = document.createElement("input");
            variantenInput.type = "radio";
            variantenInput.id = varianten[i];
            variantenInput.value = "0";
            buttonLabel.appendChild(variantenP);
            buttonLabel.appendChild(variantenInput);
            fieldSetVarianten.appendChild(buttonLabel);
            console.log(varianten);
        }
        /* Schleife für Extras */
        for (let i = 0; i < extras.length; i++) {
            let wrapperDiv = document.createElement("div");
            let extrasP = document.createElement("p");
            extrasP.textContent = extras[i];
            let extrasInput = document.createElement("input");
            extrasInput.type = "radio";
            extrasInput.id = extras[i];
            extrasInput.className = "styleName";
            wrapperDiv.appendChild(extrasP);
            wrapperDiv.appendChild(extrasInput);
            fieldSetExtras.appendChild(wrapperDiv);
            console.log(extras);
        }
    }
    function createFieldSetÜbersicht() {
        let fieldSetKontakt = document.getElementById("Kontakt");
        let fieldSetLieferOptionen = document.getElementById("Lieferoptionen");
        /*Schleife für Kontaktdaten*/
        for (let i = 0; i < kontakt.length; i++) {
            let wrapperDiv = document.createElement("div");
            let kontaktDatenP = document.createElement("p");
            kontaktDatenP.textContent = kontakt[i];
            let kontaktDatenInput = document.createElement("input");
            kontaktDatenInput.type = "text";
            kontaktDatenInput.id = kontakt[i];
            kontaktDatenInput.placeholder = "hier eintippen";
            wrapperDiv.appendChild(kontaktDatenP);
            wrapperDiv.appendChild(kontaktDatenInput);
            fieldSetKontakt.appendChild(wrapperDiv);
            console.log(varianten);
        }
        /* Schleife für Lieferoptionen */
        for (let i = 0; i < lieferOptionen.length; i++) {
            let wrapperDiv = document.createElement("div");
            let lieferOptionenP = document.createElement("p");
            lieferOptionenP.textContent = lieferOptionen[i];
            let lieferOptionenInput = document.createElement("input");
            lieferOptionenInput.type = "radio";
            lieferOptionenInput.id = extras[i];
            lieferOptionenInput.className = "styleName";
            lieferOptionenInput.value = "0";
            wrapperDiv.appendChild(lieferOptionenP);
            wrapperDiv.appendChild(lieferOptionenInput);
            fieldSetLieferOptionen.appendChild(wrapperDiv);
            console.log(extras);
        }
    }
    /* Change Funktion */
    function change() {
        let bestellübersichtP = document.getElementById("BestellübersichtP");
        bestellübersichtP.innerText = "";
        for (let i = 0; i < inputSorten.length; i++) {
            if (inputSorten[i].checked) {
                bestellübersichtP.innerText += sorten[i] + " " + "\n";
            }
        }
        for (let i = 0; i < inputVarianten.length; i++) {
            if (parseInt(inputVarianten[i].value) > 0) {
                bestellübersichtP.innerText += varianten[i] + " " + ": " + (parseInt(inputVarianten[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < inputExtras.length; i++) {
            if (parseInt(inputExtras[i].value) > 0) {
                bestellübersichtP.innerText += extras[i] + " " + "\n";
            }
        }
        zeigeSumme();
        console.log("Veränderung erkannt und bearbeitet");
    }
    /*Gesamtsumme anzeigen */
    function zeigeSumme() {
        let summeP = document.getElementById("Summe");
        let summe = 0;
        for (let i = 0; i < inputSorten.length; i++) {
            summe += (parseInt(inputSorten[i].value) * 0.5);
        }
        for (let i = 0; i < inputVarianten.length; i++) {
            summe += (parseInt(inputVarianten[i].value) * 1);
        }
        for (let i = 0; i < inputExtras.length; i++) {
            summe += (parseInt(inputExtras[i].value) * 0.5);
        }
        if (inputLieferOptionen[1].checked) {
            summe += 2;
        }
        summeP.innerText = summe.toString() + "€";
        console.log(summe);
    }
    /* Prüfung der Input-Werte: Überprüfung von Postleitzahl, Telefonnummer, Name + sind Art, Versandart, Kugelgröße ausgewählt? */
    function bestellungPrüfen() {
        let name = document.getElementById("Name");
        let vorname = document.getElementById("Vorname");
        let straße = document.getElementById("Straße");
        let hausnummer = document.getElementById("Hausnummer");
        let postleitzahl = document.getElementById("Postleitzahl");
        let ort = document.getElementById("Ort");
        let telefonnummer = document.getElementById("Telefonnummer");
        if (hausnummer.value.length > 3) {
            alert("Bitte überprüfen Sie die Eingabe Ihrer Hausnummer.");
        }
        if (postleitzahl.value.length != 5) {
            alert("Bitte überprüfen Sie die Eingabe Ihrer Postleitzahl.");
        }
        if (isNaN(Number(telefonnummer.value)) == true) {
            alert("Bitte überprüfen Sie die Eingabe Ihrer Telefonnummer.");
        }
        else {
            alert("Danke für Ihre Bestellung!");
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=FormElements.js.map