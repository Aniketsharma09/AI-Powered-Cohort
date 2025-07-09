let main = document.querySelector("#main");
let userDetails = [
  {
    userName: "Aniket",
    followers: "200M",
    img: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend: "Stranger",
    follow: "Follow",
  },
  {
    userName: "Divya",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend: "Stranger",
    followers: "20k",
    follow: "Follow",
  },
  {
    userName: "Hemani",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend: "Stranger",
    followers: "2k",
    follow: "Follow",
  },
  {
    userName: "Anmol",
    img: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend: "Stranger",
    followers: "10k",
    follow: "Follow",
  },
  {
    userName: "Ansika",
    img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friend: "Stranger",
    followers: "500k",
    follow: "Follow",
  },
];
console.log(userDetails);
function addCards() {
  let sum = "";
  userDetails.forEach(function (elem, idx) {
    sum += `<div class="card">
            <img src="${elem.img}" alt="">
            <h3>${elem.userName}</h3>
            <h4>${elem.followers} Followers</h4>
            <h5>${elem.friend}</h5>
            <button id="${idx}">${elem.follow}</button>
        </div>`;
    main.innerHTML = sum;
  });
}
addCards();
main.addEventListener("click", function (dets) {
  let gold = userDetails[dets.target.id];
  if (gold.friend == "Stranger") {
    gold.friend = "Friend";
    gold.follow = "Unfollow";
  } else {
    gold.friend = "Stranger";
    gold.follow = "Follow";
  }
  addCards()
});
