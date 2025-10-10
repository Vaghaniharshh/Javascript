{
    let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 },
  { name: "Phone", price: 22000 },
  { name: "Monitor", price: 12000 }
];

//  indexOf & lastIndexOf 
let productNames = products.map(p => p.name);
console.log("First 'Phone' index:", productNames.indexOf("Phone"));      
console.log("Last 'Phone' index:", productNames.lastIndexOf("Phone"));  

//  forEach 
console.log("\nAll product details:");
products.forEach(p => console.log(`${p.name} - ₹${p.price}`));

//  find & findLast 
let expensiveFirst = products.find(p => p.price > 20000);
console.log("\nFirst expensive product (>20000):", expensiveFirst);

let expensiveLast = products.findLast(p => p.price > 20000);
console.log("Last expensive product (>20000):", expensiveLast);

//  findIndex & findLastIndex 
let cheapFirstIndex = products.findIndex(p => p.price < 20000);
console.log("\nIndex of first cheap product (<20000):", cheapFirstIndex);

let cheapLastIndex = products.findLastIndex(p => p.price < 20000);
console.log("Index of last cheap product (<20000):", cheapLastIndex);

}