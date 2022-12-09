import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

const content = document.getElementById('content');



const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');


class PageState {
    constructor() {
        this.page = homePage();
    }

    get currentPage() {
        return this.page;
    }

    set currentPage(page) {
        tabOne.addEventListener('click', () => {
            this.page = homePage();
            return homePage();
        }
        );
        tabTwo.addEventListener('click', () => {
            this.page = menuPage();
            return menuPage();
        }
        );
        tabThree.addEventListener('click', () => {
            this.page = contactPage();
            return contactPage();
        }
        );

        this.page = page;

    }

    
}

// Instantiate pageState
const page = new PageState();

