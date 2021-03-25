$(document).ready(function(){
  $(function() {
    $('.lazy').Lazy();
  });

  const categoriesBlock = document.querySelector('.categories');
  const anchors = document.querySelectorAll('a[href*="#"]');
  let dots = document.querySelectorAll('.slick-dots button');
  let dotsList = document.querySelectorAll('.slick-dots');
  let arrows = categoriesBlock.querySelectorAll('.slick-arrow');
  let arrowsReviews = document.querySelectorAll('.reviews .slick-arrow');
  let arrowsBtn = document.querySelectorAll('.slick-arrow');
  const videoSlider = document.querySelector('.order__slider');
  let videoButtons = document.querySelectorAll('.order__slide button');
  const videoSlides = document.querySelectorAll('.order__slide');
  let slideActive = videoSlider.querySelector('.slick-current');

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');
  const menuLinks = document.querySelectorAll('.main-nav a');

  if (navMain) {
    const closeMenu =  () => {
      if (navMain.classList.contains('main-nav--opened')) {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    };

    if (navToggle) {
      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          closeMenu();
        }
      });
    }

    if (menuLinks) {
      menuLinks.forEach((link) => {
        link.addEventListener('click', function() {
          closeMenu();
        });
      });
    }
  }

  dotsList.forEach((list) => {
    list.style.display = 'flex';
  });

  dots.forEach((dot) => {
    dot.textContent = '';
  });

  arrowsBtn.forEach((arrow) => {
    arrow.textContent = '';
    arrow.innerHTML = '<svg width="54"><use xlink:href="#icon-arrow-left"></use></svg>'
  });

  arrows.forEach((arrow) => {
    arrow.style.display = 'none';
  });

  arrowsReviews.forEach((arrow) => {
    arrow.style.display = 'none';
  });

  let play = (video) => {
    video.play();
  };

  let stop = (video) => {
    video.pause();
    video.currentTime = 0;
  };


  videoSlides.forEach((slide) => {
    let video = slide.querySelector('video');
    if (!slide.classList.contains('slick-current')) {
      slide.querySelector('.slide-overlay').style.display = 'block';
      stop(video);
    }

    videoButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        stop(video);
        if (slide.classList.contains('slick-current')) {
          slideActive.querySelector('.slide-overlay').style.display = 'block';
          slideActive = slide;
          slide.querySelector('.slide-overlay').style.display = 'none';
          play(video);
        }
      });
    });
  });

/*Scroll*/

if (anchors) {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      if (blockID) {

        if (blockID === 'categories') {
          document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
         });
       } else {
          document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        }

      }
    })
  }
}
});
