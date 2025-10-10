// Javascript Array Object

{
  let num = [1, 2, 3, 4];

  let num1 = num;

  let num2 = [...num];

  console.log(num);

  console.log(num1);

  console.log(num2);

  let result = num === num1;

  console.log(result);

  let array = [];

  console.log(array === num1);

  console.log(typeof []);

  console.log(typeof num);

  let newarray = new Array(1,2,3,4);

  console.log(newarray);

  let resultarray = newarray === num1;

  console.log(resultarray);
}
