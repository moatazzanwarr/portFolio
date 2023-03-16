

var links  = document.getElementById("links");

function open_menu(){
    links.style.display = "block";
}

function close_menu(){
    links.style.display = "none";
};

function check(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if(name.value.length < 10){
        name.style.borderColor = "red";
        return false;
    }
    else if(email.value.indexOf("@") == -1 || email.value.length < 10){
        name.style.borderColor = "#c850c0";
        email.style.borderColor = "red";
        return false;
    }
    else{
        email.style.borderColor = "#c850c0"
    }
}
