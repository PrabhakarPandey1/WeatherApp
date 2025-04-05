// const numbers = [5, 10, 15, 20, 25];
// // let sum = numbers.map(function(el){
// //   return el+el;
// // })
// let sum2 = numbers.reduce((current,previous)=>
//   previous+current,0)
// console.log(sum2);

// let add = 0;
// let sum = numbers.filter((el)=>{
//   if(el%2==0){
//     add+=el;
//   }
 
// })
// console.log(add);

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 15 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 700, stock: 30 },
  { id: 3, name: "Headphones", category: "Accessories", price: 100, stock: 50 },
  { id: 4, name: "Desk Chair", category: "Furniture", price: 150, stock: 10 },
  { id: 5, name: "Water Bottle", category: "Home", price: 25, stock: 100 },
  { id: 6, name: "Backpack", category: "Accessories", price: 80, stock: 25 },
  { id: 7, name: "LED Monitor", category: "Electronics", price: 300, stock: 8 },
  { id: 8, name: "Wireless Mouse", category: "Electronics", price: 50, stock: 40 },
  { id: 9, name: "Notebook", category: "Stationery", price: 10, stock: 200 },
  { id: 10, name: "Yoga Mat", category: "Fitness", price: 40, stock: 20 },
];


let filter = products.filter((el)=>(el.price>150)
).map((el)=>el.price*el.stock).reduce((currentprice,previous)=>currentprice+previous,0)
console.log(filter);

let give = products.filter((el)=>el.id===5)

console.log(give);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = 0;
for(let fal= 0 ;fal<fruits.length;fal++){
    if(fruits[fal]==="apple"){
        count++;
    }}

    console.log(count)
// Output: { apple: 3, banana:2, orange: 1 }

const listCont = document.querySelector(".container");

products.map((el)=>{
    listCont.innerHTML+=`<h3 class="list-name">${el.name}</h3>
        <h3 class="list-cat">${el.category}</h3>
        <h3 class="list-price">${el.price}</h3>
        <h3 class="list-stock">${el.stock}</h3>`
})