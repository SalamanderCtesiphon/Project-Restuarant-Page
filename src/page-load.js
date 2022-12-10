// create a consten for the content id div on the main idex.html page

const content = document.getElementById('content');

// create a function to create the home page

function homePage() {
    createHeader();
    createMain();
    createFooter();
}

function createHeader () {
    const header = document.createElement('header');
    const tabOne = document.createElement('div');
    const tabTwo = document.createElement('div');
    const tabThree = document.createElement('div');
    header.classList.add('header');
    tabOne.classList.add('tabOne');
    tabTwo.classList.add('tabTwo');
    tabThree.classList.add('tabThree');
    tabOne.textContent = 'Home';
    tabTwo.textContent = 'Menu';
    tabThree.textContent = 'Contact';
    tabOne.setAttribute('value', 'home');
    tabTwo.setAttribute('value', 'menu');
    tabThree.setAttribute('value', 'contact');
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
    const image = document.createElement('img');
    image.src = '../images/spencer-davis-o_XkavUaGEw-unsplash.jpg';
    image.alt = 'Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Local food, local people, local atmosphere. lorem ipsum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    description.classList.add('description');
    main.appendChild(title);
    main.appendChild(image);
    main.appendChild(description);
    content.appendChild(main);
}

function createFooter () {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Made by: Your Name';
    footer.appendChild(footerText);
    content.appendChild(footer);
}

export { homePage};

