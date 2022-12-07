// create a consten for the content id div on the main idex.html page

const content = document.getElementById('content');

// create a function to create the home page

function homePage() {
    createHeader();
    createMain();
    creatFooter();
}

function createHeader () {
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

function createMain () {
    const main = document.createElement('main');
    main.classList.add('main');
    const title = document.createElement('h1');
    title.textContent = 'Welcome to the best restaurant in town';
    const description = document.createElement('p');
    description.textContent = 'Local food, local people, local atmosphere';
    main.appendChild(title);
    main.appendChild(description);
    content.appendChild(main);
}

function creatFooter () {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Made by: Your Name';
    footer.appendChild(footerText);
    content.appendChild(footer);
}

export { homePage};

