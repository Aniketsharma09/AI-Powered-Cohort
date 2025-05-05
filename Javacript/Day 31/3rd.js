// --------------------> Strong Number <----------------------
function strongNum(num) {
    let copy = num , sum = 0;
    while (num > 0) {
      let rem = num % 10;
      let fact = 1;
        for(let i=rem; i>0; i--){
            fact *= i;
        }
        sum += fact;
      num = Math.floor(num / 10);
    }
    if(copy == sum){
        console.log("Strong Number");
    }
    else{
        console.log("Not a Strong Number");
    }
  }
  let num = Number(prompt("Enter a Number"));
 strongNum(num);

  