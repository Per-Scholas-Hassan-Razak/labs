function calulateTotalCost(price, quantity, taxRate) {
    if (
      typeof price !== "number" ||
      typeof quantity !== "number" ||
      typeof taxRate !== "number" ||
      price < 0 ||
      quantity < 0 ||
      taxRate < 0
    ) {
      return "Invalid input";
    }
  let totalCost = price * quantity * (1 + taxRate);
  return totalCost.toFixed(2);
}

console.log(calulateTotalCost(100, 2, 0.05)); // Output: 210.00
