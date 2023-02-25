const logo = document.querySelector('.logo');

let xPosition = Math.floor(Math.random() * (innerWidth - 108));
let xVelocity = 1;
let yPosition = Math.floor(Math.random() * (innerHeight - 50));
let yVelocity = 1;

setInterval(() => {
    checkCollision();
    xPosition += xVelocity;
    yPosition += yVelocity;
    console.log(xPosition, yPosition);
    moveLogo();
}, 1000 / 60);

function moveLogo() {
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
}

function checkCollision() {
    if (xPosition > innerWidth - 109 || xPosition < 0) {
        xVelocity *= -1;
        changeColor();
    }
    if (yPosition > innerHeight - 51 || yPosition < 0) {
        yVelocity *= -1;
        changeColor();
    }
}

function changeColor() {
    let hexadecimalDigits = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexadecimalDigits[Math.floor(Math.random() * 16)];
    }
    logo.style.backgroundColor = color;
}