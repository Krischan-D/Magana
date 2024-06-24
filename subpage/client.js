document.addEventListener("DOMContentLoaded", function() {
    const signUpLink = document.querySelector(".sign-up a");
    const signUpBox = document.querySelector(".signup-box");

    // Initially hide the signup box
    signUpBox.style.display = "none";

    signUpLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle visibility of the signup box
        signUpBox.style.display = signUpBox.style.display === "block" ? "none" : "block";

        // Toggle visibility of the login box
        const loginBox = document.querySelector(".login-box");
        loginBox.style.display = loginBox.style.display === "none" ? "block" : "none";
    });
  });

const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const GetStartedBtn = document.querySelector(".started-button");
const loginBox = document.querySelector('.login-box');


//Extra code in script to hide login/signup on click
const loginButtonm = document.querySelector(".login-button");
const signupButtonm = document.querySelector(".signup-button");


// Toggle mobile menu on hamburger button click
// Modified event listener if else statement to hide the buttons on click.
hamburgerBtn.addEventListener("click", () => {
header.classList.toggle("show-mobile-menu");
if (header.classList.contains("show-mobile-menu")) {
    GetStartedBtn.classList.add("hide-buttons");
} else {
    GetStartedBtn.classList.remove("hide-buttons");
}
});

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

GetStartedBtn.addEventListener("click", () => {
loginBox.classList.toggle('show-login-box');
GetStartedBtn.classList.toggle('hide-buttons');
})



// Requisition Form
function toggle() {
    var blur = document.getElementById("services");
    blur.classList.toggle('active');

    var popup = document.getElementById("popup");
    popup.classList.toggle('active');
}

// Get a reference to the menu button
const menuButton = document.getElementById('menuButton');

// Add event listener to the menu button
menuButton.addEventListener('click', function() {
    // Toggle the visibility of the requisition form container
    toggle();
});


// Prevent default action when clicking on anchor elements with href starting with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

    
//Updates the placeholder based on their names.
const appointBtns = {
    monitoring: document.querySelector('#monitoring'),
    construction: document.querySelector('#construction'),
    repair: document.querySelector('#repair'),
    maintenance: document.querySelector('#maintenance'),
    support: document.querySelector('#support'),
    procurement: document.querySelector('#proc')
};

function updatePlaceholder(id) {
    const placeholderText = {
        monitoring: 'Nature of Monitoring Request',
        construction: 'Nature of Construction Request',
        repair: 'Nature of Repair Request',
        maintenance: 'Nature of Maintenance Request',
        support: 'Nature of Support Request',
        procurement: 'Nature of Procurement Supply Request'
    };
    document.querySelector('.change-txts').placeholder = placeholderText[id];
}

Object.keys(appointBtns).forEach(id => {
    appointBtns[id].addEventListener('click', function() {
        updatePlaceholder(id);
    });
});

/*
document.getElementsByClassName('change-txts')[0].placeholder = "What type of work do you need?";
*/


