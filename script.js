document.getElementById("loginForm").addEventListener("submit", function(event){
event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUserName = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    if(username === storedUserName && password === storedPassword)
    {
        window.location.href = "login.html";
    }
    else if(username === "admin" && password === "admin123")
    {
        window.location.href = "dashboard.html";
    }
    else 
    {
        alert("Invalid user name or password!")
    }
});