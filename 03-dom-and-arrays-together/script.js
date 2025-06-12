// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

//easy
//1
const productList = document.getElementById("product-list");

//2
const productNames = products.map(product => `<li>${product.name}</li>`);

//3
productList.innerHTML = productNames.join("");

//Medium

const filterProducts = products.filter(product=>product.inStock)
.map(product => `
    <li class="product-item">
    <h3>${product.name}</h3>
    <p>${product.price}<p>
</li>`
);

productList.innerHTML = filterProducts.join("");


// //Hard
// const productList = document.getElementById("product-list");
// productList.innerHTML = "";

// products.forEach(product => {
//     const li = document.createElement("li");
//     li.classList.add("product-item");

// //add product name
// const Name = document.createElement("h3");
// Name.textContent = product.name;
// li.appendChild(Name);

// //price
// const Price = document.createElement("p");
// Price.textContent = `${product.price}`;
// li.appendChild(Price);

// //conditional
// if(!product.inStock){
//     li.classList.add("out of stock");
// }

// const categoryClass = `category-${product.category.toLowerCase().replace(" ", "-")}`;
// li.classList.add(categoryClass);

// productList.appendChild(li);
// });

// //bonus

// const stocks = products.filter(product => product.inStock)
// .reduce((sum,product) => sum + product.price,0);

// const totalDiv = document.createElement("div");
// totalDiv.textContent = `Total Value of In-Stock Items: $${totalInStockValue}`;
// totalDiv.style.marginTop = "20px";
// totalDiv.style.fontWeight = "bold";
// totalDiv.style.textAlign = "center";
// document.body.appendChild(totalDiv);