function priceCalculate(productId, totalPriceId, productName, productList) {
  let productIdName = document.getElementById(productId);

  let prodPrice = Number(productIdName.innerText);

  //   calculating price without discount--
  let totalPriceBefore = document.getElementById(totalPriceId);

  let totalPriceNumberBefore = Number(totalPriceBefore.innerText);
  totalPriceBefore.innerText = totalPriceNumberBefore + prodPrice;

  // Purchase button handle-----
  let discountApplyBtn = document.getElementById("discount-apply-btn");
  let makePurchaseBtn = document.getElementById("make-purchase-button");
  if (totalPriceBefore.innerText > 0) {
    makePurchaseBtn.removeAttribute("disabled");
  }

  if (totalPriceBefore.innerText >= 200) {
    discountApplyBtn.removeAttribute("disabled");
  }

  // Purchase buttton done----

  //   produt price and name listing---

  let prodName = document.getElementById(productName);
  let product = document.getElementById(productList);
  let counter = product.children.length + 1;
  let productListing = document.createElement("ul");
  productListing.innerText = counter + " . " + prodName.innerText;
  product.appendChild(productListing);

  //   discount without coupon----
  let discount = document.getElementById("discount");
  let discountNumber = Number(discount.innerText);

  //  Final total Calculation---
  let totalAfter = document.getElementById("total");
  totalAfter.innerText = totalPriceNumberBefore + prodPrice - discountNumber;

  // Discount calculation----
  //   if (totalPriceNumber >= 200) {

  //     discountNumber = (20 / 100) * totalPriceNumber;
  //     discount.innerText = discountNumber;
  //   }
}

document
  .getElementById("discount-apply-btn")
  .addEventListener("click", function () {
    let totalPriceBefore = document.getElementById("total-price-before");
    let totalPriceBeforeNumber = Number(totalPriceBefore.innerText);
    let discount = document.getElementById("discount");
    let total = document.getElementById("total");
    let couponInput = document.getElementById("coupon-input");

    if (couponInput.value == "SELL200") {
      discount.innerText = (20 / 100) * totalPriceBeforeNumber;
      total.innerText =
        Number(totalPriceBefore.innerText) - Number(discount.innerText);
    }
  });

document.getElementById("go-home-btn").addEventListener("click", function () {
  let totalPriceBefore = document.getElementById("total-price-before");
  totalPriceBefore.innerText = "";
  let discount = document.getElementById("discount");
  discount.innerText = "";
  let total = document.getElementById("total");
  total.innerText = "";
  let couponInput = document.getElementById("coupon-input");
  couponInput.value = "";
  let productList = document.getElementById("product-list");
  productList.innerText = "";
});
