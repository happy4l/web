document.getElementById("signUpForm").addEventListener("submit", function(event){
    event.preventDefault();
    
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        localStorage.setItem("username");
        localStorage.setItem("password")
        
        window.location.href = "login.html";
        
    });