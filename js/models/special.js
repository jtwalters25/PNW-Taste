var Special = function(title, price, recipe) {
  this.title = title,
  this.price = price,
  this.recipe = recipe;
}

/**
* Returns the formatted special text
*/
Special.prototype.getMessage = function(){
  return "Today is " + this.title + " for $" + this.price + " Includes " + this.recipe;
}
