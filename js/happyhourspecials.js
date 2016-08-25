function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = new Special("Cosmo Sunday", 2.99, " Ciroc Vodka");
    weekday[1] = new Special("Moscow Mule Monday",2.99, " Grey Goose & Ginger Beer");
    weekday[2] = new Special("Martini Tuesday", 2.99, " 3 oz pour of Bombay Sapphire");
    weekday[3] = new Special("Manhattan Wednesday", 2.99, " Makers Mark");
    weekday[4] = new Special("Mojito Thursday", 2.99, " Bacardi");
    weekday[5] = new Special("Margherita Friday", 2.99, " Patron Silver");
    weekday[6] = new Special("Old Fashion Saturday", 2.99, " Knob Creek");

    var n = weekday[d.getDay()];
    document.getElementById("drinkSpecial").innerHTML = n.getMessage();
}
