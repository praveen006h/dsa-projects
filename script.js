
function submit_(){
    console.log("welcome");
    let name = document.getElementById("name_textfield");
    let email = document.getElementById("email_textfield");
    if (name.value == "" | name.value == "Name"){
        alert("Enter a Valid Name")
        name.focus();
        console.log("name check");
        return false;
    } 

    else if (email.value == "" ){
        alert("Enter a Valid Email")
        email.focus();
        console.log("Email check");
        return false;
    }

    else if (email.value != ""){
        dotpos = email.value.lastIndexOf(".")
        atpos = email.value.indexOf("@")
        if (atpos < 1 || ( dotpos - atpos < 2 )){
            alert("Please enter correct email ID")
            email.focus() ;
            return false;
        }
    }
    
}

function kelambu(){
    
    document.body.innerHTML = "sadfadsfasdfa";
}