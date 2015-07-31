var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack._storage = {};
  newStack._size = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {};


stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
}

stackMethods.pop = function() {
  if (this._size > 0){
    this._size--;
    var element = this._storage[this._size];
    delete this._storage[this._size];

    return element;
  }
}

stackMethods.size = function() {
  return this._size;
}
