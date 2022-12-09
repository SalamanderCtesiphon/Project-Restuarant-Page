import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';





const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');

getClick();

function getClick () {
    tabOne.addEventListener('click', () => {
        content.innerHTML = '';
        homePage();
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




