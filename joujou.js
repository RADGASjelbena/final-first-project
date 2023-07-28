$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });




 const inputEmail = document.getElementById("Username") ;  const inputPassword = document.getElementById("password");  const loginBtn = document.getElementById("join-btn");  loginBtn.addEventListener("click" ,function(){      if (inputEmail.value === "ahmed@gmail.com" && inputPassword.value === "123456" ) {         alert ("WELCOME")     } else {         alert("please fill all the fields")     } } )




