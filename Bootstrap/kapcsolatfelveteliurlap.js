function validate(e){
    let x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }

    x = document.forms["myForm"]["lastName"].value;
    if (x == "") {
        alert("Last name must be filled out");
        return false;
    }
}