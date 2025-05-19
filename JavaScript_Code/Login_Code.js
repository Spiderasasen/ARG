//adding the ability to just press enter
document.getElementById("Username").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        login();
    }
})

document.getElementById("Password").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        login();
    }
})

function login() {
    //getting the values from the input
    const usernameInput = document.getElementById("Username");
    const passwordInput = document.getElementById("Password");
    const username = usernameInput.value;
    const password = passwordInput.value;

    //making the correct info for the user tpo put in
    //making the correct info for the user tpo put in, for AMERICA
    const correctUsername = "John L. Ratcliffe";
    const correctPassword = "orien";

    //getting the error message element
    const errorMessageElement = document.getElementById("error-message");

    //Reset error message text
    errorMessageElement.textContent = "";

    //checking if both elements are correct
    if (username === correctUsername && password === correctPassword) {
        alert("Welcome " + username);
        errorMessageElement.textContent += "";

        //redirecting to the correct page
        if (username === "John L. Ratcliffe") {
            window.location.href = "Hidden_pages/USA_Hidden.html";
        }

        //just saying to loged in the consol
        console.log("You are logged in!");
    } else {
        alert("Incorrect username or password");
        errorMessageElement.textContent += "Incorrect username or password";
        console.log("Incorrect username or password");
        //only the consol log will know which is wrong
        if (!(username === correctUsername)) {
            console.log("Incorrect username");
        }
        if (!(password === correctPassword)) {
            console.log("Incorrect password");
        }
    }

    //clearing the input
    usernameInput.value = "";
    passwordInput.value = "";
}