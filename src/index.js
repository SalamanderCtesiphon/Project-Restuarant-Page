import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

let saveState = 'home';
render();

const content = document.getElementById('content');

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');

getClick();



function getClick () {
    tabOne.addEventListener('click', () => {
        return saveState = 'home';
    });
    tabTwo.addEventListener('click', () => {
        return saveState = 'menu';
    });
    tabThree.addEventListener('click', () => {
        return saveState = 'contact';
    });
}


function render () {
    if (saveState === 'home') {
        homePage();
    } else if (saveState === 'menu') {
        menuPage();
    } else if (saveState === 'contact') {
        contactPage();
    }
}



