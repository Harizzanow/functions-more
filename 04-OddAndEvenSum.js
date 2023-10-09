function solve(num){

let evenSum=0;
let oddSUm = 0 ;
 let numAsString = num.toString()
for(let char of numAsString){
  let digit = Number(char)
  if(digit % 2==0){
    evenSum +=digit
  }else{
    oddSUm +=digit
  }
}
console.log(`Odd sum = ${oddSUm}, Even sum = ${evenSum}`)
}solve(1000435)