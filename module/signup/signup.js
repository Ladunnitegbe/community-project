const email = document.querySelector('.email');
const password = document.querySelector('.password');
const bottom = document.querySelector('.next-btn');

const emailValidator = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*@[a-zA-Z]+\.[A-Za-z]{2,}$/g;
const passwordValidator = /[a-zA-Z0-9]{6,}/g; 

bottom.addEventListener('click', (e)=>{
    e.preventDefault();

    let emailTest = emailValidator.test(email.value);
    let passwordTest = passwordValidator.test(password.value);
    
   if (emailTest && passwordTest){
        console.log('proceed');
    }else if(emailTest && !passwordTest) {
        console.log('enter valid email');
    }else if(!emailTest && passwordTest){
        console.log('enter valid password');
    } else {
        console.log('enter valid password and email');
    }

});
