const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

// - **Easy:**    
// 1. **Filter:** Create a new array called `inStockProducts` that contains only the products that are `inStock`. Log it to the console.
const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);
// 2. **Filter:** Create a new array called `bookProducts` that contains only the products in the "Books" category. Log it to the console.
const bookProducts = products.filter(product => product.category=="Books");
console.log(bookProducts);


// * - **Medium:**
  //  1. **Map:** Create a new array called `productNames` that contains only the names of the products. Log it to the console. (e.g., `['Laptop', 'Headphones', ...]`)
const productNames = products.map(product => product.name);
console.log(productNames);
//2. **Map:** Create a new array of strings where each string is formatted as "Product Name - $Price". (e.g., `['Laptop - $1200', 'Headphones - $150', ...]`). Log it to the console.
const ProductName = products.map(product => `${product.name} - ${product.price}`);
console.log(ProductName);

//Hard:
// 1. **Reduce:** Calculate the total price of all products in the `products` array. Log the final number to the console.
const totalPrice = products.reduce((accumulator,currentValue) => {
    return accumulator + currentValue.price
},0);
 console.log(`the total price is ${totalPrice}`);  
//2. **Chaining Methods:** Create a new array that contains the names of all "Electronics" products that are currently in stock. You must do this by **chaining** the `filter` and `map` methods. Log the result to the console.
const ChainingMethods = products
.filter(product => product.category === "Electronics" && product.inStock)
.map(product => product.name);
console.log(ChainingMethods);