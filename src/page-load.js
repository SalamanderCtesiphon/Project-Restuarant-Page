// create a constant for the content id from the html located in the dist folder
const content = document.getElementById('content');

// create a function to create the elements for the page
const pageLoad = () => {
    // create a div for the header
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);
    // create a div for the main
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    content.appendChild(main);
    // create a div for the footer
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    content.appendChild(footer);
}

// export the function
export { pageLoad };


