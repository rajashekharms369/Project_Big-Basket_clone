document.querySelector("form").addEventListener("submit",confirm);
 function confirm(event){
    event.preventDefault();
    let otp=document.querySelector("#otp").value;
    if(otp==="123456"){
        alert("You are succesfully order");
    }
    else{
        alert("Enter valid otp");
    }
 }