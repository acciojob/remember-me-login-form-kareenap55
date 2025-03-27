//your JS code here. If required.
<body>
    <h1>Login Form</h1>
    <form id="loginForm">
        <input type="text" id="username" placeholder="Username" required><br><br>
        <input type="password" id="password" placeholder="Password" required><br><br>
        <input type="checkbox" id="checkbox">
        <label for="checkbox">Remember me.</label><br><br>
        <input type="submit" id="submit" value="Submit">
    </form>
    <br>
    <button id="existing" class="hidden">Login as existing user</button>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("checkbox");
            const loginForm = document.getElementById("loginForm");
            const existingUserBtn = document.getElementById("existing");

            // Check for stored credentials
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingUserBtn.classList.remove("hidden");
                existingUserBtn.addEventListener("click", function () {
                    alert("Logged in as " + savedUsername);
                });
            }

            loginForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent page refresh
                const username = usernameInput.value;
                const password = passwordInput.value;

                alert("Logged in as " + username);

                if (rememberMeCheckbox.checked) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }
            });
        });
    </script>
</body>
</html>
