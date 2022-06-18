arrdata = JSON.parse(localStorage.getItem("signupdata")) || [];
console.log(arrdata);
document.querySelector("form").addEventListener("submit", logindata);
function logindata(event) {
  event.preventDefault();

  let mail = document.querySelector("#email").value;
  let pswrd = document.querySelector("#epass").value;

  let auth = false;
  localStorage.setItem("auth", JSON.stringify(auth));

  let flag = false;
  for (let i = 0; i < arrdata.length; i++) {
    if (arrdata[i].email == mail && arrdata[i].password == pswrd) {
      flag = true;
    }
  }

  if (flag) {
    auth = true;
    localStorage.setItem("auth", JSON.stringify(auth));
    window.location.href = "index.html";
  } else if (arrdata[i].password == pswrd) {
    alert("please enter valid password");
  } else if (arrdata[i].email == mail) {
    alert("please enter valid email");
  }
}
