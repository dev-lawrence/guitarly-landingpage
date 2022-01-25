const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('li');
const menuBtn = document.querySelector('.menu-icon');
const icon = menuBtn.querySelector('i');

console.log(navLinks);

// add bg color to the header on scroll
const stickOnScroll = () => {
  const scroll = window.scrollY;

  // remove the header
  if (scroll > 0) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }

  // add the header
  //   if (scroll > 300) {
  //     header.classList.add('inView');
  //   } else {
  //     header.classList.remove('inView');
  //   }
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

// event listeners
window.addEventListener('scroll', stickOnScroll);
menuBtn.addEventListener('click', showMenu);
