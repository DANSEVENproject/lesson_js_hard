const buttonLi = document.querySelector('button');
let ulLi = document.querySelector('ul');

buttonLi.onclick = function() {
    let inputLi = document.querySelector('input').value;
    ulLi.insertAdjacentHTML('beforeend', '<li>' + inputLi + '</li>');
}