let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let flag = 0;
function addFriend() {
  if (flag === 0) {
    btn.style.backgroundColor = "lightgreen";
    btn.innerText = "Sending Request...";
    h3.innerText = "Adding...";
    flag = 1;
    setTimeout(function () {
      btn.style.backgroundColor = "red";
      btn.innerText = "Remove Friend";
      h3.innerText = "Friends";
      h3.style.color = "green";
    }, 2000);
  }
  else{
    btn.style.backgroundColor = "green";
    btn.innerText = "Add Friend";
    h3.innerText = "Unknown";
    h3.style.color = "red";
    flag = 0;
  }
}
btn.addEventListener("click", addFriend);
