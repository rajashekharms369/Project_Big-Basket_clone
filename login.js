arrdata=JSON.parse(localStorage.getItem("signupdata"))||[];
console.log(arrdata)
document.querySelector("form").addEventListener("submit",logindata)
function logindata(event){
  event.preventDefault();
  
  let mail=document.querySelector("#email").value;
  let pswrd=document.querySelector("#epass").value;

 for(let i=0;i<arrdata.length;i++){
    if(arrdata[i].email==mail){
        if(arrdata[i].password==pswrd){
            window.location.href="https://www.bigbasket.com/"
        }
        else{
            alert("please enter valid password")
        }
    }
    else{
        alert("please enter valid email");
    }
  }
}
console.log(arrdata)