
// local storage

firstName = document.querySelector("#name")
email = document.querySelector("#email")
password = document.querySelector("#pass1")
button = document.querySelector("#submit")


button.addEventListener("click", () => {
    user = {
        "name":firstName.value, 
        "email": email.value,
        "password": password.value
    }

    // get users, if empty get empty array
    users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // add new user
    users.push(user);
   
    // update users
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "home.html"
})








