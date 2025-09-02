/* Javascript String Methods */


// at(index)

{
  let str = "This is Javascript String Method."
         //  012345678901234567890123456789012
         //  123456789012345678901234567890123

  let atmethod = str.at(0)
  let atmethod1 = str.at(20)
  let atmethod2 = str.at(10)

  console.log(atmethod);
  console.log(atmethod1);
  console.log(atmethod2);

}


// charAt(index)


{
  let str = "This is Javascript String Method."

  let charAtMethod = str.charAt(0)
  let charAtMethod1 = str.charAt(20)
  let charAtMethod2 = str.charAt(33)

  console.log(charAtMethod);
  console.log(charAtMethod1);
  console.log(charAtMethod2);
}


// charCodeAt(index)

{
  let str = "This is Javascript String Method."

  let charCodeAtMethod = str.charCodeAt(0)
  let charCodeAtMethod1 = str.charCodeAt(25)

  console.log(charCodeAtMethod);
  console.log(charCodeAtMethod1);
}


// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

// {
//   let str1 = "Hello"
//   let str2 = "World"
//   let str3 = "!"

//   let str = str1.concat(str2 , str3)

//   console.log(str);
// }


// includes(searchString)
// includes(searchString, position)


// {
//   let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not faithfull."

//   let includesMethod = str.includes("My" , 10)
//   let includesMethod1 = str.includes("My" , -1)
//   let includesMethod2 = str.includes("My")

//   console.log(includesMethod);
//   console.log(includesMethod1);
//   console.log(includesMethod2);
// }


// indexOf(searchString)
// indexOf(searchString, position)

// {
//    let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not faithfull."
//           //  0123456789012

//    let indexOfMethod = str.indexOf("Dog")
//    let indexOfMethod1 = str.indexOf("T")
//    let indexOfMethod2 = str.indexOf("M" , 100)

//    console.log(indexOfMethod);
//    console.log(indexOfMethod1);
//    console.log(indexOfMethod2);
// }


// self Learning Methods

// lastIndexOf()
// repeat()
// search()
// toLowerCase()
// toString()
// toUpperCase()
// trim()
// trimEnd()
// trimStart()
// valueOf()