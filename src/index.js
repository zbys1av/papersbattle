import './style.scss';
import lozad from 'lozad'
console.log('Webpack starter with SCSS and dev server');

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe(); 

const dropdownJs = document.querySelectorAll('.header__item--dropdown-js');
const headerArrow = document.querySelectorAll('header__arrow');
const sections = document.querySelectorAll('.sections');
const header = document.querySelector(".header");
const body = document.querySelector("body");
const menuButton = document.querySelector(".burger");
const menuShow = document.querySelector(".header__list");
const html = document.querySelector("html");
const findBtn = document.querySelector("header__find");
const topBackBtn = document.querySelector(".header__back-btn");

// TOP WRITING SERVICES
function toggleTopServices(){
    let popupId = this.dataset.popup;
    let popupElement = document.querySelector(popupId);
    console.log(document.body.clientWidth + " if");
    sections.forEach(element => {
        element.classList.remove('open');
        body.classList.remove('shadow');
    });
    if (popupElement) {
        console.log("-_-");
        popupElement.classList.add('open');
        body.classList.add('shadow');
    }
}

function toggleTopServicesLeave(){
    if (sections) {
        sections.forEach(element => {
            console.log("leave");
            element.classList.remove('open');
            body.classList.remove('shadow');
        });
    }
}


if (dropdownJs && header) {
    dropdownJs.forEach(element => {
        if (document.body.clientWidth > 1024){
            element.addEventListener("mouseover", toggleTopServices);
            console.log("123123");
            // element.addEventListener("click", toggleTopServices);
        } else if (document.body.clientWidth < 1024){
            element.addEventListener("click", toggleTopServices);
            // element.addEventListener("mouseover", toggleTopServices);
        }
    });
    if (document.body.clientWidth > 1024){
        header.addEventListener("mouseleave", toggleTopServicesLeave);
    }
}

if (topBackBtn) {
    if (document.body.clientWidth > 1024){
        topBackBtn.addEventListener("mouseleave", toggleTopServicesLeave);
    } else {
        topBackBtn.addEventListener("click", toggleTopServicesLeave);
    }
}

//BURGER__MENU
function toggleMenu(){
    menuButton.classList.toggle('open');      
    menuShow.classList.toggle('show');        
    html.classList.toggle('scroll-hidden');
    body.classList.toggle('scroll-hidden');
    header.classList.toggle('new-style');
}

if(menuButton && menuShow)  {
  menuButton.addEventListener("click", toggleMenu);
}

//FIND BUTTON
findBtn.classList.toggle('find-js');
