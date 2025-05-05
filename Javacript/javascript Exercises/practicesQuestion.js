// // calculate Number of notes
// function calNoOfNotes(amount) {
//   const notes = [2000,500,200,100,50,20,10,5,2,1];
//   const noteCount = {};
//   for(let note of notes){
//     if(amount>=note){
//       noteCount[note] = Math.floor(amount/note);
//       amount %= note;
//     }
//   }
//   for(let note in noteCount){
//     console.log(`Number of ${note} is ${noteCount[note]}`);
//   }
// }
// let amount = Number(prompt("Enter the amount"));
// calNoOfNotes(amount);


// // movie ratings
// function findMovieRating(name, rating){
//   let mess = "";
//   let valid = false;
//   if(rating>0.0 && rating<2.0){
//     mess = "Floop";
//     valid = true;
//   }
//   else if(rating>2.0 && rating<=3.4){
//     mess = "Semi-hit"
//     valid = true;
//   }
//   else if(rating>3.4 && rating<=4.5){
//     mess = "Semi-hit"
//     valid = true;
//   }
//   else if(rating>4.5 && rating<=5.0){
//     mess = "Semi-hit"
//     valid = true;
//   }
//   else{
//     mess = "Invalid Input."
//   }
//   if(valid){
//     console.log(name+" is "+mess);
//   }
//   else{
//     console.error(mess);
//   }
// }
// let name = prompt("Eneter the Movie Name");
// let rating = Number(prompt("Eneter the Movie Rating")).toFixed(1);
// findMovieRating(name,rating);


// function findSalery(gender, yearOfService, qualification) {
//   let salary = 0;
//   if (gender == "male" && qualification == "post-graduate") {
//     if (yearOfService >= 10) {
//       salary = 15000;
//     }
//     else{
//       salary = 10000;
//     }
//   }
//   else if(gender == "male" && qualification == "graduate"){
//     if (yearOfService >= 10) {
//       salary = 10000;
//     }
//     else{
//       salary = 7000;
//     }
//   }
//   else if(gender == "female" && qualification == "post-graduate"){
//     if (yearOfService >= 10) {
//       salary = 12000;
//     }
//     else{
//       salary = 10000;
//     }
//   }
//   else if(gender == "female" && qualification == "graduate"){
//     if (yearOfService >= 10) {
//       salary = 9000;
//     }
//     else{
//       salary = 6000;
//     }E
//   }
//   console.log(salary);
// }
// let gender = prompt("Eneter your gender").toLowerCase();
// let yearOfService = Number(prompt("Eneter year of Service")).toFixed(1);
// let qualification = prompt("Enter your qualification").toLowerCase();
// findSalery(gender, yearOfService, qualification);
