var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstElement = 0;
  //var itemsRemoved =0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    console.log('storage before',storage[size])

    storage[size] = value;
    size++;
    console.log('storage after',storage[size])
  };

  someInstance.dequeue = function(){
    if (size > 0){
      var element = storage[firstElement];
      delete storage[firstElement];
      firstElement++;
      size--;

    console.log(storage, element)
      return element;

    }

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

