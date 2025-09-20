// Фокус 1: Занавес
const curtain = document.getElementById('curtain');
const scene = document.getElementById('scene');

curtain.addEventListener('click', function() {
    this.classList.add('open');
    setTimeout(() => {
        scene.style.display = 'block';
    }, 1000);
});

// Фокус 2: Лампа и свет
const rope = document.getElementById('rope');
const light = document.getElementById('light');
const magicTrick = document.querySelector('.magic-trick');
const wizard = document.querySelector('.wizard');
let isLightOn = false;

rope.addEventListener('click', function() {
    isLightOn = !isLightOn;
    if (isLightOn) {
        light.classList.add('on');
        magicTrick.style.opacity = '1';
        wizard.style.opacity = '1';
    } else {
        light.classList.remove('on');
        magicTrick.style.opacity = '0';
        wizard.style.opacity = '0';
    }
});

// Фокус 3: Кролик и голубь
const hatContainer = document.getElementById('hat-container');
const rabbit = document.getElementById('rabbit');
const dove = document.getElementById('dove');
let isRabbitVisible = true;

hatContainer.addEventListener('click', function() {
    if (isRabbitVisible) {
        // Кролик уходит вверх, голубь появляется снизу
        rabbit.classList.add('hidden');
        setTimeout(() => {
            dove.classList.add('visible');
            isRabbitVisible = false;
        }, 500);
    } else {
        // Голубь уходит вниз, кролик появляется сверху
        dove.classList.remove('visible');
        setTimeout(() => {
            rabbit.classList.remove('hidden');
            isRabbitVisible = true;
        }, 500);
    }
});