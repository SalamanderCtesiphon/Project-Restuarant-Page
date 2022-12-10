import _, { initial } from 'lodash';
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
const tabOneValue = tabOne.getAttribute('value');
const tabTwoValue = tabTwo.getAttribute('value');
const tabThreeValue = tabThree.getAttribute('value');














