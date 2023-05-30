document.querySelector(".menu").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("menu-selected");
})

let reviewDatas = [];
let reviewNum = 0;
let reviewLoad = 2;
let reviewBtn = null;

window.addEventListener("load", async function () {
  if(this.location.pathname.toString().includes("review")){
    reviewDatas = [];
    reviewDatas = JSON.parse(JSON.stringify(reviewList));

    reviewBtn = this.document.querySelector(".review-btn");

    reviewBtn.addEventListener("click", function(){
      for(let i = reviewNum; i < reviewNum + reviewLoad; i++){
        if(i < reviewDatas.length){
          document
          .querySelector(".review-items")
          .appendChild(generateReview(reviewDatas[i]));
          
          toggleActive(i);
        }
      }
    
      reviewNum += reviewLoad;
    
      if (reviewNum >= reviewDatas.length) {
        reviewBtn.style.display = "none";
      }
    })

    for (let i = 0; i < 6; i++) {
      document
        .querySelector(".review-items")
        .appendChild(generateReview(reviewDatas[i]));
        reviewNum ++;
    }

    toggleActive(0);
  }
})

function generateReview(_object) {
  let el_wrapper = document.createElement("div");
  el_wrapper.setAttribute("class", "review-item");

  let el_profile = document.createElement("div");
  el_profile.setAttribute("class", "review-profile");

  let el_img = document.createElement("img");
  el_img.src = "img/profile.png";
  el_img.alt = "프로필 이미지"

  let el_name = document.createElement("p");
  el_name.innerHTML = _object.name + " | " + _object.type;

  let el_title = document.createElement("div");
  el_title.setAttribute("class", "review-title");
  el_title.innerHTML = _object.title;

  let el_desc = document.createElement("div");
  el_desc.setAttribute("class", "review-desc");
  el_desc.innerHTML = _object.desc;

  el_profile.appendChild(el_img);
  el_profile.appendChild(el_name);

  el_wrapper.appendChild(el_profile);
  el_wrapper.appendChild(el_title);
  el_wrapper.appendChild(el_desc);

  return el_wrapper;
}

function toggleActive(_num){
  const reviewItems = document.querySelectorAll(".review-item");

  for (let i = _num; i < reviewItems.length; i++) {
      reviewItems[i].addEventListener("click", function () {
        this.classList.toggle("active");
      });
  }
}