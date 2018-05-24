var Aufgabe06_Interfaces;
(function (Aufgabe06_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", searchstudent);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studycourse = document.getElementsByTagName("select")[0];
        let studi;
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
        Aufgabe06_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        Aufgabe06_Interfaces.studiSimpleArray.push(studi);
        console.log(studi);
    }
    function searchstudent(_event) {
        let student = document.getElementsByTagName("input")[6];
        let savedstudent = student.value;
        let studi = Aufgabe06_Interfaces.studiHomoAssoc[savedstudent];
        if (studi == undefined) {
            alert("Student nicht gefunden");
        }
        else {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = "Vorname:  " + studi.firstname + "\r\n" + "Name:  " + studi.name + "\r\n" + "Alter:  " + studi.age + "  Jahre" + "\r\n" + "Studiengang:  " + studi.course;
        }
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in Aufgabe06_Interfaces.studiHomoAssoc) {
            let studi = Aufgabe06_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(Aufgabe06_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(Aufgabe06_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
})(Aufgabe06_Interfaces || (Aufgabe06_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map