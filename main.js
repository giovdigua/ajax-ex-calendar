$(document).ready( function () {

let dateListHtml = $('#date-list').html();
let dateListCompiled = Handlebars.compile(dateListHtml);
const APIBASE = 'https://flynn.boolean.careers/exercises/api/holidays?';
let initialDate = '2018-01-01';
let finalDate = '2018-12-31';
// let date = moment(initialDate).format('DD-MMM-YYYY');
// let monthDays = moment(initialDate).daysInMonth();


function printDate(date) {
    let daysInMonth = moment(date).daysInMonth();
    let actualMonth = moment(date).format('MMMM');
    let container = $('#dateList');
    $('#mese').text(actualMonth + ' ');

    for (var i = 1; i <= daysInMonth; i++) {
            let dateItem = i + ' ' + actualMonth ;
            let dateListItem = {
                date:dateItem
            }
            let dayItem = dateListCompiled(dateListItem)
            container.append(dayItem);
    }


}

printDate(initialDate);

});
