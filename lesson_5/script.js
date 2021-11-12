'use strict'

{
    let arr = [];
    arr.push('11111', '5000000', '30015002', '23234002', '40035120', '64312312', '534324243');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === '2' || arr[i][0] === '4') {
            console.log(arr[i]);
        }
    }
}

{
    nextFor:

        for (let i = 2; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextFor;
        }
        console.log(i);
        console.log('Делители этого числа: ' + '1 и' + ' ' + i);
    }
}