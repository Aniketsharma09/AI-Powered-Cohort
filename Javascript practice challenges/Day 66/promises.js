// Practice 3 
// random Success And failer
function toss(){
   return new Promise((res,rej)=>{
        let random = Math.random();
        setTimeout(()=>{
            if( random > 0.5) res("Head");
            else rej("Tail");
        },1000)
    })
}

let promisArr = [toss(),toss(),toss()];
Promise.allSettled(promisArr)
.then(results=>{
    let head = 0, tail = 0;
    results.forEach(result=>{
        if(result.status == 'fulfilled'){
            console.log(result.value);
            head++;
        }
        else{
            console.log(result.reason);
            tail++;
        }
    })
    console.log("Head Comes " + head + "  and Tail Comes "+tail+" Times");
})
    
    
