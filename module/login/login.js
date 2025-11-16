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

const replacable = document.querySelector('.replacable-content');
const signUp = document.querySelector('.signup-tab');
const removableLogin = document.querySelector('.log-div');
const login = document.querySelector('.login-tab');

login.addEventListener('click', ()=>{
    location.reload();
})

signUp.addEventListener('click', (e)=>{
   
    
    const link = "../signup/signup.html";
    
    fetch(link).then((res)=>{

        return res.text();

    }).then((component)=>{
        removableLogin.remove();
        replacable.innerHTML = component;
        loadScripts(replacable);

    }).catch(()=>{
        replacable.innerHTML= '<h2>There are nothing in the page<h2>';
    });
});

function loadScripts(element){
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if(script.src){
            newScript.src = script.src;
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove()
        
        document.body.appendChild(newScript)
    }

}
