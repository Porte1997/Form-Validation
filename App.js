let userN = document.getElementById('userName');
let passW = document.getElementById('passWord');

function validateForm(){
    if(userN.value == ""){
        document.getElementById('userNameError').innerHTML = "Username is Empty!";
    }
    else if(userN.value.length < 5){
        document.getElementById('userNameError').innerHTML = "Username required min 5 char!";
    }
    else{
        document.getElementById('userNameError').innerHTML = "";
        return true;
    }

    if(passW.value == "" || passW.value.length < 7){
        document.getElementById('passWordError').innerHTML = "Password is not valid!";
    }
    else{
        document.getElementById('passWordError').innerHTML = "";
        return true;
    } 
    return false;
}  