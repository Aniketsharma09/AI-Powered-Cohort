let arr = [
  {
    team: "CSK",
    primaryColor: "yellow",
    secondaryColor: "green",
  },
  {
    team: "RCB",
    primaryColor: "red",
    secondaryColor: "gold",
  },
  {
    team: "SRH",
    primaryColor: "orange",
    secondaryColor: "black",
  },
  {
    team: "PRKG",
    primaryColor: "red",
    secondaryColor: "black",
  },
  {
    team: "LSG",
    primaryColor: "blue",
    secondaryColor: "white",
  },
];
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
function guessTeam(){
    let teamIdx = Math.floor(Math.random()*arr.length);
    h1.innerText = `${arr[teamIdx].team}`;
    h1.style.backgroundColor = `${arr[teamIdx].primaryColor}`; 
    h1.style.color = `${arr[teamIdx].secondaryColor}`; 
}
btn.addEventListener('click',guessTeam);
