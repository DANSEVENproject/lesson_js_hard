'use strict';

const DomElement = function() {
    this.bg = '';
}
DomElement.prototype.createSquare = function() {
    const block = document.createElement('div');
    block.classList.add('square');
    this.bg = prompt('Напишите цвет, для заднего фона');
    block.style.cssText = `
        height: 100px;
        background: ${this.bg};
        position: absolute;
        width: 100px;`;
    document.body.insertAdjacentElement('afterbegin', block);
}
DomElement.prototype.eventListener = function() {
    document.addEventListener('keydown', function(e) {
        const square = document.querySelector('.square');
        e = e || window.event;
        if (e.keyCode == '38') {
            positionY -= 10;
            square.style.top = positionY + 'px';
        }
        if (e.keyCode == '37') {
            positionX -= 10;
            square.style.left = positionX + 'px';
        }
        if (e.keyCode == '39') {
            positionX += 10;
            square.style.left = positionX + 'px';
        }
        if (e.keyCode == '40') {
            positionY += 10;
            square.style.top = positionY + 'px';
        }
    });
}
const dom = new DomElement();
let positionY = 0;
let positionX = 0;
document.addEventListener('DOMContentLoaded', function() {
    dom.createSquare();
    dom.eventListener();
});