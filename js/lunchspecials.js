function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = new Special("Crab Cake Sunday", 12.99, " Delicious Dungeness Crab");
    weekday[1] = new Special("Shrimp Scampi Monday",12.99, " Tasty Jumbo Prawns Tossed with Angel Hair Pasta ");
    weekday[2] = new Special("Fish Taco Tuesday", 12.99, " Fresh Rock Fish and Corn Tortillas");
    weekday[3] = new Special("Ahi Tuna Wednesday", 12.99, " Seared Ahi Tuna");
    weekday[4] = new Special("King Salmon Thursday", 12.99, " Fresh Alaskan King Salmon");
    weekday[5] = new Special("Halibut Friday", 12.99, " Refreshing Cucmber Relish and Sushi Rice");
    weekday[6] = new Special("Mussels Diavlo Saturday", 12.99, " Spicy Tomato Vodka Sauce");

    var n = weekday[d.getDay()];
    document.getElementById("Special").innerHTML = n.getMessage();
}
