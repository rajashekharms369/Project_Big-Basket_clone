let ADD = JSON.parse(localStorage.getItem("address"));
document.querySelector("#addnew").innerText = ADD;

let account = [];
let obj = {
  card: 1224364860728496,
  valid: "12/27",
  cvv: 377,
};
account.push(obj);
localStorage.setItem("ACCOUNT", JSON.stringify(account));

document.querySelector("#PAY").addEventListener("click", function () {
  let CARD = document.querySelector("#input1").value;
  let VALID = document.querySelector("#valiD").value;
  let CVV = document.querySelector("#cVV").value;
  let acc = JSON.parse(localStorage.getItem("ACCOUNT"));
  if (acc[0].card == CARD && acc[0].valid == VALID && acc[0].cvv == CVV) {
    alert("otp sent successfully");
    window.location.replace("otp.html");
  } else {
    alert("Invalid card detail");
  }
});

document.querySelector("#bt").addEventListener("click", function () {
  window.location.replace("address.html");
});
document.querySelector("#app").addEventListener("click", function () {
  let sum = 0;
  let sal = 0;
  let INP = document.querySelector("#VAl").value;
  if (INP == "big123") {
    let final = 0;
    let arr = JSON.parse(localStorage.getItem("TOTAL"));
    for (let i = 0; i < arr.length; i++) {
      final += arr[i];
    }
    sum = final - 0.2 * final;
    sal = 0.2 * final;
    document.querySelector("#BR").innerText = sum;
    document.querySelector("#TR").innerText = sal.toFixed(2);
    alert("Hurray..!! 20% discount applicable.");
  } else {
    alert("Worng Code");
  }
});

let final = 0;
let arr = JSON.parse(localStorage.getItem("TOTAL"));
for (let i = 0; i < arr.length; i++) {
  final += arr[i];
}
document.querySelector("#PR").innerText = final;
document.querySelector("#BR").innerText = final;
