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
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_bev_coldpressed-juice_460-250522.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg",
];

let crauser1Image = document.querySelector("#crauser1>img");
for (let i = 0; i < crauser1Array.length; i++) {
  h5[i].addEventListener("click", function () {
    crauser1Image.src = crauser1Array[i];
  });
}

/*----------------Best Sellers----------------*/

let array = [
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1201414_1-fresho-onion.jpg",
    brand: "Fresho",
    name: "Onion",
    Kg: "5 Kg",
    strike: "Rs 120",
    mrp: "115",
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",

    ref: "https://www.bing.com/th?id=OIP.rIC2F2OmvKkH9lBrc4bA9gHaHo&w=96&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg",
    brand: "Fresho",
    name: "Patato",
    Kg: "2 kg",
    strike: "Rs 87.50",
    mrp: "70",
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
    strike: "Rs 119.5",
    mrp: "91",
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
    strike: "Rs 81.25",
    mrp: "61",
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
    strike: "Rs 100",
    mrp: "70",
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
    strike: "Rs 215",
    mrp: "172",
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
    strike: "Rs 10.94",
    mrp: "8.75",
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
    strike: "Rs 43.75",
    mrp: "35",
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
    strike: "Rs 145",
    mrp: "116",
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
    strike: "Rs 25",
    mrp: "20",
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
  let select = document.createElement("select");
  let option1 = document.createElement("option");
  option1.innerText = el.Kg + " Rs. " + +el.mrp;
  select.append(option1);
  let br = document.createElement("br");

  let div2 = document.createElement("div");
  let p2 = document.createElement("p");
  p2.innerText = "MRP Rs. " + el.mrp / 5;
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
