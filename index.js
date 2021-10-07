var moment = require('moment');

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

//03 - Format
console.log("03 - Format \n")

function formatDate(str) {
    var Dateformat = new Date(str)
    console.log(Dateformat.toLocaleDateString())
    // var test = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
    // console.log(test)
}
formatDate("1985-09-18")
console.log("")

//04 - Age
console.log("04 - Age \n")

function calculateAge(str) {
    var birthday = new Date(str)
    var yearBirthday = birthday.getFullYear()
    var today = new Date()
    var todayYear = today.getFullYear()
    var age = todayYear - yearBirthday
    var monthBirthday = birthday.getMonth()
    var todayMonth = today.getMonth()
    if (monthBirthday > todayMonth) {
        console.log(age - 1)
    } else {
        console.log(age)
    }
}
calculateAge("1985-09-18")
console.log("")

//01 - Aujourd'hui - Moments
console.log("01 - Aujourd'hui - Moments")

function moments_whatDayIsToday() {
    var day = moment().format('dddd')
    console.log(day)
}
moments_whatDayIsToday()
console.log("")

//02 - Mois courant - Moments
console.log("02 - Mois courant - Moments")

function moments_whatMonthIsIt() {
    var month = moment().format('MMMM')
    console.log(month)
}
moments_whatMonthIsIt()
console.log("")

//03 - Format - Moments
console.log("03 - Format - Moments")

function formatDate(str) {

    var Dateformat = moment(str).format('DD/MM/YYYY')
    console.log(Dateformat)

}
formatDate("1985-09-18")
console.log("")

//04 - Age - Moments
console.log("04 - Age - Moments")

function calculateAge(str) {

    var yearBirthday = moment(str).format('YYYY')
    var todayYear = moment().format('YYYY')
    var age = todayYear - yearBirthday
    var monthBirthday = moment(str).format('M')
    var todayMonth = moment().format('M')
    if (monthBirthday > todayMonth) {
        console.log(age - 1)
    } else {
        console.log(age)
    }
}
calculateAge("1985-09-18")