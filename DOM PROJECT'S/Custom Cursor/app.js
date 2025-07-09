let con = document.querySelector('#container');
let crsr = document.querySelector('.cursor');
con.addEventListener('mousemove',function(dets){
    crsr.style.left = `${dets.x}px`;
    crsr.style.top = `${dets.y}px`;
})