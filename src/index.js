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

function toggleBrands(){
    brandSections.classList.toggle('open');
}

brand.addEventListener("mouseover", toggleBrands);