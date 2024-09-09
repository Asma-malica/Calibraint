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
function searchEvent() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        // if (searchInput === 'innovatex') {
        //     window.location.href = 'innovatex.html';  
        // } else {
        //     alert('Event not found!');
        // }
        switch (searchInput) {
          case 'innovatex':
              window.location.href = 'innovatex.html';
              break;
          case 'cognizance':
              window.location.href = 'cognizance.html';
              break;
          case 'techfest':
              window.location.href = 'tech-fest.html';
              break;
          case 'elitez':
              window.location.href = 'elitez.html';
              break;
          case 'techspark':
              window.location.href = 'tech-spark.html';
              break;
          case 'codefest':
              window.location.href = 'code-fest.html';
              break;
          default:
              alert('Event not found!');
              break;
      }
      
    }

