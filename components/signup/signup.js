import validator from 'https://cdn.jsdelivr.net/npm/validator@13.9.0/validator.min.js'

// TOGGLE BUTTONS
const loginBtn = document.getElementById("loginButton");
const signupBtn = document.getElementById("signUpButton");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signUpForm");

// Show login form
loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("activeBtn");
    loginBtn.classList.remove("inactiveBtn");

    signupBtn.classList.add("inactiveBtn");
    signupBtn.classList.remove("activeBtn");

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
});

// Show signup form
signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("activeBtn");
    signupBtn.classList.remove("inactiveBtn");

    loginBtn.classList.add("inactiveBtn");
    loginBtn.classList.remove("activeBtn");

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});

// LOGIN VALIDATION
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "") return alert("Email cannot be empty");
    if (!validator.isEmail(email)) return alert("Enter a valid email");

    if (password === "") return alert("Password cannot be empty");

    alert("Login successful!");
});

// SIGNUP VALIDATION
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
// 
    const fullName = document.getElementById("signupFullName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (fullName === "") return alert("Full name cannot be empty");

    if (email === "") return alert("Email cannot be empty");
    if (!validator.isEmail(email)) return alert("Enter a valid email");

    if (password === "") return alert("Password cannot be empty");

    alert("Account created!");
});