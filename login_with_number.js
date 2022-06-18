Acntarr = JSON.parse(localStorage.getItem("accountdetail")) || [];
console.log(Acntarr);
document.querySelector("#submit2").addEventListener("click", funct);

function funct(event) {
  event.preventDefault();

  let acntdata = {
    number: document.querySelector("#number").value,
  };
  Acntarr.push(acntdata);
  localStorage.setItem("accountdetail", JSON.stringify(Acntarr));
  window.location.href = "confirm.html";
}
document.querySelector("#submit").addEventListener("click", funct2);
function funct2(event) {
  event.preventDefault();
  window.location.href = "signup.html";
}
