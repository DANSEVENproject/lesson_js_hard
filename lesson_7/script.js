'use strict';

const week = [
    ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'],
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];

const personName = prompt('Напишите Ваше имя:');

personName === 'Артём' ? (
    console.log('директор')
) : (
    personName === 'Максим' ? (
        console.log('преподаватель')
    ) : (
        console.log('студент')
    )
)
const now = new Date();

const lang = prompt('Какой язык вы хотите поставить?(ru/en)');
if (lang === 'en') {
    for (let i = 0; i < week.length - 1; i++) {
        for (let j = 0; j < 7; j++) {
            if (now.getDay() === j + 1) {
                document.writeln(week[i][j].bold());
                document.write('<br>');
            } else {
                document.writeln(week[i][j].italics());
                document.write('<br>');
            }
        }
    }
} else {
    if (lang === 'ru') {
        for (let i = 1; i < week.length; i++) {
            for (let j = 0; j < 7; j++) {
                if (now.getDay() === j + 1) {
                    document.writeln(week[i][j].bold());
                } else {
                    document.writeln(week[i][j].italics());
                    document.write('<br>');
                }
            }
        }
    } else {
        console.log('ЧЕЛ ТЫ...')
    }
}