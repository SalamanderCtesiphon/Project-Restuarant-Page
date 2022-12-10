import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';



const content = document.getElementById('content');

init();

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');
const tabOneValue = tabOne.getAttribute('value');
const tabTwoValue = tabTwo.getAttribute('value');
const tabThreeValue = tabThree.getAttribute('value');



function init () {
    homePage();
}


// create an object to manage the page content changing the content of the page when the user clicks on the tabs

const pageContent = {
    home: homePage,
    menu: menuPage,
    contact: contactPage
}

// create a function to change the content of the page when the user clicks on the tabs

function changePage (e) {
    const value = e.target.getAttribute('value');
    content.innerHTML = '';
    pageContent[value]();
}

// add event listeners to the tabs

tabOne.addEventListener('click', changePage);
tabTwo.addEventListener('click', changePage);
tabThree.addEventListener('click', changePage);










