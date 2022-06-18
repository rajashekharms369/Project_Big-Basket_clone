/*-----------------Header footer JS-------------------- */

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.querySelector(".container2").addEventListener("click", toggle);
// document.getElementById('user-logo').addEventListener('click',toggle)
document.getElementById("cancel").addEventListener("click", toggle);

function toggle() {
  var blur = document.getElementById("blur2");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup2");
  popup.classList.toggle("active");
  console.log("hello");
}

document.querySelector("#logo").addEventListener("click", function () {
  location.reload();
});

arrdata = JSON.parse(localStorage.getItem("signupdata")) || [];

document.querySelector("#submit").addEventListener("click", logindata);

function logindata(event) {
  event.preventDefault();

  let mail = document.querySelector("#email").value;
  let pswrd = document.querySelector("#epass").value;

  let auth = JSON.parse(localStorage.getItem("auth"));

  for (let i = 0; i < arrdata.length; i++) {
    if (arrdata[i].email == mail) {
      if (arrdata[i].password == pswrd) {
        window.location.href = "index.html";
        auth = true;
        localStorage.setItem("auth", JSON.stringify(auth));
        document.querySelector(
          "#blur2"
        ).innerHTML = `<div id="user-logo"></div>`;
        document.querySelector("#user-logo>img").src =
          "https://i.postimg.cc/ZnH50Tfj/footer-1.jpg";

        document.querySelector("#user-logo>img").style.margin = "0";

        let background = document.querySelector("#blur2");
      } else {
        alert("please enter valid password");
      }
    } else {
      alert("please enter valid email");
    }
  }
}
console.log(document.querySelector("#user-logo").innerHTML);
let a = localStorage.getItem("auth");
a = JSON.parse(a);
if (a == true) {
  document.querySelector(
    "#user-logo"
  ).innerHTML = `<img style="margin-top:-2px;" src = "https://i.postimg.cc/ZnH50Tfj/footer-1.jpg"/>`;
  console.log(document.querySelector("#user-logo").innerHTML);
}
// setInterval(function(){alert("Hello")},3000);

/* ------------Adding Cart Link---------------- */
let cartLogo = document.querySelector("#cart-logo");
console.log(cartLogo);
cartLogo.addEventListener("click", function () {
  auth = JSON.parse(localStorage.getItem("auth"));
  if (auth) {
    window.location.href = "basket.html";
  } else {
    window.location.href = "login.html";
  }
});

/*-----------------Main body JS part-------------------*/

/*-------------Crauser2 JS Part----------------*/
let crauser2Button = document.querySelectorAll("#crauser2>button");
let crauser2Image = document.querySelector("#crauser2>img");
let crauser2imgArray = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_hardinsasta_bangalore_400_130622.jpeg",
  "https://www.bigbasket.com/media/uploads/banner_images/cp_pbs_entrypoint_1130x400_060622.jpg",
];
let crauser2ImageNum = 0;
crauser2Button[0].addEventListener("click", function () {
  if (crauser2ImageNum === 0) {
    crauser2ImageNum = crauser2imgArray.length - 1;
  } else {
    crauser2ImageNum--;
  }
  crauser2Image.src = crauser2imgArray[crauser2ImageNum];
});

crauser2Button[0].addEventListener("click", autoSlide);
function autoSlide() {
  if (crauser2ImageNum === 0) {
    crauser2ImageNum = crauser2imgArray.length - 1;
  } else {
    crauser2ImageNum--;
  }
  crauser2Image.src = crauser2imgArray[crauser2ImageNum];
}
setInterval(autoSlide, 3000);

crauser2Button[1].addEventListener("click", function () {
  if (crauser2ImageNum === crauser2imgArray.length - 1) {
    crauser2ImageNum = 0;
  } else {
    crauser2ImageNum++;
  }
  crauser2Image.src = crauser2imgArray[crauser2ImageNum];
});

/*-------------Crauser3 JS Part----------------*/
let crauser3Button = document.querySelectorAll("#crauser3>button");
let crauser3Image = document.querySelector("#crauser3>img");
let crauser3ImgArray = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250522_400-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250522_400-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250522_400-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250522_400-250522.jpg",
];
let crauser3ImageNum = 0;
crauser3Button[0].addEventListener("click", function () {
  if (crauser3ImageNum === 0) {
    crauser3ImageNum = crauser3ImgArray.length - 1;
  } else {
    crauser3ImageNum--;
  }
  crauser3Image.src = crauser3ImgArray[crauser3ImageNum];
});

crauser3Button[0].addEventListener("click", autoSlide2);
function autoSlide2() {
  if (crauser3ImageNum === 0) {
    crauser3ImageNum = crauser3ImgArray.length - 1;
  } else {
    crauser3ImageNum--;
  }
  crauser3Image.src = crauser3ImgArray[crauser3ImageNum];
}
setInterval(autoSlide2, 3000);

crauser3Button[1].addEventListener("click", function () {
  if (crauser3ImageNum === crauser3ImgArray.length - 1) {
    crauser3ImageNum = 0;
  } else {
    crauser3ImageNum++;
  }
  crauser3Image.src = crauser3ImgArray[crauser3ImageNum];
});

/*-----------------featuredrecipes-------------------*/
let featuredrecipesButton = document.querySelectorAll(
  "#featuredrecipes>button"
);
let featuredrecipesImage = document.querySelector("#featuredrecipes>img");
let featuredrecipesArray = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_frozen_cxnp-9692_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_mango-9691_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_chees_cxnp-9690_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_kesar_cxnp-9689_400_090622.jpg",
];
let featuredrecipesNum = 0;
featuredrecipesButton[0].addEventListener("click", function () {
  if (featuredrecipesNum === 0) {
    featuredrecipesNum = featuredrecipesArray.length - 1;
  } else {
    featuredrecipesNum--;
  }
  featuredrecipesImage.src = featuredrecipesArray[featuredrecipesNum];
});

featuredrecipesButton[0].addEventListener("click", autoSlide3);
function autoSlide3() {
  if (featuredrecipesNum === 0) {
    featuredrecipesNum = featuredrecipesArray.length - 1;
  } else {
    featuredrecipesNum--;
  }
  featuredrecipesImage.src = featuredrecipesArray[featuredrecipesNum];
}
setInterval(autoSlide3, 3000);

featuredrecipesButton[1].addEventListener("click", function () {
  if (featuredrecipesNum === featuredrecipesArray.length - 1) {
    featuredrecipesNum = 0;
  } else {
    featuredrecipesNum++;
  }
  featuredrecipesImage.src = featuredrecipesArray[featuredrecipesNum];
});

/*--------------------Carousel1------------------------*/
let h5 = document.querySelectorAll("#crauser1Options>h5");

let crauser1Array = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_fnv_season-special_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460_140622.jpeg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_flavoured-milk_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_bev_coldpressed-juice_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m__bcd_tasties-origins_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_DT_apples-blr_1600x460-180622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg",
];

let crauser1Image = document.querySelector("#crauser1>img");
for (let i = 0; i < crauser1Array.length; i++) {
  h5[i].addEventListener("click", function () {
    crauser1Image.src = crauser1Array[i];
  });
}

/*--------------------Carousel1 Auto Reload-------------------*/
let crauser1Buttons = document.querySelectorAll("#crauser1>button");
let crauser1Num = 0;
crauser1Buttons[1].addEventListener("click", function () {
  if (crauser1Num === 0) {
    crauser1Num = crauser1Array.length - 1;
  } else {
    crauser1Num--;
  }
  crauser1Image.src = crauser1Array[crauser1Num];
});

crauser1Buttons[1].addEventListener("click", autoSlide4);
function autoSlide4() {
  if (crauser1Num === 0) {
    crauser1Num = crauser1Array.length - 1;
  } else {
    crauser1Num--;
  }
  crauser1Image.src = crauser1Array[crauser1Num];
}
setInterval(autoSlide4, 3000);

crauser1Buttons[0].addEventListener("click", function () {
  if (crauser1Num === crauser1Array.length - 1) {
    crauser1Num = 0;
  } else {
    crauser1Num++;
  }
  crauser1Image.src = crauser1Array[crauser1Num];
});

/*----------------Best Sellers----------------*/

let array = [
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1201414_1-fresho-onion.jpg",
    brand: "Fresho",
    name: "Onion",
    Kg: "5 Kg",
    strike: "120",
    mrp: 115,
    dur: "Standard Delivery 22 June 9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg",
    brand: "Fresho",
    name: "Patato",
    Kg: "2 kg",
    strike: "87.50",
    mrp: 70,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000298_10-fresho-banganapalli-mango.jpg",
    brand: "Fresho",
    name: "Banganapalli Mango",
    Kg: "1 kg",
    strike: "119.5",
    mrp: 91,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 15% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    brand: "Fresho",
    name: "Carrot-orange",
    Kg: "1 kg",
    strike: "81.25",
    mrp: 61,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg",
    brand: "Fresho",
    name: "Tomato - Local",
    Kg: "1 kg",
    strike: "100",
    mrp: 70,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1203678_1-fresho-tender-coconut-medium.jpg ",
    brand: "Fresho",
    name: "Tender Coconut - Medium",
    Kg: "4 X 1 Pc",
    strike: "215",
    mrp: 172,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000143_14-fresho-ladies-finger.jpg",
    brand: "Fresho",
    name: "Ladies Finger",
    Kg: "250g",
    strike: "10.94",
    mrp: 8.75,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000201_15-fresho-tomato-hybrid.jpg",
    brand: "Fresho",
    name: "Tomato - Hybrid",
    Kg: "500g",
    strike: "43.75",
    mrp: 35,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg",
    brand: "Fresho",
    name: "Banana - Yelakki",
    Kg: "1kg",
    strike: "145",
    mrp: 116,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
    brand: "Fresho",
    name: "Cauliflower",
    Kg: "1 Pc  approx 400 g",
    strike: "25",
    mrp: 20,
    dur: "Standard Delivery  23 June  9:00AM - 1:30PM",
    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
];

array.forEach((el) => {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = el.imgurl;
  let p1 = document.createElement("p");
  p1.innerText = el.brand;
  let h3 = document.createElement("h3");
  h3.innerText = el.name;
  h3.style.color = "#000000";
  h3.style.fontWeight = "lighter";
  // h3.style.fontFamily = "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  let select = document.createElement("select");
  let option1 = document.createElement("option");
  option1.innerText = el.Kg + " Rs. " + +el.mrp;
  select.append(option1);
  let br = document.createElement("br");

  let div2 = document.createElement("div");
  let p2 = document.createElement("p");
  p2.innerText = "MRP Rs. " + el.mrp / 2;
  let span3 = document.createElement("span");
  let img3 = document.createElement("img");
  img3.src = "https://i.postimg.cc/mDLLrHtF/truck.jpg";
  span3.append(img3);
  let span4 = document.createElement("span");
  span4.innerText = el.dur;
  let br1 = document.createElement("br");
  let span = document.createElement("span");
  span.innerText = "Qty";
  let input = document.createElement("input");
  let button = document.createElement("button");
  button.innerText = "ADD";
  button.addEventListener("click", function () {
    addtocart(el);
  });
  let span2 = document.createElement("span");
  span2.style.marginLeft = "8px";
  let img2 = document.createElement("img");
  img2.style.width = "15px";
  img2.src = el.ref;
  span2.append(img2);
  button.append(span2);

  div2.append(p2, span3, span4, br1, span, input, button);

  div.append(img, p1, h3, select, br, div2);

  document.querySelector("#bestsellers>div").append(div);
});

/*--------------------information ReadMore-------------------*/

let button = document.querySelector("#information>button");
let h2 = document.querySelector("#information>h2:nth-child(5)");
let p1 = document.querySelector("#information>p:nth-child(6)");
let p2 = document.querySelector("#information>p:nth-child(7)");
let p3 = document.querySelector("#information>p:nth-child(8)");
let p4 = document.querySelector("#information>p:nth-child(9)");
let p5 = document.querySelector("#information>p:nth-child(10)");

h2.style.display = "none";
p1.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";
p5.style.display = "none";

document
  .querySelector("#information>button")
  .addEventListener("click", function () {
    h2.style.display = "block";
    p1.style.display = "block";
    p2.style.display = "block";
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
    button.style.display = "none";
  });

/*---------------------bestsellersSlide--------------------*/
let bestsellersSlide = document.querySelectorAll("#bestsellersSlide");
let bestsellersSlidebuttons = document.querySelectorAll(
  "#bestsellersSlide>button"
);
bestsellersSlide.forEach((el) => {
  let newv = el.getBoundingClientRect();
  let newv2 = newv.width;
  bestsellersSlidebuttons[0].addEventListener("click", function () {
    el.scrollLeft += newv2;
  });
  bestsellersSlidebuttons[1].addEventListener("click", function () {
    el.scrollLeft -= newv2;
  });
});

/*-----------------Add to cart----------------*/
let basket = JSON.parse(localStorage.getItem("basket")) || [];

document.querySelector("#numitem").innerText = basket.length;

function addtocart(el) {
  let pval = +document.querySelector("#numitem").innerText;
  document.querySelector("#numitem").innerText = pval + 1;
  let obj = {
    image: el.imgurl,
    name: el.name,
    strike: el.strike,
    price: el.mrp,
  };

  basket.push(obj);
  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Product added to Cart successfully..!!");
}
