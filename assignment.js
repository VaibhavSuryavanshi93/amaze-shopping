// Add event listeners to nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = this.getAttribute("data-category");
    document.querySelectorAll(".product").forEach((product) => {
      if (
        category === "all" ||
        product.getAttribute("data-category") === category
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Add event listeners to poster buttons
document
  .querySelector(".buttons button[data-category='EVERYTHING']")
  .addEventListener("click", () => {
    document.querySelectorAll(".product").forEach((product) => {
      product.style.display = "block";
    });
  });

document
  .querySelector(".buttons button[data-category='accessories']")
  .addEventListener("click", () => {
    document.querySelectorAll(".product").forEach((product) => {
      if (product.getAttribute("data-category") === "accessories") {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

// Add event listeners to products for redirection
document.querySelectorAll(".product").forEach((product) => {
  product.addEventListener("click", () => {
    window.location.href = product.getAttribute("href");
  });
});
