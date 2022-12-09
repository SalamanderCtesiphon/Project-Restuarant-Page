import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

const content = document.getElementById('content');

homePage();

const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');

const clickTabOne = tabOne.addEventListener('click', () => {
    content.innerHTML = '';
    return homePage();
});

const clickTabTwo = tabTwo.addEventListener('click', () => {
    content.innerHTML = '';
    return menuPage();
}
);

const clickTabThree = tabThree.addEventListener('click', () => {
    content.innerHTML = '';
    return contactPage();
}
);


