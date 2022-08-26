 // fields of each div class (pages: login, registration, forgot)
 var login = document.querySelector(".login");
 var signUp = document.querySelector(".signup");
 var forgot = document.querySelector(".forgot");
 
 // class title page
 var namePage = document.querySelector(".name-page");
 
 //initialize homepage (Login) and hiden others pages(sign up, forgot)
 login.style.display = 'block';
 signUp.style.display = 'none';
 forgot.style.display = 'none';
 
 //login page title
 namePage.innerHTML = 'Login';
 
 function page(valor) {
         
     if (valor == 1) {
 
         login.style.display = 'block';
         signUp.style.display = 'none';
         forgot.style.display = 'none';
         namePage.innerHTML = 'Login';
 
     }else if (valor == 2) {
 
         login.style.display = 'none';
         signUp.style.display = 'block';
         forgot.style.display = 'none';
         namePage.innerHTML = 'Register';
 
     }else if (valor == 3) {
 
         login.style.display = 'none';
         signUp.style.display = 'none';
         forgot.style.display = 'block';
         namePage.innerHTML = 'Forgot Password';
 
     }else{
         login.style.display = 'block';
         signUp.style.display = 'none';
         forgot.style.display = 'none';
         namePage.innerHTML = 'Login';
     }
 
 }
 
 