const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const expressions = {
	fname: /^[a-zA-ZÀ-ÿ\s+]{1,40}$/,
    lname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

const campsValidate = {
    fname: "The first name must be from 4 to 16 digits and cannot contain numbers and the field cannot be empty",
    lname: "The last name must be from 4 to 16 digits and cannot contain numbers and the field cannot be empty",
    password: "The password has to be 4 to 12 digits.",
    email: "The email can only contain letters, numbers, periods, hyphens and underscores.",
    phone: "The phone can only contain numbers and the maximum is 14 digits."
}

const validateForm = (e) => {
    switch (e.target.name){
        case "first-name":
            validate('error__fname', expressions.fname, e.target, campsValidate.fname)
        break;
        case "last-name":
            validate('error__lname',expressions.lname, e.target,campsValidate.lname )
        break;
        case "phone":
            validate('error__phone', expressions.phone, e.target, campsValidate.phone)
        break;
        case "email":
            validate('error__email',expressions.email, e.target,campsValidate.email)
        break;
        case "password":
            validate('error__password', expressions.password, e.target, campsValidate.password)
        break;
    }
}
const validate = (camp , expressions , input , message) => {
    const camps = document.getElementById(`${camp}`);
    if (expressions.test(input.value)) {
        camps.classList.add("correct");
        camps.textContent = "Correct"
    }else{
        camps.classList.remove("correct");
        camps.textContent = `${message}`.toUpperCase();
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (campsValidate.fname && campsValidate.fname && campsValidate.password && campsValidate.email && campsValidate.phone) {
        e.onreset;
    }

})