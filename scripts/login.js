let details = JSON.parse(localStorage.getItem("ShineData"));

function Login(data) {

    let email = document.getElementById("email").value;

    let pass = document.getElementById("pass").value;
    
    console.log(email,pass)

    for(let i = 0; i < details.length; i++){
        let Email = details[i].email;
        let Pass = details[i].pass;
        let count = 0;
        let val = 0;
        for(let j = 0; j < email.length; j++){
            if(email[i] == Email[i]){
                count++;
            }
            else{
                break;
            }
        }
        if(count == email.length && count == Email.length){
            for(let j = 0; j < pass.length; j++){
                if(pass[j] == Pass[j]){
                    val++;
                }
                else{
                    break;
                }
            }
            if(val == pass.length && val == Pass.length){
                alert("Login Successfull, Welcome Back", window.location = "home.html"); 
            }
        }
    }
}