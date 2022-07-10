const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const expressions = {
	fname: /^[ a-zA-ZÀ-ÿ\s]{1,40}$/,
    lname: /^[ a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

const validateForm = (e) => {
    switch (e.target.name){
        case "first-name":
            if (expressions.fname.test(e.target.value)) {
                document.getElementById('invalid').classList.remove('invalid-text');
            }else{
                document.getElementById('invalid').classList.add("invalid-text");
            }
        break;
        case "last-name":
            if (expressions.lname.test(e.target.value)) {
                
            }else{
                
            }
        break;
        case "phone":
            if (expressions.phone.test(e.target.value)) {
                
            }else{
                
            }
        break;
        case "email":
            if (expressions.email.test(e.target.value)) {
                
            }else{
                
            }
        break;
        case "password":
            if (expressions.password.test(e.target.value)) {
                
            }else{
                
            }
        break;
    }
}
const validate = () => {
    
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

})