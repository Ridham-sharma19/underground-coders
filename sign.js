
document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    const messageDiv = document.getElementById('message');
    
    registerButton.addEventListener('click', function(e) {
        e.preventDefault();

        const username = document.getElementById('username-register').value.trim();
        const password = document.getElementById('pass-register').value.trim();
        const email = document.getElementById('email-register').value.trim();

        if (username !== "" && password !== "" && email !== "") {
            
            messageDiv.innerText = "Your account has been created";
            messageDiv.style.color = "green";
        } else {
          
            messageDiv.innerText = "Please fill in all fields";
            messageDiv.style.color = "red";
        }
    });
});