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
}
customer["email"] = "Jak3Smith1992@email.com";
console.log(Object.values(customer))
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["FavFlavs"] = ["coffee", "strawberry", "matcha"];
console.log(Object.values(customer))
delete customer["favoriteStore"];
delete customer["zipCode"];
console.log(Object.keys(customer))
customer.toppings = ["chocolate sprinkles", " wafer straws", " gummy bears"];
customer.futureFlavs = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(Object.keys(customer) , Object.values(customer)) //testing the output from this
console.log(Object.keys(customer)) // Expected to print Array of Keys
