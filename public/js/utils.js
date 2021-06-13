import {DateTime, Duration} from "./luxon.js"; // 1

export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

let sec = DateTime.fromObject({hours: 0, minutes: 0, seconds: 1});

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);
    
    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]; // 2

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export function getSeconds(hours, minutes, seconds) {
    return Duration.fromObject({hours, minutes, seconds}).as('seconds');
}

export function getDateObj(hours, minutes, seconds) {
    let timerDate = DateTime.fromObject({hours, minutes, seconds}); 
    return timerDate.diff(sec,  ['hours', 'minutes', 'seconds']).toObject();
}