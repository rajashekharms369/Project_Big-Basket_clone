document.querySelector("form").addEventListener("submit", confirm);
function confirm(event) {
  event.preventDefault();
  let otp = document.querySelector("#otp").value;
  if (otp === "123456") {
    alert("You are succesfully login");
    window.location.href = "index.html";
  } else {
    alert("Enter valid otp");
  }
}
