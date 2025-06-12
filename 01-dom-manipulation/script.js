//easy
//1.Select the <h1 id="main-heading"> and change its textContent to "My Awesome Shop".
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = "My Awesome Shop";
console.log(mainHeading.textContent);

//2.Select the <p class="tagline"> and change its innerHTML to "Find the <strong>best</strong> products here!".
const tagline = document.querySelector(".tagline");
tagline.innerHTML = "Find the <strong>best</strong> products here!";
console.log(tagline.innerHTML);

//3.Select the <footer>'s <p> and change its text to include your name and the current year.
const footerText = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footerText.textContent = `My name is Hruthik and year is ${currentYear} `;
console.log(footerText.textContent);

//medium
//1.Select the <main id="app-container">.
const mainContainer = document.getElementById("app-container");

//2.Create a new <h2> element. Set its textContent to "About Us".
const newHeading = document.createElement("h2");
newHeading.textContent = "About Us";
console.log(newHeading.textContent);

//3.Create a new <p> element. Set its textContent to "We are a small team passionate about quality products."
const newPara = document.createElement("p");
newPara.textContent = "We are a small team passionate about quality products.";
console.log(newPara.textContent);

//4.Append both the new <h2> and <p> to the <main> container.
mainContainer.appendChild(newHeading);
mainContainer.appendChild(newPara);

// Hard
// 1. Create a `div` element with a class of `contact-info`.
const conDiv = document.createElement("div");
conDiv.className = "contact-info";
console.log(conDiv.className);
// 2. Inside this `div`, create two `<p>` elements:
//     - The first with the text "Email: [contact@awesomeshop.com](mailto:contact@awesomeshop.com)".
//     - The second with the text "Phone: 123-456-7890".
const addEmail = document.createElement("p");
addEmail.textContent = "Email: contact@awesomeshop.com";
console.log(addEmail.textContent);

const addPhone = document.createElement("p");
addPhone.textContent = "Phone: 123-456-7890";
console.log(addPhone.textContent);

conDiv.appendChild(addEmail);
conDiv.appendChild(addPhone);
// 3. Select the `<footer>` element and use `insertBefore()` to place your new `contact-info` div *before* the footer.
const footer = document.querySelector("footer");
footer.parentNode.insertBefore(conDiv,footer);