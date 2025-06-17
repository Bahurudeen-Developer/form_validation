const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{

    
    if(!validateInputs()){
        e.preventDefault();

    }
})

function validateInputs(){

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success = false;

        seterror(username,'username is required')
    }

    else{
        setsuccess(username)
    }

    if(emailVal===''){
        success = false;

        seterror(email,'Email is  required')
    }
    else if(!validateEmail(emailVal)){
        success = false;

        seterror(email,'please enter a valid email')
    }
    else{

        setsuccess(email)
    }

    if(passwordVal===''){
        success = false;

        seterror(password,'Password is Requird')
    }
    else if(passwordVal.length<8){
        success = false;
        seterror(password,'password must be atleast 8 characters and one letter one number is required')

        }
    else{

        setsuccess(password)
    }

    if(cpasswordVal===''){
        success = false;
        seterror(cpassword,'confirm password is required')
    }

    else if (cpasswordVal !==passwordVal){
        success = false;
        seterror(cpassword,'password does not match')

    }

    else{

        setsuccess(cpassword)
    }

    return success;



}

function seterror(element,message){

    const inputgroup = element.parentElement;

    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText = message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')

}

function setsuccess(element){

    const inputgroup = element.parentElement;

    const errorelement = inputgroup.querySelector('.error')

    errorelement.innerText = "";
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
    
}

const validateEmail = (email) => {

    return String(email)
    .toLowerCase()
    .match(
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
};
 

