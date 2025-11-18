console.log("global.js loaded");

// Select containers
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");

// Select buttons
const loginBtn = document.getElementById("show-login");
const signupBtn = document.getElementById("show-signup");

// Function to load HTML partials
function loadPartial(container) {
    const url = container.getAttribute("data-import");

    fetch(url)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
        })
        .catch(err => console.error("Error loading partial:", err));
}

// Load both pages on startup
loadPartial(loginContainer);
loadPartial(signupContainer);

// Toggle Functions
function showLogin() {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
}

function showSignup() {
    signupContainer.style.display = "block";
    loginContainer.style.display = "none";
}

// Attach toggle events
loginBtn.addEventListener("click", showLogin);
signupBtn.addEventListener("click", showSignup);

// By default, show login
showLogin();
