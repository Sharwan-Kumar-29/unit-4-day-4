const productList = [];

// DOM Elements
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productRatingInput = document.getElementById("product-rating");
const addProductButton = document.getElementById("add-product");
const priceGraph = document.getElementById("price-graph");
const ratingGraph = document.getElementById("rating-graph");
const sortPriceButton = document.getElementById("sort-price");
const sortRatingButton = document.getElementById("sort-rating");

// Event listener for adding a product
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value;
  const price = parseFloat(productPriceInput.value);
  const rating = parseFloat(productRatingInput.value);

  if (name && price > 0 && rating >= 0) {
    productList.push({ name, price, rating });
    updateGraphs();
    clearInputs();
  }
});

// Event listener for sorting by price
sortPriceButton.addEventListener("click", () => {
  productList.sort((a, b) => a.price - b.price);
  updateGraphs();
});

// Event listener for sorting by rating
sortRatingButton.addEventListener("click", () => {
  productList.sort((a, b) => a.rating - b.rating);
  updateGraphs();
});

// Function to update the graphs
function updateGraphs() {
  clearGraphs();
  createGraph(priceGraph, "price", "Price");
  createGraph(ratingGraph, "rating", "Rating");
}

// Function to create bar graph dynamically
function createGraph(graphElement, property, label) {
  productList.forEach((product) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${product[property] * 3}px`; // Scale bar height
    bar.innerHTML = `<div class="label">${product[property]}</div>`;
    graphElement.appendChild(bar);
  });
}

// Function to clear the input fields
function clearInputs() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productRatingInput.value = "";
}

// Function to clear the graph before updating
function clearGraphs() {
  priceGraph.innerHTML = "";
  ratingGraph.innerHTML = "";
}
