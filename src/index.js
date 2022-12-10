import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

function init() {
    homePage();
}

init();

let saveState = 'home';

const content = document.getElementById('content');

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');

getClick();

function getClick () {
    tabOne.addEventListener('click', () => {
        saveState = 'home';
        content.innerHTML = '';
        render();
        return;
    });
    tabTwo.addEventListener('click', () => {
        saveState = 'menu';
        content.innerHTML = '';
        render();
        return;
    });
    tabThree.addEventListener('click', () => {
        saveState = 'contact';
        content.innerHTML = '';
        render();
        return;
    });
}






function render () {
    if (saveState === 'home') {
        return homePage();
    } else if (saveState === 'menu') {
        return menuPage();
    } else if (saveState === 'contact') {
        return contactPage();
    }
}



