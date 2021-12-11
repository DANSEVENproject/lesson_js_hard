const bigFloppa = document.querySelector('.image-floppa'),
    buttonReset = document.querySelector('.button-reset');
let count = 0,
    flyInterval;

let flyAnimate = () => {
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    count < 1200 ? (
        bigFloppa.style['margin-left'] = `${count}px`
    ) : (
        cancelAnimationFrame(flyInterval)
    )
}

let animate = false;
document.addEventListener('click', () => {
    animate ? (
        flyInterval = requestAnimationFrame(flyAnimate),
        animate = false
    ) : (
        cancelAnimationFrame(flyInterval),
        animate = true
    )
});

buttonReset.addEventListener('click', () => {
    count = 0;
    bigFloppa.style['margin-left'] = `${count}px`;
    cancelAnimationFrame(flyInterval);
    animate = false;
})