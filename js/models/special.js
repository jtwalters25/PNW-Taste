var Special = function(title, price) {
  this.title = title,
  this.price = price;
}

/**
* Returns the formatted special text
*/
Special.prototype.getMessage = function(){
  return "Today is " + this.title + " for $" + this.price;
}
