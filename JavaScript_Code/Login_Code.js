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
    const enteredUsername = usernameInput.value.toLowerCase();
    const enteredPassword = passwordInput.value.toLowerCase(); //makes the password lowercase

    //making the correct info for the user to put in, and adding multiple users, wit there repected password and page
    const validUsers = [
        { username: "john l. ratcliffe", password: "orien", redirectPage: "Hidden_pages/USA_Hidden.html"},
    ];

    //getting the error message element
    const errorMessageElement = document.getElementById("error-message");

    //Reset error message text
    errorMessageElement.textContent = "";

    let isAuthenticated = false;
    let userDisplayName = "";
    let redirectToPage = "";

    // Loop through all valid users to check credentials
    for (let i = 0; i < validUsers.length; i++) {
        const user = validUsers[i];

        if (enteredUsername === user.username && enteredPassword === user.password) {
            isAuthenticated = true;
            userDisplayName = usernameInput.value; // Use the original input for the alert
            redirectToPage = user.redirectPage;
            break; // Found a match, no need to check other users
        }
    }


    //checking if both elements are correct
    if (isAuthenticated) {
        alert("Welcome " + enteredUsername);
        errorMessageElement.textContent += "";
        window.location.href = redirectToPage;
        //just saying to loged in the consol
        console.log("You are logged in!");
    } else {
        // alert("Incorrect username or password");
        errorMessageElement.textContent += "Incorrect username or password";
        console.log("Incorrect username or password");
    }

    //clearing the input
    usernameInput.value = "";
    passwordInput.value = "";
}