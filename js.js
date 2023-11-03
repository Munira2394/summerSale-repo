let totalPriceBefore = document.getElementById("total-price-before");

let discountApplyBtn = document.getElementById("discount-apply-btn");

let totalBeforeNumber = Number(totalPriceBefore.innerText);

totalPriceBefore.addEventListener("input", () => {
  totalBeforeNumber = Number(totalPriceBefore.innerText);
  if (totalBeforeNumber > 200 || totalBeforeNumber == 200) {
    discountApplyBtn.removeAttribute("disabled");
  } else {
    discountApplyBtn.setAttribute("disabled", true);
  }
});
