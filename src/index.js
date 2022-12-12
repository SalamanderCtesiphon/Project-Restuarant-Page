import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';
const content = document.getElementById('content');

init();
function init () {
    return homePage();
}

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');

function getClick () {
    tabOne.addEventListener('click', () => {
        content.innerHTML = '';
        init();
    }
    );
    tabTwo.addEventListener('click', () => {
        content.innerHTML = '';
        menuPage();
    }
    );
    tabThree.addEventListener('click', () => {
        content.innerHTML = '';
        contactPage();
    }
    );    
}

getClick();














