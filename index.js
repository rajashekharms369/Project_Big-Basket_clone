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

/*--------------------crauser1------------------------*/
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
let bestsellersImg1 = document.querySelector(
  "#bestsellers>div>div:nth-child(1)>img"
);
let bestsellersImg2 = document.querySelector(
  "#bestsellers>div>div:nth-child(2)>img"
);
let bestsellersImg3 = document.querySelector(
  "#bestsellers>div>div:nth-child(3)>img"
);
let bestsellersImg4 = document.querySelector(
  "#bestsellers>div>div:nth-child(4)>img"
);
let bestsellersImg5 = document.querySelector(
  "#bestsellers>div>div:nth-child(5)>img"
);

let bestsellersArray = [
  "https://www.bigbasket.com/media/uploads/p/s/40044729_7-bb-royal-maida.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/10000083_17-fresho-chilli-green-long-medium.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/10000405_19-bb-popular-rice-raw-sona-masoori.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/1200049_2-bb-combo-bb-royal-sona-masoori-raw-rice-10-kg-toor-dal-1kg-sugar-1kg.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/1214883_7-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/40042838_11-bb-royal-channa-dal.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/1209799_4-dove-cream-beauty-bathing-bar.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/30005421_6-bb-popular-kabuli-channa.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/263860_8-dabur-gulabari-premium-rose-water-paraben-free-skin-toner.jpg",
  "https://www.bigbasket.com/media/uploads/p/s/1212930_1-borges-extra-virgin-olive-oil-1l-pet-bottle-durum-wheat-pasta-penne-rigate-500g-pouch.jpg",
];

let bestsellersButton = document.querySelectorAll("#bestsellers>div>button");

bestsellersButton[0].addEventListener("click", function () {
  for (let i = 0, j = 0; i < bestsellersArray.length / 2; i++) {
    bestsellersImg1.src = bestsellersArray[i + 0];
    bestsellersImg2.src = bestsellersArray[i + 1];
    bestsellersImg3.src = bestsellersArray[i + 2];
    bestsellersImg4.src = bestsellersArray[i + 3];
    bestsellersImg5.src = bestsellersArray[i + 4];
  }
});

bestsellersButton[1].addEventListener("click", function () {
  for (
    let i = bestsellersArray.length - 1;
    i >= bestsellersArray.length / 2;
    i--
  ) {
    bestsellersImg1.src = bestsellersArray[i + 0];
    bestsellersImg2.src = bestsellersArray[i + 1];
    bestsellersImg3.src = bestsellersArray[i + 2];
    bestsellersImg4.src = bestsellersArray[i + 3];
    bestsellersImg5.src = bestsellersArray[i + 4];
  }
});
