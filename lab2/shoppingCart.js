//////////////////
//// TASK ONE ////
//////////////////
let shoppingCart = [];

// ADDS AND ITEM TO
function addItem(item) {
  shoppingCart.push(item);
}

function removeLastItem(item) {
if (shoppingCart.length > 0) {
    shoppingCart.pop();
  } else {
    console.log("No items to remove.");
  }

  
}

function displayList() {
  if (shoppingCart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    console.log("Your shopping cart contains:");
    shoppingCart.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

//////////////////
//// TASK TWO ////
//////////////////

function addItemNotInShoppingCart(item) {
  if (shoppingCart.includes(item)) {
    console.log(`${item} is already in your shopping cart.`);
    return;
  }
  shoppingCart.push(item);
}

function filterItems(searchTerm) {
  if (searchTerm === "") {
    console.log("Please enter a search term.");
    return;
  }
  const filteredItems = shoppingCart.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (filteredItems.length === 0) {
    console.log(`No items found for search term: ${searchTerm}`);
  } else {
    console.log(`Items found for search term "${searchTerm}":`);
    filteredItems.forEach((item) => console.log(item));
  }
}

//////////////////
//// TASK THREE //
//////////////////

let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let listContainer = document.getElementById("cartList");

addItemButton.addEventListener("click", function () {
  let item = document.getElementById("itemInput").value;
  if (item) {
    addItem(item);
    let listItem = document.createElement("li");
    listItem.textContent = `${item}`;
    listContainer.appendChild(listItem);
    document.getElementById("itemInput").value = ""; // Clear input field
}
});

removeItemButton.addEventListener("click", function () {
    removeLastItem();
    listContainer.removeChild(listContainer.lastChild);
});


