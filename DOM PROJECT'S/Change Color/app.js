let btn = document.querySelector("button");
let box = document.querySelector("#box");
function changeColor(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
}
btn.addEventListener('click',changeColor);
