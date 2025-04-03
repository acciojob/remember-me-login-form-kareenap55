//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
     const loginForm = document.getElementById("loginForm");
     const usernameInput = document.getElementById("username");
     const passwordInput = document.getElementById("password");
     const rememberCheckbox = document.getElementById("checkbox");
     const existingButton = document.getElementById("existing");
 
     // Check if credentials exist in localStorage
     if (localStorage.getItem("username") && localStorage.getItem("password")) {
         existingButton.style.display = "block";
     }
 
     // Form submission logic
     loginForm.addEventListener("submit", function (event) {
         event.preventDefault();
 
         const username = usernameInput.value.trim();
         const password = passwordInput.value.trim();
 
         if (username === "" || password === "") {
             alert("Please enter username and password.");
             return;
         }
 
         alert(`Logged in as ${username}`);
 
         if (rememberCheckbox.checked) {
             localStorage.setItem("username", username);
             localStorage.setItem("password", password);
             existingButton.style.display = "block";
         } else {
             localStorage.removeItem("username");
             localStorage.removeItem("password");
             existingButton.style.display = "none";
         }
 
         // Clear input fields after login
         usernameInput.value = "";
         passwordInput.value = "";
         rememberCheckbox.checked = false;
     });
 
     // Login as existing user
     existingButton.addEventListener("click", function () {
         const savedUsername = localStorage.getItem("username");
         alert(`Logged in as ${savedUsername}`);
     });
 });