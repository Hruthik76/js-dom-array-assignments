### **Assignment 1: DOM Manipulation Only**

**Folder:** `01-dom-manipulation`**Goal:** Practice selecting and modifying DOM elements without using any array data.

- Create a `script.js` file inside this folder.
- Add the `index.html` and `styles.css` files here.

### **Tasks:**

- **Easy:**
    1. Select the `<h1 id="main-heading">` and change its `textContent` to "My Awesome Shop".
       ![Screenshot 2025-06-12 160129](https://github.com/user-attachments/assets/e0a6742b-2200-4416-aedf-1d568c313199)
       
    3. Select the `<p class="tagline">` and change its `innerHTML` to "Find the <strong>best</strong> products here!".
       ![Screenshot 2025-06-12 160851](https://github.com/user-attachments/assets/0d66aa6f-0834-44db-8044-3d1ca6e71800)

    5. Select the `<footer>`'s `<p>` and change its text to include your name and the current year.
       ![Screenshot 2025-06-12 161554](https://github.com/user-attachments/assets/2e57be93-d1a5-4ffa-9349-41f9ca864dbb)

- **Medium:**
    1. Select the `<main id="app-container">`.
    2. Create a new `<h2>` element. Set its `textContent` to "About Us".
    3. Create a new `<p>` element. Set its `textContent` to "We are a small team passionate about quality products."
    4. Append both the new `<h2>` and `<p>` to the `<main>` container.
       ![Screenshot 2025-06-12 162951](https://github.com/user-attachments/assets/ec13ee39-b3f2-4004-89e1-a4476ebb417b)

- **Hard:**
    1. Create a `div` element with a class of `contact-info`.
    2. Inside this `div`, create two `<p>` elements:
        - The first with the text "Email: [contact@awesomeshop.com](mailto:contact@awesomeshop.com)".
        - The second with the text "Phone: 123-456-7890".
    3. Select the `<footer>` element and use `insertBefore()` to place your new `contact-info` div *before* the footer.
    4. ![Screenshot 2025-06-12 164811](https://github.com/user-attachments/assets/528ca066-8442-47e9-96d8-6e3f2ffff4ce)

### **Assignment 2: Array Methods Only**

**Folder:** `02-array-methods`**Goal:** Practice using `map`, `filter`, and `reduce`. For this assignment, you will **only** work in the JavaScript file and use `console.log()` to see your results. **Do not modify the DOM.**

- Create a `script.js` file inside this folder. Add the following data array to the top of your file.

```jsx
// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

```

### **Tasks:**

- **Easy:**
    1. **Filter:** Create a new array called `inStockProducts` that contains only the products that are `inStock`. Log it to the console.
    2. **Filter:** Create a new array called `bookProducts` that contains only the products in the "Books" category. Log it to the console.
       ![image](https://github.com/user-attachments/assets/ae9ebe03-c630-423c-b11f-55749b58778d)
       ![image](https://github.com/user-attachments/assets/c2b5acd6-1605-486d-a6d8-70d21b5201a4)
       ![image](https://github.com/user-attachments/assets/864d66ae-9e5a-4e2b-b51c-315225b20039)
       
- **Medium:**
    1. **Map:** Create a new array called `productNames` that contains only the names of the products. Log it to the console. (e.g., `['Laptop', 'Headphones', ...]`)
    2. **Map:** Create a new array of strings where each string is formatted as "Product Name - $Price". (e.g., `['Laptop - $1200', 'Headphones - $150', ...]`). Log it to the console.
       ![image](https://github.com/user-attachments/assets/1889f2cc-6761-4584-9b59-fe323f38bd4f)
       ![image](https://github.com/user-attachments/assets/31c8f4f6-5dfa-4970-9092-71ae98131ac3)

- **Hard:**
    1. **Reduce:** Calculate the total price of all products in the `products` array. Log the final number to the console.
    2. **Chaining Methods:** Create a new array that contains the names of all "Electronics" products that are currently in stock. You must do this by **chaining** the `filter` and `map` methods. Log the result to the console.
       ![image](https://github.com/user-attachments/assets/c14cf7bf-948b-4257-a3bb-94095b531bc2)
       ![image](https://github.com/user-attachments/assets/9e4f7ddb-a59a-483a-b09a-cf4ebfe15e2c)

### **Assignment 3: Combining DOM & Array Methods**

**Folder:** `03-dom-and-arrays-together`**Goal:** Use array methods to process data and then use DOM manipulation to display the results on the web page.

- Create a `script.js` file inside this folder.
- Add the `index.html` and `styles.css` files here.
- Copy the `products` array from Assignment 2 into the top of this `script.js` file.

### **Tasks:**

- **Easy:**
    1. Select the `<ul id="product-list">`.
    2. Use the `map` method on the `products` array to create an array of `<li>` HTML strings. Each string should contain the product's name. (e.g., `<li>Laptop</li>`).
    3. Set the `innerHTML` of the product list `<ul>` to the joined array of HTML strings.
       ![Screenshot 2025-06-13 000343](https://github.com/user-attachments/assets/38bd3dfc-9630-418f-99e8-e924327e6241)

- **Medium:**
    1. Filter the `products` array to get only the items that are `inStock`.
    2. For each of these in-stock products, create a full list item structure as a string:
        
        ```html
        <li class="product-item">
            <h3>Product Name</h3>
            <p>$Price</p>
        </li>
        
        ```
        
    3. Render these product items inside the `<ul id="product-list">`.
       ![Screenshot 2025-06-13 000343](https://github.com/user-attachments/assets/c43afac6-6d24-45b6-a54d-b4d3aa935c3d)

- **Hard:**
    1. Start by clearing any existing content in the `<ul id="product-list">`.
    2. Iterate over the **entire** `products` array.
    3. For each product, create an `<li>` element using `document.createElement()`.
    4. Create and append an `<h3>` for the product name and a `<p>` for the price to the `<li>`.
    5. **Conditionally** add a class:
        - If a product is `inStock: false`, add the class `out-of-stock` to the `<li>`.
        - Add a category-specific class to the `<li>` (e.g., `category-electronics`, `category-books`). You can find these in the CSS file.
    6. Append the fully constructed `<li>` to the `<ul id="product-list">`.
    7. **Bonus:** Use `reduce` to calculate the total value of all products currently in stock. Create a new `div` on the page to display this total (e.g., "Total Value of In-Stock Items: $XXXX").
    ![Screenshot 2025-06-13 000343](https://github.com/user-attachments/assets/f53eadfe-4df0-4f97-8889-23ce57052336)
