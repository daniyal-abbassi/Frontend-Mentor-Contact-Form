//get elements
const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const firstnameError = document.getElementById('firstname-error');
const lastnameError = document.getElementById('lastname-error');
const submitBtn = document.getElementById('submit-btn');

//delete error message when type in firstname
firstNameInput.addEventListener('change',()=>{
    if(firstNameInput.value) {
        firstnameError.style.display = 'none';
    }
})
lastNameInput.addEventListener('change',()=>{
    if(lastNameInput.value) {
        lastnameError.style.display = 'none';
    }
})
//add on cick function
submitBtn.addEventListener('click',()=>{
    if(!firstNameInput.value) {
        firstnameError.style.display = 'block';
    }
        if(!lastNameInput.value) {
        lastnameError.style.display = 'block';
    }
})
    //is input is empty, toggle error-message


