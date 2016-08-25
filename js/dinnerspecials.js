function myFunction() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = new Special("Filet Mignon Sunday", 19.99, " Delicious House Made Mash Potatoes and Grilled Asparagus");
  weekday[1] = new Special("Surf and Turf Monday",19.99, " Ahi Tuna Served with an 8oz Sirloin ");
  weekday[2] = new Special(" Sable Fish Tuesday", 19.99, " Honey-miso Marinade, Namya Broth, Dungeness crab dumplings");
  weekday[3] = new Special(" Seafood and Steak Cobb Salad Wednesday", 19.99, " Shrimp, Crab Claws, Arugula and Lemon Thyme Vinegrette");
  weekday[4] = new Special(" King Salmon Thursday", 19.99, " Spinach and Mash Potatoes");
  weekday[5] = new Special(" Alaskan Halibut Friday", 19.99, " Refreshing Cucmber Relish and Sushi Rice");
  weekday[6] = new Special(" Prime Rib Saturday", 19.99, " Mash Potatoes and Sauteed Spinach");

  var n = weekday[d.getDay()];
  document.getElementById("Special").innerHTML = n.getMessage();
}
