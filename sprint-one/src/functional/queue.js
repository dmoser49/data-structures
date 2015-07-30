var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstElement = 0;
  //var itemsRemoved =0;

  // Implement the methods below

  someInstance.enqueue = function(value){

    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > 0){
      size--;
      var element = storage[firstElement];
      delete storage[firstElement];
      if (size > 0) {
        firstElement++;
      }
    console.log(element)      //console.log(firstElement)
      return element;

    }

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

