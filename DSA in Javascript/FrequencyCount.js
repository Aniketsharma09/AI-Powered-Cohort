let str = ' hello kya hal chal ';
let s = str.replace(/\s+/g, "");
let feqCount = new Array(123).fill(0);
for(let i=0; i<s.length; i++){
    let asci = s.charCodeAt(i);
    feqCount[asci] = feqCount[asci] + 1;
}
for(let i=0; i<feqCount.length; i++){
    if(feqCount[i]>0){
        console.log(`${String.fromCharCode(i)}: ${feqCount[i]}`);
        
    }
}
