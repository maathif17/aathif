function login(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('LoginJSON.json')
        .then(response => response.json())
        .then(data => {
            var users = data.users;
            var user = users.find(user => user.username === username && user.password === password);
            if (user) {
                if (user.role === "admin") {
                    alert("Admin login successful!");
                    window.location.href = "ContentEditor.html";
                } else if (user.role === "site_user") {
                    alert("User login successful!");
                    window.location.href = "ProjectHOME.html";
                }
            } else {
                alert("Invalid username or password");
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

document.getElementById("loginForm").addEventListener("submit", login);