let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  forms = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-btn"),
  failureIcon = classes("failure-btn");

  let engine = (id,index,msg) =>{
    if(id.value.trim()===""){
      errorMsg[index].innerHTML = msg;
      successIcon[index].style.opacity = "0";
      failureIcon[index].style.opacity = "1";
    }
    else{
      errorMsg[index].innerHTML = "";
      successIcon[index].style.opacity = "1";
      failureIcon[index].style.opacity = "0";

      
    }
  }
  
  forms.addEventListener("submit",(e)=>{
    e.preventDefault();
    engine(username,0,"Username can not be empty.");
    engine(email,1,"Email can not be empty.");
    engine(password,2,"Please enter the password.");
  })
  let validation = false;
  function myFunction(){
    if(successIcon[0].style.opacity == "1" &&
    successIcon[1].style.opacity == "1"&&
    successIcon[2].style.opacity == "1" ){
        window.location.href="welcome.html";
    }
  }


