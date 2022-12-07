// create a consten for the content id div on the main idex.html page

const content = document.getElementById('content');

// create a function to create the home page

function homePage() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = `
        <div class="home">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quia.</p>
        </div>
    `;
    content.appendChild(home);
}

export { homePage};

