let img = document.querySelector('img');
let like = document.querySelector('i');
img.addEventListener('dblclick', function(){
    like.style.opacity = '1';
    like.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(function(){
        like.style.opacity = '0';
    },1000)
    setTimeout(function(){
        like.style.transform = 'translate(-50%,-50%) scale(0)';
    },1200)
})