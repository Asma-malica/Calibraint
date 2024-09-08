var slideIndex = 1;
showDivs(slideIndex);

function move(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("gallery-img");
  var slidesToShow = 3;
  if (n > slides.length - slidesToShow + 1) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length - slidesToShow + 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slidesToShow; i++) {
    if (slides[slideIndex + i - 1]) {
      slides[slideIndex + i - 1].style.display = "block";
    }
  }
}
