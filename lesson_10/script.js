const buttonLi = document.querySelector('button');
const ulLi = document.querySelector('ul');

buttonLi.onclick = function() {
    const inputLi = document.querySelector('input').value;
    ulLi.insertAdjacentHTML('beforeend', '<li>' + inputLi + '</li>');
}