'use strict';

class First {
    hello() {
        console.log(`Привет я метод родителя!`);
    }
}
class Second extends First {
    hey() {
        this.hello();
        console.log(`А я наследуемый метод!`);
    }
}
const fisrt = new First();
const second = new Second();
second.hey();