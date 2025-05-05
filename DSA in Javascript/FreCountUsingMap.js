let str1 = "hello kya hal chal bhaio";
let str = str1.replace(/\s+/g,'');
let map = new Map();
for(let i=0; i<str.length; i++){
    let ch = str.charAt(i);
    if(map.has(ch)){
        map.set(ch,map.get(ch)+1);
    }
    else map.set(ch,1);
}
let sortedArr = [...map.entries()].sort((a,b)=>a[0].localeCompare(b[0]));
let sortedMap = new Map(sortedArr);
console.log(sortedMap);

