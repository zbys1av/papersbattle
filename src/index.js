import './style.scss';
console.log('Webpack starter with SCSS and dev server');

//? через focus зробити, щоб вони не пропадали/пропадали 

// TOP WRITING SERVICES (--top-services)
const topServices = document.querySelector('.header__item--dropdown-top');
const topSections = document.querySelector('.sections--top');

function toggleTopServices(){
    topSections.classList.toggle('open');
}

topServices.addEventListener("mouseover", toggleTopServices);

// BRANDS
const brand = document.querySelector('.header__item--dropdown-brand');
const brandSections = document.querySelector('.sections--brands');

const header = document.querySelector(".header");


function toggleBrands(){
    brandSections.classList.toggle('open');
    // header.classList.toggle('new-style');
}

function test(){
    header.classList.toggle('new-style');
}

brand.addEventListener("mouseover", toggleBrands);
brand.addEventListener("click", test);

//BURGER
const menuButton = document.querySelector(".burger");
const menuShow = document.querySelector(".header__list");
const body = document.querySelector("body");
const html = document.querySelector("html");
// const header = document.querySelector('.header');

//BURGER__MENU
function toggleMenu(){
    menuButton.classList.toggle('open');      //change to burger
    menuShow.classList.toggle('show');        //hide menu
    html.classList.toggle('scroll-hidden');
    body.classList.toggle('scroll-hidden');
    header.classList.toggle('new-style');
}

if(menuButton && menuShow)  {
  menuButton.addEventListener("click", toggleMenu);
}


