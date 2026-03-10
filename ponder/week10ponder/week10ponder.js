// 20260310
// https://wddbyui.github.io/wdd131/ponder/ponder_wk10.html


// SORT

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
console.log(simpleList);
console.log(simpleList.sort());
console.log(simpleList.sort(compareFn));

function compareFn(a,b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
 return 0;
}


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

function compareProducts(a,b) {
    // if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
    //     return -1;
    // } else if (a.productName.toLowerCase() > b.productName.toLowerCase()) {
    //     return 1;
    // }
    // return 0;
    if (a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    }
    return 0;
}
sortedProducts = products.sort(compareProducts);
console.log(sortedProducts);

// FILTER

const pattern = /[ae]/
const filterList = simpleList.filter((item) => {
    // return item.toLowerCase().includes('a') || item.toLowerCase().includes('e');
    return pattern.test(item.toLowerCase()); // same as above, just requires pattern.
});
console.log(filterList);

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];


const filteredProducts = products.filter((item) => {
    return item.price < 30;
});
console.log(filteredProducts);