'use strict';

const yes = (text, regexp, func) => {
    text = text.replace(regexp, func);
    return text;
};

const hardTask = () => {
    console.log(document.body.textContent.match(/#[A-zА-я0-9]{6}/));
    const task1 = document.getElementById('task1'),
        task2 = document.getElementById('task2');

    let result = yes(task1.textContent, /функци(и|я)/ig, (val) => `<strong>${val}</strong>`);
    result += yes(task2.textContent, /[0-9]{2}:[0-9]{2}/ig, (val) => `<b>${val}</b>`);

    const search = prompt('Введите слово, которое хотите найти!');

    result = yes(result, new RegExp(search, 'ig'), `<mark>${search}</mark>`);
    result = yes(result, /[A-z]{4}:\/\/[A-z0-9]+\.[A-z]{2,3}[^\S]/ig, (val) => `<a href="${val}">${val.split('//')[1]}</a>`);
    result = yes(result, /[A-z]{4}:\/\/www\.[A-z]+\.[A-z]{2,3}\/([A-z-]*\/)*/ig, (val) => `<a href="${val}">${val.split('//')[1]}</a>`);
    document.body.innerHTML = result;
}
hardTask();