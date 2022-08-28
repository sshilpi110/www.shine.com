let details = JSON.parse(localStorage.getItem("ShineData"));

function Login(data) {

    let email = document.getElementById("email").value;

    let pass = document.getElementById("pass").value;
    let b = parseInt(pass);
    console.log(email,pass)

    for(let i = 0; i < details.length; i++){
        if((details[i].email == email) && (details[i].pass == pass)){
            alert("Login Successful", window.location = "home.html");
            break;
        }
        else{
            alert("Login Successful", window.location = "home.html");
            break;
        }
    }
}