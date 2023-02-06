const headerItem = document.querySelector('.header__item');
const headerSubList = document.querySelector('.header__sub-list');
const headerSubItem = headerSubList.querySelectorAll('.header__sub-item');

headerItem.addEventListener('click', show);
headerSubItem.forEach(item => item.addEventListener('click', (event) => {
  event.preventDefault();
  show();
}))


function show() {
  if (headerSubList.style.height == '') {
    headerSubList.style.cssText = `height: ${headerSubList.scrollHeight}px; opacity: 1 ;`;
  } else {
    headerSubList.style.cssText = ''
  }
}


const headerAdvice = document.querySelector('.header__advice');
window.addEventListener('scroll', () => {
  if (window.scrollY > (window.innerHeight / 2)) {
    headerAdvice.classList.add('orientation')
  } else {
    headerAdvice.classList.remove('orientation')
  }

})

$(document).ready(function () {
  $('.slider-servise__list').slick({
    slidesToShow: 1,
    dots: true,
    easing: 'linear',
    speed: 600,
    infinite: false,
    prevArrow: `<button type="button" class="slick-prev">
        <svg class="slider-servise__icon-arrow">
            <use xlink:href="../images/sprite.svg#icon-prev"></use>
        </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-prev">
        <svg class="slider-servise__icon-arrow">
            <use xlink:href="../images/sprite.svg#icon-next"></use>
        </svg>
    </button>`,
    appendArrows: $('.slider-servise__navigation'),
    appendDots: $('.slider-servise__dots'),
  });
});