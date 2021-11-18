const getWeekDay = function(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return days[date.getDay()];
}

const getMonth = function(date) {
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    return month[date.getMonth()];
}

const declOfNum = function(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const NumUTC = function(date) {
    if (date < 10) return '0' + date;
    else return date;
}

const timerProgram = function() {
    const now = new Date();

    document.querySelector('#time').innerHTML = ('Сегодня ' + getWeekDay(now) + ', ' + now.getDay() + ' ' + getMonth(now) + ' ' +
        now.getFullYear() + ' года' + ', ' + now.getHours() + ' ' + declOfNum(now.getHours(), ['час', 'часа', 'часов']) + ' ' +
        now.getMinutes() + ' ' + declOfNum(now.getMinutes(), ['минута', 'минуты', 'минут']) + ' ' + now.getSeconds() + ' ' + declOfNum(now.getSeconds(), ['секунда', 'секунды', 'секунд']));

    document.querySelector('#timeUTC').innerHTML = (NumUTC(now.getUTCDate()) + ':' + NumUTC(now.getUTCMonth()) + ':' + now.getUTCFullYear() + ' - ' +
        NumUTC(now.getUTCHours()) + ':' + NumUTC(now.getUTCMinutes()) + ':' + NumUTC(now.getUTCSeconds()));
}

let timerId = setInterval(() => timerProgram(), 1000);