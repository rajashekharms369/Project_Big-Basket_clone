arrdata = JSON.parse(localStorage.getItem("signupdata")) || [];
console.log(arrdata);
document.querySelector("form").addEventListener("submit", signupdata);

function signupdata(event) {
  event.preventDefault();
  let objdata = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#mail").value,
    // phone:document.querySelector("#number").value,
    password: document.querySelector("#pass").value,
  };
  if (check(objdata.email) == true) {
    arrdata.push(objdata);
    alert("signup successfully");
    localStorage.setItem("signupdata", JSON.stringify(arrdata));
    window.location.href = "login.html";
  } else {
    alert("email already registered");
  }
  // arrdata.push(objdata);
  // console.log(arrdata);
}

function check(email) {
  let filter = arrdata.filter(function (elem) {
    return email === elem.email;
  });
  if (filter.length > 0) {
    return false;
  } else {
    return true;
  }
}
