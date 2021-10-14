import {diffDates, formatError} from "./utils.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
 
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else 
    dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}
// 3
export const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;



