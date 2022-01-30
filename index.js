const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('li');
const menuBtn = document.querySelector('.menu-icon');
const icon = menuBtn.querySelector('i');
const testiCards = document.querySelectorAll('.testimonial__card');
const indicators = document.querySelector('.indicators');
const dots = Array.from(indicators.children);
const upArrow = document.querySelector('.up-arrow');
let activeCard = 1;

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

// show up arrow
const goToTop = () => {
  const scroll = window.scrollY;

  if (scroll > 2200) {
    upArrow.classList.add('showArrow');
  } else {
    upArrow.classList.remove('showArrow');
  }
};

// back to top
const backToTop = () => {
  window.scrollTo(0, 0);
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
  dots[manual].classList.add('active');
};

indicators.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  // get the current card and current dot
  const current = document.querySelector('.current');
  const currentDot = document.querySelector('.active');
  // remove the current class from the current card
  current.classList.remove('current');
  // remove the currentDot class from the current dot
  currentDot.classList.remove('active');
  // add the current class to the next card
  manualNav(targetIndex);
  activeCard = targetIndex;
});

// autoplay navigation
let repeat = () => {
  setInterval(() => {
    const current = document.querySelector('.current');
    const currentDot = document.querySelector('.active');
    // remove the current class from the current card
    current.classList.remove('current');
    // remove the currentDot class from the current dot
    currentDot.classList.remove('active');
    testiCards[activeCard].classList.add('current');
    dots[activeCard].classList.add('active');
    activeCard++;

    if (testiCards.length == activeCard) {
      activeCard = 0;
    }

    if (activeCard >= testiCards.length) {
      return;
    }
  }, 7000);
};

repeat();

// event listeners
window.addEventListener('scroll', stickOnScroll);
window.addEventListener('scroll', goToTop);
upArrow.addEventListener('click', backToTop);
menuBtn.addEventListener('click', showMenu);
