const upArrow = document.querySelector('.up-button');
const downArrow = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = document.querySelectorAll('.main-slide div').length;
const container = document.querySelector('.container');

let slideActive = 0;

sidebar.style.top = `-${(slidesCount -1) * 100}vh`;

upArrow.addEventListener('click', () => {
    changeSlide('up');
});

downArrow.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        slideActive++;
        if (slideActive === slidesCount) {
            slideActive = 0;
        }
    } else if (direction === 'down') {
        slideActive--;
        if (slideActive < 0) {
            slideActive = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${slideActive * height}px)`;
    sidebar.style.transform = `translateY(${slideActive * height}px)`;
}
