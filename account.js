Acntarr=JSON.parse(localStorage.getItem("accountdetail"))||[];
console.log(Acntarr);
document.querySelector("form").addEventListener("submit",funct);

function funct(event){ 
 event.preventDefault();
console.log("inner")

    let acntdata={
        name:document.querySelector("#name").value,
        number:document.querySelector("#number").value,
        card_number:document.querySelector("#card").value,
        expiry_date:document.querySelector("#date").value,
        cvv:document.querySelector("#cvv").value,
    }
 Acntarr.push(acntdata);
 console.log(Acntarr)
localStorage.setItem("accountdetail",JSON.stringify(Acntarr))
window.location.href="confirm.html"
}