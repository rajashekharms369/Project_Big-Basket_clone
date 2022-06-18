
document.querySelector("#button4").addEventListener("click",function(){
    let data=[];
    let Name=document.querySelector("#name").value;
data.push(Name);
let contact=document.querySelector("#con").value;
data.push(contact);
let street=document.querySelector("#street").value;
data.push(street);

let city=document.querySelector("#city").value;
data.push(city);
let pin=document.querySelector("#pin").value;
data.push(pin);
localStorage.setItem("address",JSON.stringify(data));
if(Name==""){
  alert("Please fill your name")
}else if(contact==""){
  alert("Please fill your contact number")
}else if(city==""){
  alert("Please fill your city name")
}else if(pin==""){
  alert("Please fill your pin code")
}else{window.location.replace("payment.html")}

})
document.querySelector("#button5").addEventListener("click",function(){
  window.location.reload();
})
let final=0;
let arr=JSON.parse(localStorage.getItem("TOTAL"));
for(let i=0;i<arr.length;i++){
    final+=arr[i];
}
document.querySelector("#PR").innerText=final;
document.querySelector("#BR").innerText=final;

function ALERT(){
  alert("First you need to fill your address")
}