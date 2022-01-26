const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('li');
const menuBtn = document.querySelector('.menu-icon');
const icon = menuBtn.querySelector('i');
const testiCards = document.querySelectorAll('.testimonial__card');
const indicators = document.querySelector('.indicators');
const dots = Array.from(indicators.children);

let activeSlide = 1;

// add bg color to the header on scroll
const stickOnScroll = () => {
  const scroll = window.scrollY;

  // remove the header
  if (scroll > 0) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
};

// show nav when the menu bar is clicked
const showMenu = () => {
  nav.classList.toggle('showNav');
  menuBtn.classList.toggle('showNav');
  body.classList.toggle('fixed');
};

// reset links when any of them is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    showMenu();
  });
});

// manual navigation
const manualNav = (manual) => {
  testiCards[manual].classList.add('current');
  dots[manual].classList.add('current');
};

// move card on when each dot is clicked
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    //    get the current card
    const current = document.querySelector('.current');
    // remove the current class from the current card
    current.classList.remove('current');
    // add the current class to the next card
    // testiCards[index].classList.add('current');
    // activeSlide = index;
    manualNav(index);
    activeSlide = index;
  });
});

// event listeners
window.addEventListener('scroll', stickOnScroll);
menuBtn.addEventListener('click', showMenu);
