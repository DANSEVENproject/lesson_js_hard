let num = Number(266219);
console.log(typeof num);

let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log(sum);

sum = sum ** 3;

while (Math.floor(sum / 100) > 0) {
    sum = Math.floor(sum / 10);
}
console.log(sum);