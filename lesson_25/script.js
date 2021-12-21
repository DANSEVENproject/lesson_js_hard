document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        const request = new XMLHttpRequest();
        request.open('GET', './cars.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('readystatechange', () => {
            const requestListener = () => {
                return new Promise((resolve, rejected) => {
                    (request.readyState === 4 && request.status === 200) ? (
                        resolve()
                    ) : (
                        rejected()
                    )
                });
            }
            requestListener()
                .then(() => {
                    const data = JSON.parse(request.responseText);
                    data.cars.forEach(item => {
                        if (item.brand === select.value) {
                            const { brand, model, price } = item;
                            output.innerHTML = `Тачка ${brand} ${model} <br>
                        Цена: ${price}$`;
                        }
                    });
                })
                .catch(() => {
                    output.innerHTML = 'Произошла ошибка';
                });
        });
    });

});