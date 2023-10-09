function solve(arr){

    for(let curNum of arr){
        let isPalindrome = checkIsPalindrome(curNum)
        console.log(isPalindrome)
    }
function checkIsPalindrome(num){
let numString=String(num)
let reversedNumStr = ""

for(let i = numString.length - 1 ; i >=0;i--){
    let churChar= numString[i]
    reversedNumStr += churChar
}
let isPalindrome = numString == reversedNumStr
return isPalindrome;
}


}solve([123,323,421,121])