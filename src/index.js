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
// const findBtn = document.querySelector("header__find");
const topBackBtn = document.querySelector(".header__back-top");
const brndBackBtn = document.querySelector(".header__back-brnd");
const logo = document.querySelector(".header__logo");
const find = document.querySelector(".header__find");
const test = document.querySelector(".header__test");
const checkBtn = document.querySelector(".header__check");
const findSec = document.querySelector(".header__dropdown--find");

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
    find.classList.remove('find-js')
    findSec.classList.remove('open');
    body.classList.remove('shadow');
    logo.classList.remove('new-style');
    checkBtn.classList.remove('new-style');
    header.classList.remove('new-style');
    menuShow.classList.remove('find-js');
    test.classList.remove('find-js');
}


if (dropdownJs && header) {
    dropdownJs.forEach(element => {
        if (document.body.clientWidth > 1024){
            element.addEventListener("mouseover", toggleTopServices);
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
        brndBackBtn.addEventListener("mouseleave", toggleTopServicesLeave);
    } else {
        topBackBtn.addEventListener("click", toggleTopServicesLeave);
        brndBackBtn.addEventListener("click", toggleTopServicesLeave);
    }
}

//BURGER__MENU
function toggleMenu(){
    menuButton.classList.toggle('open');      
    menuShow.classList.toggle('show');        
    html.classList.toggle('scroll-hidden');
    body.classList.toggle('scroll-hidden');
    header.classList.toggle('new-style');
    logo.classList.toggle('new-style');
    find.classList.toggle('new-style');
}

if(menuButton && menuShow)  {
  menuButton.addEventListener("click", toggleMenu);
}

//FIND BUTTON
find.addEventListener("click", testFunc);

function toggleFind(){
    findSec.classList.add('open');
    body.classList.add('shadow');
    test.classList.add('find-js');
}

function testFunc(){
    menuShow.classList.add('find-js');
    find.classList.add('find-js');
    document.getElementById('test').innerHTML = '<input autofocus class="header__input" placeholder="Search..." type="text">';
    header.classList.toggle('new-style');
    logo.classList.toggle('new-style');
    checkBtn.classList.toggle('new-style');
    toggleFind();
}

if(test){
    test.addEventListener('keyup', inputFunc);
}

function inputFunc(){
    console.log(document.getElementById("test").value);
    document.getElementById('find-box').innerHTML = '<ul><li>FIRST</li><li>SECOND</li><li>THIRD</li><li>FOURTH</li><li>FIFTH</li></ul> <br> <p>Just a test</p>';
}
