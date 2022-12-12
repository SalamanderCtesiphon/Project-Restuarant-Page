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




class Page {
    this.name = name;
    this.content = content;
    constructor (name, content) {
        this.name = name;
        this.content = content;
    }
    function display () {
        content.innerHTML = '';
        content.appendChild(this.content);
    }
}

const home = new Page('home', homePage());
const menu = new Page('menu', menuPage());
const contact = new Page('contact', contactPage());

const pages = [home, menu, contact];

function getClick () {
    tabOne.addEventListener('click', () => {
        home.display();
    }
    );
    tabTwo.addEventListener('click', () => {
        menu.display();
    }
    );
    tabThree.addEventListener('click', () => {
        contact.display();
    }
    );    
}

getClick();

const page = new Page('home', homePage());
page.display();














