const man = '     Хочу Пельменей и Большого Шлёпу';
let check = function(onlyString) {
    if (typeof onlyString != 'string') console.log('Вы передали не строку!');
    onlyString = onlyString.trim();
    if (onlyString.length >= 30) {
        onlyString = onlyString.substring(0, 30);
        onlyString += '...';
    }
    console.log(onlyString);
}
check(man);