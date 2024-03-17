function product(n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

let x = new product("iPhone", 90999, "⭐⭐⭐⭐");
console.log(x);

/**
 * 1. this keyword is javascript is different than other language
 * 2. this keyword refers to the context from where we called
 * 
 *   In the function constructor also
 * - if you return primitive it is ignored and we return the object referred by this
 * - if you return a custom object, then the custom object is returned 
 * - if you don't return anything, then object referred by this is returned
 */