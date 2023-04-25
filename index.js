//For this project I will need to make an object for the contents of a survey, and then make modifications as needed. 
//First I will make the object and input the keys and values
const customer = {
  FirstName: "Jake",
  lastName: "Smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  FavFlavs: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
//Next I will modify the values as needed using brackets
customer["email"] = "Jak3Smith1992@email.com";
console.log(Object.values(customer)); //testing my method for modification
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["FavFlavs"] = ["coffee", "strawberry", "matcha"];
console.log(Object.values(customer)); //Testing output after all mods..
//Next I will delete keys that are deemed un-needed
delete customer["favoriteStore"];
delete customer["zipCode"];
console.log(Object.keys(customer)); //Test output after using delete method
//Then will add keys and values inside them that were requested using dot method
customer.toppings = ["chocolate sprinkles", " wafer straws", " gummy bears"];
customer.futureFlavs = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(Object.keys(customer), Object.values(customer)); //testing the output from this, also checking to see if previous method worked.
console.log(Object.keys(customer)); // Expected to print Array of Keys
