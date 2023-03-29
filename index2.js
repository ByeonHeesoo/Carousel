function showSlides() {
  const slideContainer = document.querySelector('.container');
  const slides = slideContainer.querySelectorAll('.slide');
  let now = 0;

  function slideHandler(now) {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i] !== slides[now]) {
        slides[i].style.display = 'none';
      } else {
        slides[i].style.display = 'block';
      }
    }
  }

  slideHandler(now);

  document.querySelector('.right').addEventListener('click', function () {
    now = (now + 1) % slides.length;

    slideHandler(now);
  });

  document.querySelector('.left').addEventListener('click', function () {
    if (now === 0) {
      now = slides.length - 1;
    } else {
      now = now - 1
    }

    slideHandler(now);
  });

}

showSlides();