document.querySelector(".nav-flex>img").addEventListener("click", function () {
  window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("basket")) || [];
document.querySelector("#Item").innerText = data.length;

createtbody();

function createtbody() {
  let to = [];
  data.forEach(function (ele, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = ele.name;
    let td2 = document.createElement("td");
    td2.innerText = ele.price;
    let td3 = document.createElement("td");
    let INPUT = document.createElement("input");
    INPUT.id = "raj";
    INPUT.type = "number";
    INPUT.min = 1;
    INPUT.placeholder = "1";
    let INPUT1 = document.createElement("button");
    INPUT1.innerText = "ADD";
    INPUT1.id = "syam";
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    to.push(ele.price);
    localStorage.setItem("TOTAL", JSON.stringify(to));
    INPUT1.addEventListener("click", function () {
      let newto = JSON.parse(localStorage.getItem("TOTAL"));

      let INPUTVAL = INPUT.value;

      let SUM = 0;
      td4.innerText = +INPUTVAL * ele.price + ele.price;
      SUM += +INPUTVAL * ele.price;

      to.push(SUM);

      dif = ele.strike - ele.price;
      td5.innerText = +INPUTVAL * dif + dif;
      localStorage.setItem("TOTAL", JSON.stringify(to));
      let arr = JSON.parse(localStorage.getItem("TOTAL"));
      let final = 0;
      for (let i = 0; i < arr.length; i++) {
        final += arr[i];
      }
      document.querySelector("#chan").innerText = final;
      document.querySelector("#fin").innerText = final;
    });
    let right = document.createElement("button");
    right.innerText = "X";
    right.id = "x";
    right.addEventListener("click", function (event) {
      Delete(ele, index);
    });
    td4.innerText = ele.price;
    td5.innerText = +ele.strike - ele.price;

    td3.append(INPUT, INPUT1, right);

    document.querySelector("tbody").append(tr);
    tr.append(td1, td2, td3, td4, td5);
  });
}

document.querySelector("#butt0").addEventListener("click", function () {
  localStorage.removeItem("basket");
  window.location.reload();
});
document.querySelector("#butt1").addEventListener("click", function () {
  window.location.replace("product.html");
});

document.querySelector("#check").addEventListener("click", function () {
  window.location.replace("address.html");
});

function Delete(ele, index) {
  data.splice(index, 1);

  let newto = JSON.parse(localStorage.getItem("TOTAL"));

  newto.filter(function (ELE) {
    return ELE != ele.price;
  });
  localStorage.setItem("basket", JSON.stringify(data));
  window.location.reload();
}
let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i].price;
}
document.querySelector("#fin").innerText = sum;
document.querySelector("#chan").innerText = sum;
