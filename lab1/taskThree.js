function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "Eligible for the program";
  } else if (age > 18 && !isEmployed) {
    return "Eligible for the program but needs employment";
  } else {
    return "Not eligible for the program";
  }
}

// Example usage:
console.log(checkEligibility(20, true));  // "Eligible for the program"
console.log(checkEligibility(20, false)); // "Eligible for the program but needs employment"
console.log(checkEligibility(17, true));  // "Not eligible for the program"                 
