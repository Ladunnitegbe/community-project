const signupEmail = document.querySelector('.signup-email');
const signupPassword = document.querySelector('.password');
const signupBottom = document.querySelector('.next-btn');
const name = document.querySelector('.text');
const signupForm =document.getElementById('signup-form');

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

let savedInfo;

const emailValidator = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*@[a-zA-Z]+\.[A-Za-z]{2,}$/g;
const passwordValidator = /[a-zA-Z0-9]{6,}/g;

signupBottom.addEventListener('click', (e) => {
    e.preventDefault();

    let emailTest = emailValidator.test(signupEmail.value);
    let passwordTest = passwordValidator.test(signupPassword.value);

    if (emailTest && passwordTest) {
        console.log('proceed');

        savedInfo = {
            Email: signupEmail.value,
            Password: signupPassword.value,
            Name: name.value

        }

        localStorage.setItem('userInfo', JSON.stringify(savedInfo));
        signupBottom.addEventListener('click',()=>{
            window.location.href = "/auth.html";
        })

    } else if (emailTest && !passwordTest) {
        console.log('enter valid email');
    } else if (!emailTest && passwordTest) {
        console.log('enter valid password');
    } else {
        console.log('enter valid password and email');

    }

    
});

