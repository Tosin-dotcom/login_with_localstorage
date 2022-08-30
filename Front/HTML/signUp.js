
// local storage

firstName = document.querySelector("#name")
email = document.querySelector("#email")
password = document.querySelector("#pass1")
button = document.querySelector("#submit")

/**
 * It returns true if the user is not in database, and false if the user exists in database.
 * @param user - The user object that is being checked
 * @param userData - The data of all the users
 * @returns a boolean value.
 */

function validUser(user, userData) {
    for (data in userData) {
        if (userData[data]["email"] == user["email"] || userData[data]["name"] == user["name"]) {
            return false
        }
    }
    return true
}


button.addEventListener("click", () => {
    user = {
        "name":firstName.value, 
        "email": email.value,
        "password": password.value
    }

    // get users, if empty get empty array
    users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // add new user
    if (validUser(user, users)) {
        users.push(user);
        // update users
        localStorage.setItem("users", JSON.stringify(users));
        alert("User Created")
        window.location.href = "home.html"
    } else {
        alert("User exists")
    }
    
   
    
})








