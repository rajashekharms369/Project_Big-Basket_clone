document.querySelector("form").addEventListener("submit", confirm);
function confirm(event) {
  event.preventDefault();
  let otp = document.querySelector("#otp").value;
  if (otp === "123456") {
    alert("You are succesfully login");
    window.location.href = "https://www.bigbasket.com/";
  } else {
    alert("Enter valid otp");
  }
}
