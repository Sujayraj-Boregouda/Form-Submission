// Script Testing Input
console.log("Welcome to console");

// Setting variables
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validName = false;
let validEmail = false;
let validPhone = false;

$("#success").hide();
$("#error").hide();

// Name Validation
name.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;

    let str = name.value;

    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your Logic Matched");
        name.classList.remove("is-invalid");
        validName = true;
    } else {
        console.log("Your Logic Not Matched");
        name.classList.add("is-invalid");
        validName = false;
    }
})


// Email Validation
email.addEventListener("blur", () => {
    console.log("blurred");

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your Logic Matched");
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        console.log("Your Logic Not Matched");
        email.classList.add("is-invalid");
        validEmail = false;
    }
})


// Phone Number Validation
phone.addEventListener("blur", () => {
    console.log("blurred");

    let regex = /^([0-9]){10}$/;

    let str = phone.value;

    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your Logic Matched");
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        console.log("Your Logic Not Matched");
        phone.classList.add("is-invalid");
        validPhone = false;
    }
})


// Submit Button

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(validName, validEmail, validPhone);

    if (validName && validEmail && validPhone) {
        $("#success").show();        
        $("#error").hide();        
    } else {
        $("#error").show();        
        $("#success").hide();        
    }
});