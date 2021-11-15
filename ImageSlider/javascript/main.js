let totalSlides = document.querySelectorAll('.slider_item').length;
let currentSlide = 0;


document.querySelector('.slider_width').style.width = `calc(100vw * ${totalSlides})`;

function prevBtn() {
    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function nextBtn() {
    currentSlide++;

    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let itemWidth = document.querySelector('.slider_item').clientWidth;
    let newMargin = (currentSlide * itemWidth);
    document.querySelector('.slider_width').style.marginLeft = `-${newMargin}px`;
}