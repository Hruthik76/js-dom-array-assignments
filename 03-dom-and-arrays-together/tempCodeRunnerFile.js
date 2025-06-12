//Hard
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