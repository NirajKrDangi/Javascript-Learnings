// Build a feature for Store's inventory.
var Store = [
    { item: 'Shirt', priceUSD: 8 },
    { item: 'Shoes', priceUSD: 6 },
    { item: 'Jeans', priceUSD: 5 },
    { item: 'Watch', priceUSD: 10 },
    { item: 'Hat', priceUSD: 15 }
]

Store.map(function(element){
    console.log(`${element.item} : ${element.priceUSD*80}INR`);
})

// Shirt: 640INR
// Shoes: 480INR
// Jeans: 400INR
// Watch: 800INR
// Hat: 1200INR