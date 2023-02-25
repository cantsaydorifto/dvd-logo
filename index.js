const logo = document.querySelector('.logo');

const logoWidth = 216;
const logoHeight = 100;

let xPosition = Math.floor(Math.random() * (innerWidth - logoWidth));
let xVelocity = 2;
let yPosition = Math.floor(Math.random() * (innerHeight - logoHeight));
let yVelocity = 2;

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
    if (xPosition + (logoWidth + xVelocity) > innerWidth || xPosition < 0) {
        xVelocity *= -1;
        changeColor();
    }
    if (yPosition + (logoHeight + yVelocity) > innerHeight || yPosition < 0) {
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