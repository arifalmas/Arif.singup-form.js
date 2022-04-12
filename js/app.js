const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const c_password = document.getElementById('c_password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const first_nameValue =first_name.value.trim();
    const last_nameValue = last_name.value.trim(); 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const c_passwordValue = c_password.value.trim();

    if(first_nameValue === ''){
        // show error
        // add error class
        setErrorFor(first_name, 'Frist Name is required');
    } else {
        // add success class
        setSuccessFor(first_name);
    }
    if (last_nameValue === ''){
        setErrorFor(last_name, 'Last Name is required');
    }else {
        setSuccessFor(last_name);
    }
    if (usernameValue === ''){
        setErrorFor(username, 'Username is required');
    }else {
        setSuccessFor(username);
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email is required');
    } else if(!isEmail(emailValue)){

        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === ''){
        setErrorFor(password, 'Password is required');
    }else{
        setSuccessFor(password);
    }
    if (c_passwordValue === ''){
        setErrorFor(c_password, ' Confirm password is required');
    }else if (passwordValue !== c_passwordValue){
        setErrorFor(c_password, ' Password does not match');
    }else {
        setSuccessFor(c_password);
    }
}

function setErrorFor(input, massage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = massage;

    formControl.className = 'form_control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}