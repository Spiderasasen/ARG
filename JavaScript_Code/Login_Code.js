function login(){
    //getting the values from the input
    const usernameInput = document.getElementById("Username");
    const passwordInput = document.getElementById("Password");
    const username = usernameInput.value;
    const password = passwordInput.value;

    //making the correct info for the user tpo put in
    const correctUsername = "John L. Ratcliffe";
    const correctPassword = "orien";

    //checking if both elements are correct
    if(username === correctUsername && password === correctPassword){
        alert("Welcome " + username);
        console.log("You are logged in!");
    }
    else{
        alert("Incorrect username or password");
        console.log("Incorrect username or password");
        //only the consol log will know which is wrong
        if(!(username === correctUsername)){
            console.log("Incorrect username");
        }
        if(!(password === correctPassword)){
            console.log("Incorrect password");
        }
    }

    //clearing the input
    usernameInput.value = "";
    passwordInput.value = "";
}