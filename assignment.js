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

document
  .querySelector(".buttons button[data-category='EVERYTHING']")
  .addEventListener("click", (event) => {
    const button = event.target;
    document.querySelectorAll(".product").forEach((product) => {
      if (
        product.getAttribute("data-category") === "men" ||
        product.getAttribute("data-category") === "women" ||
        product.getAttribute("data-category") === "accessories"
      ) {
        product.style.display = "block";
      } else if (product !== button) {
        product.style.display = "none";
      }
    });
  });

document
  .querySelector(".buttons button[data-category='accessories']")
  .addEventListener("click", (event) => {
    const button = event.target;
    document.querySelectorAll(".product").forEach((product) => {
      if (product.getAttribute("data-category") === "accessories") {
        product.style.display = "block";
      } else if (product !== button) {
        product.style.display = "none";
      }
    });
  });

document.querySelectorAll(".product").forEach((product) => {
  product.addEventListener("click", (event) => {
    const href = product.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
});

