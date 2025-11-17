const email = document.querySelector('.email');
const password = document.querySelector('.password');
const bottom = document.querySelector('.next-btn');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

})

let storedInfo = JSON.parse(localStorage.getItem('userInfo'));

bottom.addEventListener('click', (e)=>{
    e.preventDefault;
    if(email.value === storedInfo.Email && password.value === storedInfo.Password){
        console.log('proceeeed');
    } else {
        console.log ('please inter right information');
    }
})

const replacable = document.querySelector('.replacable-content');
const signUp = document.querySelector('.signup-btn');
const removableLogin = document.querySelector('.log-div');
const login = document.querySelector('.login-btn');


signUp.addEventListener('click', (e)=>{
   
    
    const link = "/module/signup/signup.html";
    
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

