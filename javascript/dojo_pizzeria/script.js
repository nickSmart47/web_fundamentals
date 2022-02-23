// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, 
// but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// Create 2 more pizzas with any toppings we like!

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = []
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log("First Pizza " + pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarrella", "feta"], ["mushrooms", "olives", "onions"]);

console.log("Second Pizza " + pizza2);

var whitePizza = pizzaOven("thin", "white", ["feta, mozzarrella"], ["spinach", "mushrooms"])

var bbqChickenPizza = pizzaOven("hand tossed", "barbecue", ["mozzarrella, cheddar"], ["chicken", "onions", "mushrooms"]  )