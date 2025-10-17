/* Javascript Form Validation */

/* plain Js Validation */

/* javascript EventListerners */

/* What is addEventListners */

// addEventListener() is a Javascript method used to attech an event handler to an Element.

// syntax

// addEventListener(event , function , useCapture)

// const button = document.getElementById('btn')

// button.addEventListener("click" , function(){
//   alert("Button was clicked!!!!")
// })


/* passing data to a function */

// const button = document.getElementById('btn')

// button.addEventListener("mouseover" , () => {
//   console.log("Mouse Over Effect!!");
// })
// button.addEventListener("click" , () => {
//   console.log("Button Clicked!!")
// })
// button.addEventListener("mouseout" , () => {
//   console.log("Mouse Out Events!!!");
// })

// function showMessage(name){
//   console.log(`Hello,  ${name}`);
// }

// document.getElementById("btn").addEventListener("click" , function(){
//   showMessage("Javascript!!!")
// })

/* Work With input Field */

// const input = document.getElementById("username")

// input.addEventListener
// ("input" , () => {
//   console.log(input.value);
// })

/* Plain Js Validation */

// (() => {
//   const form = document.getElementById("demoform")
//   form.addEventListener("submit" , (e) => {
//     if(!form.checkValidity()){
//       e.preventDefault()
//       e.stopPropagation()
//     }else{
//       e.preventDefault()
//       plainJsHandler()
//     }
//   })
// })()

// (() => {
//   const form = document.getElementById("demoform")
//   form.classList.remove("")
// })()