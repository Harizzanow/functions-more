function passwordValidator(pass) {
    // The length should be 6 - 10 characters (inclusive)
    // · It should consist only of letters and digits
    // · It should have at least 2 digits

    // "Password must be between 6 and 10 characters"
    //"Password must consist only of letters and digits"
    //"Password must have at least 2 digits"
let isValidLength = testLengthPass(pass)
let isOnlyLettersDigits = testOnlyLettersDigits(pass)
let min2Digits = testMin2Digits(pass)
if(isValidLength && isOnlyLettersDigits && min2Digits){
    console.log("Password is valid")
}

    function testLengthPass(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true
        } else {
            console.log("Password must be between 6 and 10 characters")
            return false
        }

    }
    function testOnlyLettersDigits(pass) {
        for (let curChar of pass) {
            let code = curChar.charCodeAt(0)
            if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 95 && code <= 122))) {
                console.log("Password must consist only of letters and digits")
                return false
            }
        }
        return true
    }
    function testMin2Digits(pass){
        let digits = 0
        for(let char of pass){
            let code = char.charCodeAt()
            if(code >=48 && code <=57){
                digits ++
            }
        }
        if(digits <2){
            console.log("Password must have at least 2 digits")
            return false

        }else{
        return  true
        }
    }


} passwordValidator('logIn')
//passwordValidator('Pa$s$s')