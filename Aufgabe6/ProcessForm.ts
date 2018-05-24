namespace Aufgabe06_Interfaces {
    window.addEventListener("load", init);



    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", searchstudent);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;

        let studycourse: HTMLSelectElement = document.getElementsByTagName("select")[0];


        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            course: studycourse.value
        };

        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);

        console.log(studi);
    }

    function searchstudent(_event: Event): void {

        let student = document.getElementsByTagName("input")[6];
        let savedstudent = student.value;
        let studi = studiHomoAssoc[savedstudent];



        if (studi == undefined) {
            alert("Student nicht gefunden");

        }
        else {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = "Vorname:  " + studi.firstname + "\r\n" + "Name:  " + studi.name + "\r\n" + "Alter:  " + studi.age + "  Jahre" + "\r\n" + "Studiengang:  " + studi.course;
        }
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }

        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
    }
}