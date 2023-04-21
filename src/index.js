import './style.scss';
import lozad from 'lozad'
console.log('Webpack starter with SCSS and dev server');

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//? через focus зробити, щоб вони не пропадали/пропадали 

// TOP WRITING SERVICES (--top-services)
const dropdownJs = document.querySelectorAll('.header__item--dropdown-js');

const sections = document.querySelectorAll('.sections');
const header = document.querySelector(".header");
const body = document.querySelector("body");

function toggleTopServices(){
    let popupId = this.dataset.popup;
    let popupElement = document.querySelector(popupId);
    sections.forEach(element => {
        element.classList.remove('open');
        body.classList.remove('shadow');
    });
    if (popupElement) {
        popupElement.classList.add('open');
        body.classList.add('shadow');

    }
}

function toggleTopServicesLeave(){
    if (sections) {
        sections.forEach(element => {
            element.classList.remove('open');
            body.classList.remove('shadow');
        });
    }
}

if (dropdownJs && header) {
    dropdownJs.forEach(element => {
        element.addEventListener("mouseover", toggleTopServices);
    });
    header.addEventListener("mouseleave", toggleTopServicesLeave);
}


//BURGER
const menuButton = document.querySelector(".burger");
const menuShow = document.querySelector(".header__list");
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


