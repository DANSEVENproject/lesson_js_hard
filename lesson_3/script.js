'use strict';

const englishWeek = 'Monday, Tuesday, Wednesday, Thusday, Friday, Saturday, Sunday';
const russianWeek = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
const arrayWeek = [
    ['Monday, Tuesday, Wednesday, Thusday, Friday, Saturday, Sunday'],
    ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье']
];
let personName = prompt('Напишите Ваше имя:');

personName === 'Артём' ? (
    console.log('директор')
) : (
    personName === 'Максим' ? (
        console.log('преподаватель')
    ) : (
        console.log('студент')
    )
)

{
    let lang = prompt('Какой язык вы хотите поставить?(ru/en)');
    if (lang === 'ru') console.log(russianWeek);
    else if (lang === 'en') console.log(englishWeek);
    else console.log('ЧЕЛ ТЫ...');
}

{
    let lang = prompt('Какой язык вы хотите поставить?(ru/en)');
    switch (lang) {
        case 'ru':
            console.log(russianWeek);
            break;
        case 'en':
            console.log(englishWeek);
            break;
        default:
            console.log('ЧЕЛ ТЫ...');
    }
}

{
    let lang = prompt('Какой язык вы хотите поставить?(ru/en)');
    lang === 'en' ? (
        console.log(arrayWeek[0][0])
    ) : (
        lang === 'ru' ? (
            console.log(arrayWeek[1][0])
        ) : (
            console.log('ЧЕЛ ТЫ...')
        )
    )
}