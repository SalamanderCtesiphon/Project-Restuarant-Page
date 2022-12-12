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



class Page {
    constructor (state) {
        this.state = state;
    }
    getClickevent () {
        tabOne.addEventListener('click', () => {
            this.state = homePage();
            this.display();
        })
        tabTwo.addEventListener('click', () => {
            this.state = menuPage();
            this.display();
        })
        tabThree.addEventListener('click', () => {
            this.state = contactPage();
            this.display();
        })
    }
    display () {
        content.innerHTML = '';
        content.appendChild(this.state);
    }

}

















