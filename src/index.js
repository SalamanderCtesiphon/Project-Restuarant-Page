import _ from 'lodash';
import { homePage } from './page-load';
import './style.css';
import {menuPage} from './menu';
import {contactPage} from './contact';

init();

const content = document.getElementById('content');
const tabOne = document.querySelector('.tabOne');
const tabTwo = document.querySelector('.tabTwo');
const tabThree = document.querySelector('.tabThree');
const tabOneValue = tabOne.getAttribute('value');
const tabTwoValue = tabTwo.getAttribute('value');
const tabThreeValue = tabThree.getAttribute('value');

function init() {
    homePage();
}

function getClickedTab(e) {
    const tab = e.target.getAttribute('value');
    return tab;
}






