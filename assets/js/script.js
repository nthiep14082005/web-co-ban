let index = 0;

function showSlides() {
    const slides = document.querySelector('.img-slider');
    const totalSlides = document.querySelectorAll('.slider-l').length;

    index++;
    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
}

setInterval(showSlides, 8000); 









    