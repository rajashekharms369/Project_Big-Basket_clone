document.querySelector(".nav-flex>img").addEventListener("click", function () {
  window.location.href = "index.html";
});

let product = [
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1201414_1-fresho-onion.jpg",
    imgurl2:
      "https://www.bigbasket.com/media/uploads/p/l/10000150-2_3-fresho-onion.jpg",
    brand: "Fresho",
    name: "Onion",
    Kg: "5 Kg",
    strike: "120",
    mrp: 115,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
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
  },

  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/40218332_1-fresho-grapes-green.jpg",
    brand: "Fresho",
    name: "Grapes- Green Seedless, Thompson",
    Kg: "500 g",
    strike: "112",
    mrp: 90,
    dur: "Standard Delivery 22 June  9:00 AM  1:30 PM",
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
  },

  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000207_23-fresho-watermelon-small.jpg",
    brand: "Fresho",
    name: "Watermelon - Small",
    Kg: "1 Pc  2.7 kg",
    strike: "53",
    mrp: 43,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1203441_1-fresho-onion-1-kg-new-potato-1-kg-tomato-hybrid-1-kg.jpg",
    brand: "Fresho",
    name: "Onion 1 kg + New Potato 1 kg + Tomato - Hybrid 1 kg",
    Kg: "Combo 3 items",
    strike: "160",
    mrp: 128,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",

    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000335_15-fresho-lemon.jpg",
    brand: "Fresho",
    name: "Lemon",
    Kg: "1 Kg",
    strike: "175",
    mrp: 129,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/20000979_12-fresho-palak-cleaned-without-roots.jpg",
    brand: "Fresho",
    name: "Palak - Cleaned, without roots",
    Kg: "250 g",
    strike: "35.90",
    mrp: 28.5,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },

  {
    discount: "Get 24% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
    brand: "Fresho",
    name: "Cucumber",
    Kg: "1 Kg",
    strike: "27",
    mrp: 21,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 24% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000302_4-fresho-alphonso-mango-badami.jpg",
    brand: "Fresho",
    name: "Alphonso Mango - Badami",
    Kg: "1 kg",
    strike: "175",
    mrp: 140,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 24% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
    brand: "Fresho",
    name: "Capsicum - Green",
    Kg: "500 g",
    strike: "80",
    mrp: 64,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 22% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/40089743_2-fresho-beans-haricot.jpg",
    brand: "Fresho",
    name: "Beans - Haricot",
    Kg: "250 g",
    strike: "21",
    mrp: 17,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
    brand: "Fresho",
    name: "Mushrooms - Button",
    Kg: "1 pac approx 200g",
    strike: "60",
    mrp: 55,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000326_14-fresho-coriander-leaves.jpg",
    brand: "Fresho",
    name: "Coriander Leaves",
    Kg: "1kg",
    strike: "102",
    mrp: 81,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 25% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000269_30-fresho-pomegranate.jpg",
    brand: "Fresho",
    name: "Pomegranate",
    Kg: "4 pcs (approx. 800 - 880 g)",
    strike: "241",
    mrp: 193,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 25% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg",
    brand: "Fresho",
    name: "Coconut - Medium",
    Kg: "1 pc (approx. 450g to 500)",
    strike: "27",
    mrp: 21,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 25% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
    brand: "Fresho",
    name: "Cabbage",
    Kg: "1 pc (approx. 500 g to 800 g)",
    strike: "45",
    mrp: 36,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 25% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000047_21-fresho-beetroot.jpg",
    brand: "Fresho",
    name: "Beetroot",
    Kg: "250g",
    strike: "16",
    mrp: 13,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 18% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/40018523_4-fresho-cucumber-english.jpg",
    brand: "Fresho",
    name: "Cucumber - English",
    Kg: "250g",
    strike: "16",
    mrp: 13,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 18% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000027_28-fresho-banana-robusta.jpg",
    brand: "Fresho",
    name: "Banana - Robusta",
    Kg: "500 g",
    strike: "32.50",
    mrp: 26,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 21% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1203781_1-fresho-apple-red-delicious-washington-regular.jpg",
    brand: "Fresho",
    name: "Apple - Red Delicious / Washington, Regular",
    Kg: "2x 4pcs",
    strike: "325",
    mrp: 265,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 15% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000081_19-fresho-chilli-green-long-medium.jpg",
    brand: "Fresho",
    name: "Chilli - Green Long, Medium",
    Kg: "100 g ",
    strike: "7.50",
    mrp: 6,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/1200345_2-bb-combo-mango-banganpalli.jpg",
    brand: "bb Combo",
    name: "Mango - Banganpalli",
    Kg: "3 kg",
    strike: "341",
    mrp: 273,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 25% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/1202742_1-bb-combo-apple-banana-breakfast.jpg",
    brand: "bb Combo",
    name: "Apple Banana Breakfast",
    Kg: "combo 2 items",
    strike: "195",
    mrp: 154,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 10% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40196765_1-hoovu-fresh-assorted-puja-flowers.jpg",
    brand: "Hoovu Fresh",
    name: "Assorted Puja Flowers",
    Kg: "100g",
    strike: "90",
    mrp: 58,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 8% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40196772_1-hoovu-fresh-lotus.jpg",
    brand: "Hoovu Fresh",
    name: "Lotus",
    Kg: "2 Stems",
    strike: "145",
    mrp: 103,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/30004186_5-organic-sweet-corn.jpg",
    brand: "Organic",
    name: "Sweet Corn",
    Kg: "out of stock",
    strike: "22",
    mrp: 17,
    dur: "We Will Notify When Item will Available",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/10000054_17-fresho-brinjal-bottle-shape.jpg",
    brand: "Fresho",
    name: "Brinjal - Bottle Shape",
    Kg: "500 g",
    strike: "36",
    mrp: 28,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "No offer Available",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40141974_1-brotos-lobia-sprouts-dehydrated.jpg",
    brand: "Brotos",
    name: "Lobia Sprouts - Dehydrated",
    Kg: "80 g",
    strike: "83.70",
    mrp: 83.7,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/10000027_28-fresho-banana-robusta.jpg",
    brand: "Fresho",
    name: "Banana - Robusta",
    Kg: "500 g",
    strike: "32",
    mrp: 26,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 23% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/40023474_7-fresho-banana-yelakki-organically-grown.jpg",
    brand: "Fresho",
    name: "Banana - Yelakki, Organically Grown",
    Kg: "500g",
    strike: "62.96",
    mrp: 50.37,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/20000910_12-fresho-orange-imported.jpg",
    brand: "Fresho",
    name: "Orange - Imported",
    Kg: "6pcs ",
    strike: "127",
    mrp: 102,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 23% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/s/1201613_2-fresho-apple-red-delicious-regular-4pcs-kiwi-green-3pcs-pomegranate-4pcs.jpg",
    brand: "Fresho",
    name: "Apple - Red Delicious, Regular 4pcs + Kiwi - Green 3pcs + Pomegranate 4pcs",
    Kg: "Combo 3 items",
    strike: "400",
    mrp: 376,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM",
  },
  {
    discount: "Get 24% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/1202331_1-usa-pear-green-imported.jpg",
    brand: "USA",
    name: "Pear - Green, Imported",
    Kg: "3x2pcs ",
    strike: "105",
    mrp: 126,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM  ",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/10000813_2-gopalan-organic-snake-gourd.jpg",
    brand: "Gopalan Organic",
    name: "Snake Gourd",
    Kg: "1kg",
    strike: "40",
    mrp: 31,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM  ",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/10000686_1-gopalan-organic-brinjal-green-long.jpg",
    brand: "Gopalan Organic",
    name: "Brinjal Green - Long",
    Kg: "1 kg",
    strike: "91",
    mrp: 73,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM  ",
  },
  {
    discount: "Get 24% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40141974_1-brotos-lobia-sprouts-dehydrated.jpg",
    brand: "Brotos",
    name: "Lobia Sprouts - Dehydrated",
    Kg: "80 g",
    strike: "85",
    mrp: 83,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM  ",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40152766_1-trikaya-baby-american-kale-curled-leaves.jpg",
    brand: "Trikaya",
    name: "Baby American Kale - Curled Leaves",
    Kg: "1 pc Approx. 90-100 gm",
    strike: "55",
    mrp: 55,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40152771_1-trikaya-chives.jpg",
    brand: "Trikaya",
    name: "Chives",
    Kg: "1 pc Approx. 5-10 gm",
    strike: "27.50",
    mrp: 27.5,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40152769_1-trikaya-bamboo-shoot-fresh.jpg",
    brand: "Trikaya",
    name: "Bamboo Shoot - Fresh",
    Kg: "1 pc Approx. 90-100 gm",
    strike: "55",
    mrp: 55,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40196773_1-hoovu-fresh-assorted-puja-flowers-greens-mix.jpg",
    brand: "Hoovu Fresh",
    name: "Assorted Puja Flowers + Greens Mix",
    Kg: "100g ",
    strike: "65",
    mrp: 65,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM  ",
  },
  {
    discount: "Get 29% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/10000330_14-fresho-garlic.jpg",
    brand: "Fresho",
    name: "Garlic",
    Kg: "1kg",
    strike: "150",
    mrp: 91,
    dur: "Standard Delivery  22 June  9:00AM - 1:30PM  ",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40039720_2-fresco-coriander.jpg",
    brand: "Fresco",
    name: "Coriander",
    Kg: "1 pc (approx. 80-100g)",
    strike: "15",
    mrp: 12,
    dur: "Standard Delivery  Tomorrow  9:00AM - 1:30PM  ",
  },
  {
    discount: "Get 20% OFF ",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40039722_1-fresco-mint.jpg",
    brand: "Fresco",
    name: "Mint",
    Kg: "1 pc (approx. 80-100g)",
    strike: "12.50",
    mrp: 10,
    dur: "Standard Delivery  Tomorrow  9:00AM - 1:30PM  ",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40111618_1-tadaa-sweet-corn-kernels.jpg",
    brand: "Tadaa",
    name: "Sweet Corn Kernels",
    Kg: "725 g",
    strike: "100",
    mrp: 100,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40111608_1-tadaa-boiled-sweet-corn-kernel-spice-up-with-peri-peri-seasoning.jpg",
    brand: "Tadaa",
    name: "Boiled Sweet Corn Kernel - Spice Up With Peri-Peri Seasoning",
    Kg: "225 g Tray",
    strike: "59",
    mrp: 59,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40111610_1-tadaa-boiled-sweet-corn-kernel-spice-up-with-lemon-and-pepper-seasoning.jpg",
    brand: "Tadaa",
    name: "Boiled Sweet Corn Kernel - Spice Up With Lemon And Pepper Seasoning",
    Kg: " 225 g Tray",
    strike: "59",
    mrp: 59,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40111615_1-tadaa-baby-potatoes.jpg",
    brand: "Tadaa",
    name: "Boiled Sweet Corn Kernel - Spice Up With Lemon And Pepper Seasoning",
    Kg: " 225 g Tray",
    strike: "59",
    mrp: 59,
    dur: "Standard Delivery: Out of stock",
  },
  {
    discount: "No Offer on this product",
    imgurl:
      "https://www.bigbasket.com/media/uploads/p/mm/40111609_1-tadaa-boiled-sweet-corn-kernel-spice-up-with-chat-masala-seasoning.jpg",
    brand: "Tadaa",
    name: "Boiled Sweet Corn Kernel - Spice Up With Lemon And Pepper Seasoning",
    Kg: " 225 g Tray",
    strike: "59",
    mrp: 59,
    dur: "Standard Delivery: Out of stock",
  },
];
let Array = JSON.parse(localStorage.getItem("basket")) || [];
let detailArray = [];
document.querySelector("#pricesort").addEventListener("change", filterprice);
function filterprice() {
  let x = document.querySelector("#pricesort").value;
  if (x == "Popularity") {
    window.location.reload();
    displaydata(product);
  }
  if (x == "price Low to High") {
    product.sort(function (a, b) {
      if (a.mrp > b.mrp) return 1;
      if (a.mrp < b.mrp) return -1;
      else return 0;
    });
    displaydata(product);
  }
  if (x == "price High to Low") {
    product.sort(function (a, b) {
      if (a.mrp > b.mrp) return -1;
      if (a.mrp < b.mrp) return 1;
      else return 0;
    });
    displaydata(product);
  }
}

displaydata(product);
function displaydata(product) {
  document.querySelector("#container").innerHTML = "";
  product.forEach(function (elem, index) {
    let div = document.createElement("div");
    // div.addEventListener("click", function () {
    //   runfunction(elem);
    //   window.location.href = "detial.html";
    //   // window.location.reload();
    // });
    let div2 = document.createElement("div");
    div2.setAttribute("class", "discount");
    div2.innerText = elem.discount;
    let img = document.createElement("img");
    img.setAttribute("src", elem.imgurl);
    img.setAttribute("class", "detail");
    img.addEventListener("click", function () {
      runfunction(elem);
      window.location.href = "detial.html";
      // window.location.reload();
    });
    let brand = document.createElement("p");
    brand.setAttribute("class", "brand");
    brand.innerText = elem.brand;
    let name = document.createElement("p");
    name.setAttribute("class", "name");
    name.innerText = elem.name;
    let input = document.createElement("select");
    input.setAttribute("class", "select");
    let opt1 = document.createElement("option");
    opt1.innerText = elem.Kg;
    let opt2 = document.createElement("option");
    opt2.innerText = "1 kg";
    let opt3 = document.createElement("option");
    opt3.innerText = "2 kg";
    input.append(opt1, opt2, opt3);

    let mrp = document.createElement("div");
    mrp.setAttribute("class", "price");
    let price = document.createElement("p");
    price.innerText = "Rs" + elem.mrp;
    let str = document.createElement("strike");
    str.setAttribute("class", "my-10");

    str.innerText = "Rs." + elem.strike;
    mrp.append(str, price);
    let main = document.createElement("div");
    main.setAttribute("class", "bg-gray");
    let delivery = document.createElement("h5");
    delivery.setAttribute("class", "fas fa-truck");
    delivery.setAttribute("id", "text");
    // delivery.padStart(1, " ");
    delivery.innerText = elem.dur;
    let div3 = document.createElement("div");
    div3.setAttribute("class", "input");
    let qty = document.createElement("label");
    qty.htmlFor = "input2";
    qty.innerText = "Qty";
    let input2 = document.createElement("input");
    input2.setAttribute("class", "width");
    input2.value = "1";
    let btn = document.createElement("button");
    btn.innerText = "ADD";
    btn.style.backgroundColor = "#ffbf07";
    btn.addEventListener("click", function () {
      addtocart(elem);
    });

    div3.append(qty, input2, btn);
    main.append(mrp, delivery, div3);
    div.append(div2, img, brand, name, input, main);
    document.querySelector("#container").append(div);
  });
}
function runfunction(elem) {
  console.log(elem.imgurl);
  let obj = {
    image: elem.imgurl,
    name: elem.name,
    brand: elem.brand,
    strike: elem.strike,
    price: elem.mrp,
  };
  detailArray.push(obj);

  localStorage.setItem("productdetail", JSON.stringify(detailArray));
  console.log(detailArray);
}
document.querySelector("#numitem").innerText = Array.length;
function addtocart(elem) {
  let obj = {
    image: elem.imgurl,
    name: elem.name,
    strike: elem.strike,
    price: elem.mrp,
  };

  Array.push(obj);
  document.querySelector("#numitem").innerText = Array.length;
  localStorage.setItem("basket", JSON.stringify(Array));
  alert("Product added to Cart successfully..!!");
}

let deal = document.querySelectorAll(".input");
let str = "";
for (let input of deal) {
  input.addEventListener("click", function () {
    if (this.checked == true) {
      str = this.value;
    }
  });
}
let x = document.querySelectorAll(".chk>input");
for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    let filtered = product.filter(function (elem) {
      return elem.brand === str;
    });
    displaydata(filtered);
  });
}

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

// nav bar js
