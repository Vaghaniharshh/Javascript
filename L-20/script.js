
// Number Object Methods and Examples

{

    let str = "123.456px";

    let numFloat = Number.parseFloat(str);
    let numInt = Number.parseInt(str);

    console.log("Parsed Float:", numFloat);
    console.log("Parsed Int:", numInt);

    console.log("Is Finite:", Number.isFinite(numFloat));

    console.log("Is Integer:", Number.isInteger(numFloat));
    console.log("Is Integer (123):", Number.isInteger(123));

    console.log("Is NaN:", Number.isNaN(NaN));

    console.log("Is Safe Integer:", Number.isSafeInteger(numInt));
    console.log("Is Safe Integer (big):", Number.isSafeInteger(9007199254740992));

    let num = 12345.6789;

    console.log("Exponential:", num.toExponential(2));

    console.log("Fixed (2):", numFloat.toFixed(2));

    console.log("Precision (4):", num.toPrecision(4));

    console.log("To String:", numInt.toString());
    console.log("Binary:", numInt.toString(2));
    console.log("Hexadecimal:", numInt.toString(16));

    let numberObj = new Number(500);
    console.log("Value Of:", numberObj.valueOf());

}