var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item)
  console.log('this._storage',this._storage)
  console.log('item', item)
};

setPrototype.contains = function(item){
  var found = false
  _.each(this._storage, function(element){
    if(element===item){
      found = true
    }

  })
  return found
};

setPrototype.remove = function(item){
  _.each(this._storage, function(element, i, collection){
    if (element === item){
      collection.splice(i, 1)
    }
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
