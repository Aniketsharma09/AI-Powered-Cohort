let btn = document.querySelector('button');
let h3 = document.querySelector('h3');
let dowlonding = document.querySelector('.dowlonding');
function startDowlonding(){
    let count = 0;
    let time = Math.floor(Math.random()*101);
    console.log(time);
    let progress = setInterval(function(){
        count++;
        h3.innerText = `${count}%`;
        dowlonding.style.width = `${count}%`;
    },time)
    setTimeout(function(){
        clearInterval(progress);
    },time*100)
}
btn.addEventListener('click',startDowlonding);