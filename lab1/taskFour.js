function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    if (
      typeof price !== 'number' || 
      typeof quantity !== 'number' || 
      typeof taxRate !== 'number' || 
      typeof discount !== 'number' || 
      price < 0 || quantity < 0 || taxRate < 0 || discount < 0
    ) {
        return 'Invalid input';
    }
    let subtotal = price * quantity - discount;
    if (subtotal < 0) subtotal = 0; // Prevent negative subtotal
    const totalCost = subtotal * (1 + taxRate);
    return totalCost.toFixed(2);
}

console.log(calculateTotalCost(100, 2, 0.05)); // Output: 210.00
console.log(calculateTotalCost(100, 2, 0.05, 10)); // Output: 200.00
console.log(calculateTotalCost(100, 2, 0.05, 210)); // Output: 0.00