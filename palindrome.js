function palindrome(arr){

for(let num of arr){
    let numAsSting=String(num)
    let reversedStr = numAsSting.split("").reverse().join("")
    console.log(numAsSting == reversedStr)
}


}palindrome([123,323,421,121])