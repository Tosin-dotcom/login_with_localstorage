


email = document.querySelector("#email")
password = document.querySelector("#password")
button = document.querySelector("#login")


button.addEventListener("click", () => { 
    users = JSON.parse(localStorage.getItem("users"))
   

    for (user in users) {
        if (users[user]["email"] === email.value && users[user]["password"] === password.value) {
            alert("User found")
            window.location.href = "home.html"
            
        }
    }
    alert("User not found")


});