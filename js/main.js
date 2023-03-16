var links = document.getElementById("links");

function open_menu() {
  links.style.display = "block";
}

function close_menu() {
  links.style.display = "none";
}

function check() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var area = document.getElementById("area");
  if (name.value.length < 10) {
    name.style.borderColor = "red";
    return false;
  } else if (email.value.indexOf("@") == -1 || email.value.length < 10) {
    name.style.borderColor = "#c850c0";
    email.style.borderColor = "red";
    return false;
  } else if (area.value.length < 20) {
    email.style.borderColor = "#c850c0";
    area.style.borderColor = "red";
    return false;
  } else {
    area.style.borderColor = "#c850c0";
    return true;
  }
}
