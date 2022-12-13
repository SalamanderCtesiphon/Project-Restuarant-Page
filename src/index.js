import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

const content = document.getElementById('content');

function init () {
    homePage();
}

init();

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');



function clearContent () {
    content.innerHTML = '';
}


function loop() {
    let i = 0;
    content.addEventListener('click', () => {
        return i++;
    });
    if (i < 1000) {
        tabOne.addEventListener('click', () => {
            clearContent();
            homePage();
            return;
        }
        );
        tabTwo.addEventListener('click', () => {
            clearContent();
            menuPage();
            return;
        }
        );
        tabThree.addEventListener('click', () => {
            clearContent();
            contactPage();
            return;
        }
        );

    }

}

loop();






















