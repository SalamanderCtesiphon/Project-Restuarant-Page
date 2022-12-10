import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';



const content = document.getElementById('content');


createHeader();

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');
const tabOneValue = tabOne.getAttribute('value');
const tabTwoValue = tabTwo.getAttribute('value');
const tabThreeValue = tabThree.getAttribute('value');

function createHeader () {
    const header = document.createElement('header');
    const tabOne = document.createElement('div');
    const tabTwo = document.createElement('div');
    const tabThree = document.createElement('div');
    header.classList.add('header');
    tabOne.classList.add('tabOne');
    tabTwo.classList.add('tabTwo');
    tabThree.classList.add('tabThree');
    tabOne.textContent = 'Home';
    tabTwo.textContent = 'Menu';
    tabThree.textContent = 'Contact';
    tabOne.setAttribute('value', 'home');
    tabTwo.setAttribute('value', 'menu');
    tabThree.setAttribute('value', 'contact');
    header.appendChild(tabOne);
    header.appendChild(tabTwo);
    header.appendChild(tabThree);
    content.appendChild(header);
}


function init () {
    tabOne.addEventListener('click', () => {
        homePage();
    });
    tabTwo.addEventListener('click', () => {
        menuPage();
    });
    tabThree.addEventListener('click', () => {
        contactPage();
    });
}

init();













