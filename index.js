//01 - Aujourd'hui
console.log("01 - Aujourd'hui \n")

function whatDayIsToday() {
    var today = new Date("October 7, 2021 23:15:00");
    var jourSemaine = today.getDay()
    switch (jourSemaine) {
        case 0:
            console.log("Aujourd'hui, nous sommes dimanche.")
            break;
        case 1:
            console.log("Aujourd'hui, nous sommes lundi.")
            break;
        case 2:
            console.log("Aujourd'hui, nous sommes mardi.")
            break;
        case 3:
            console.log("Aujourd'hui, nous sommes mercredi.")
            break;
        case 4:
            console.log("Aujourd'hui, nous sommes jeudi.")
            break;
        case 5:
            console.log("Aujourd'hui, nous sommes vendredi.")
            break;
        case 6:
            console.log("Aujourd'hui, nous sommes samedi.")
            break;
    
        default:
            break;
    }
}
whatDayIsToday()
console.log("")

//02 - Mois courant
console.log("02 - Mois courant \n")

function whatMonthIsIt() {
    var today = new Date("October 7, 2021 23:15:00");
    var mois = today.getMonth()
    switch (mois) {
        case 0:
            console.log("Nous sommes au mois de janvier.")
            break;
        case 1:
            console.log("Nous sommes au mois de février.")
            break;
        case 2:
            console.log("Nous sommes au mois de mars.")
            break;
        case 3:
            console.log("Nous sommes au mois d'avril.")
            break;
        case 4:
            console.log("Nous sommes au mois de mai.")
            break;
        case 5:
            console.log("Nous sommes au mois de juin.")
            break;
        case 6:
            console.log("Nous sommes au mois de juillet.")
            break;
        case 7:
            console.log("Nous sommes au mois de août.")
            break;
        case 8:
            console.log("Nous sommes au mois de septembre.")
            break;
        case 9:
            console.log("Nous sommes au mois de octobre.")
            break;
        case 10:
            console.log("Nous sommes au mois de novembre.")
            break;
        case 11:
            console.log("Nous sommes au mois de decembre.")
            break;
    
        default:
            break;
    }
}
whatMonthIsIt()
console.log("")

