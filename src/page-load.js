// create a consten for the content id div on the main idex.html page

const content = document.getElementById('content');

// create a function to create the home page

function homePage() {
    const header = document.createElement('header');
    const tabOne = document.createElement('div');
    const tabTwo = document.createElement('div');
    const tabThree = document.createElement('div');
    header.classList.add('header');
    tabOne.classList.add('tab');
    tabTwo.classList.add('tab');
    tabThree.classList.add('tab');
    tabOne.textContent = 'Home';
    tabTwo.textContent = 'Menu';
    tabThree.textContent = 'Contact';
    header.appendChild(tabOne);
    header.appendChild(tabTwo);
    header.appendChild(tabThree);
    content.appendChild(header);
    

}

export { homePage};

