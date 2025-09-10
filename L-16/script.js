// Javascript Functions

{
    function checkNumber(num) {
        if (num > 0) {
            return num + " is Positive";
        } else if (num < 0) {
            return num + " is Negative";
        } else {
            return "It is Zero";
        }
    }

    console.log(checkNumber(10))
    console.log(checkNumber(-5))
    console.log(checkNumber(0))

}


// Javascript Arrow Function

{
    const checknumber = (num) => {
        if (num > 0) {
            return num + " is Positive";
        } else if (num < 0) {
            return num + " is Negative";
        } else {
            return "It is Zero";
        }
    }

    console.log(checkNumber(10))
    console.log(checkNumber(-5))
    console.log(checkNumber(0))
}