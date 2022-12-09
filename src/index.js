import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

const content = document.getElementById('content');

homePage();



const clickTabOne = document.addEventListener('click', () => {
    content.innerHTML = '';
    return homePage();
});

const clickTabTwo = document.addEventListener('click', () => {
    content.innerHTML = '';
    return menuPage();
}
);

const clickTabThree = document.addEventListener('click', () => {
    content.innerHTML = '';
    return contactPage();
}
);


