let slideIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.gallery-img');
    const slideWidth = slides[0].clientWidth + 25;

    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = slides.length - 3;
    } else if (slideIndex > slides.length - 3) {
        slideIndex = 0;
    }

    carousel.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function showMore() {
    alert('More details about this image.');
}
