/*
Aufgabe: Aufgabe 9
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.06.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

Der Code entstand in Zusammenarbeit mir Alisia Steiner und Ina Radzuweit*/



namespace Form {
    let sorten: string[] = ["Vanille",
        "Schoko",
        "Erdbeer",
        "Zitrone",
        "Nuss",
        "Sahnekirsch"];



    let varianten: string[] = ["Waffel",
        "Becher"];





    let extras: string[] = ["Sahne",
        "Buntestreusel",
        "Schokostreusel",
        "Krokantstreusel",
        "Schokosoße",
        "Erdbeersoße"];



    let lieferOptionen: string[] = ["Express",
        "Premium",
        "Standard"];



    let kontakt: string[] = ["Name",
        "Nachname",
        "Straße + Hausnr.",
        "PLZ + Ort",
        "Telefonnummer",
        "E-mail"];


    let inputSorten: HTMLInputElement[] = [];
    let inputVarianten: HTMLInputElement[] = [];
    let inputExtras: HTMLInputElement[] = [];
    let inputLieferOptionen: HTMLInputElement[] = [];
    let inputKontakt: HTMLInputElement[] = [];

    let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
    let fieldSetVarianten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Varianten");
    let fieldSetSorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
    let fieldSetExtras: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Extras");
    let fieldSetÜbersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Uebersicht");
    let kontaktdaten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontakt");
    let lieferoptionen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("lieferoptionen");
    let sendeButton: HTMLElement = document.getElementById("BestellButton");


    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();

        sendeButton.addEventListener("click", bestellungPrüfen);
        fieldSetSorten.addEventListener("change", change);
        fieldSetVarianten.addEventListener("change", change);
        fieldSetExtras.addEventListener("change", change);
        lieferoptionen.addEventListener("change", change);
    }



    function createFieldSetBestellung(): void {
        let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
        let fieldSetVarianten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Varianten");
        let fieldSetSorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
        let fieldSetExtras: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Extras");



        /* Schleife für Sorten */
        for (let i: number = 0; i < sorten.length; i++) {
            

            let eissortenP: HTMLParagraphElement = document.createElement("p");
            eissortenP.textContent = sorten[i];

            let eissortenInput: HTMLInputElement = document.createElement("input");
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
        for (let i: number = 0; i < varianten.length; i++) {
            let buttonLabel: HTMLLabelElement = document.createElement("label");



            let variantenP: HTMLParagraphElement = document.createElement("p");
            variantenP.textContent = varianten[i];

            let variantenInput: HTMLInputElement = document.createElement("input");
            variantenInput.type = "radio";
            variantenInput.id = varianten[i];
            variantenInput.value = "0";


            buttonLabel.appendChild(variantenP);
            buttonLabel.appendChild(variantenInput);

            fieldSetVarianten.appendChild(buttonLabel);
            console.log(varianten);
        }

        /* Schleife für Extras */
        for (let i: number = 0; i < extras.length; i++) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let extrasP: HTMLParagraphElement = document.createElement("p");
            extrasP.textContent = extras[i];


            let extrasInput: HTMLInputElement = document.createElement("input");
            extrasInput.type = "radio";
            extrasInput.id = extras[i];
            extrasInput.className = "styleName";


            wrapperDiv.appendChild(extrasP);
            wrapperDiv.appendChild(extrasInput);

            fieldSetExtras.appendChild(wrapperDiv);
            console.log(extras);

        }
    }

    function createFieldSetÜbersicht(): void {

        let fieldSetKontakt: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontakt");
        let fieldSetLieferOptionen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Lieferoptionen");



        /*Schleife für Kontaktdaten*/
        for (let i: number = 0; i < kontakt.length; i++) {

            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let kontaktDatenP: HTMLParagraphElement = document.createElement("p");
            kontaktDatenP.textContent = kontakt[i];

            let kontaktDatenInput: HTMLInputElement = document.createElement("input");
            kontaktDatenInput.type = "text";
            kontaktDatenInput.id = kontakt[i];
            kontaktDatenInput.placeholder = "hier eintippen";




            wrapperDiv.appendChild(kontaktDatenP);
            wrapperDiv.appendChild(kontaktDatenInput);

            fieldSetKontakt.appendChild(wrapperDiv);
            console.log(varianten);
        }

        /* Schleife für Lieferoptionen */
        for (let i: number = 0; i < lieferOptionen.length; i++) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let lieferOptionenP: HTMLParagraphElement = document.createElement("p");
            lieferOptionenP.textContent = lieferOptionen[i];


            let lieferOptionenInput: HTMLInputElement = document.createElement("input");
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
    function change(): void {


        let bestellübersichtP: HTMLElement = document.getElementById("BestellübersichtP");
        bestellübersichtP.innerText = "";

        for (let i: number = 0; i < inputSorten.length; i++) {
            if (inputSorten[i].checked) {
                bestellübersichtP.innerText += sorten[i] + " " + "\n";
            }

        }

        for (let i: number = 0; i < inputVarianten.length; i++) {
            if (parseInt(inputVarianten[i].value) > 0) {
                bestellübersichtP.innerText += varianten[i] + " " + ": " + (parseInt(inputVarianten[i].value) * 1) + "\n";
            }
        }

        for (let i: number = 0; i < inputExtras.length; i++) {
            if (parseInt(inputExtras[i].value) > 0) {
                bestellübersichtP.innerText += extras[i] + " " + "\n";
            }
        }


        zeigeSumme();

        console.log("Veränderung erkannt und bearbeitet");
    }

    /*Gesamtsumme anzeigen */

    function zeigeSumme(): void {

        let summeP: HTMLElement = document.getElementById("Summe");

        let summe: number = 0;

        for (let i: number = 0; i < inputSorten.length; i++) {
            summe += (parseInt(inputSorten[i].value) * 0.5);
        }
        for (let i: number = 0; i < inputVarianten.length; i++) {
            summe += (parseInt(inputVarianten[i].value) * 1);
        }

        for (let i: number = 0; i < inputExtras.length; i++) {
            summe += (parseInt(inputExtras[i].value) * 0.5);
        }

        if (inputLieferOptionen[1].checked) {
            summe += 2;
        }

        summeP.innerText = summe.toString() + "€";
        console.log(summe);

    }


    /* Prüfung der Input-Werte: Überprüfung von Postleitzahl, Telefonnummer, Name + sind Art, Versandart, Kugelgröße ausgewählt? */

    function bestellungPrüfen(): void {

        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("Straße");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Hausnummer");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Postleitzahl");
        let ort: HTMLInputElement = <HTMLInputElement>document.getElementById("Ort");
        let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefonnummer");


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


}



