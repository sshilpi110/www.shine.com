
function ShineStore() {

    let data = JSON.parse(localStorage.getItem("ShineData")) || [];

    let email = document.getElementById("email").value;

    let name = document.getElementById("name").value;

    let mobn = document.getElementById("mob").value;

    let obj = {
        name: name,
        email: email,
        mob: mobn,
    }

    data.push(obj);

    localStorage.setItem("ShineData", JSON.stringify(data));

    alert("Sign Up successful", window.location="login.html");
}
