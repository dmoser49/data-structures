var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstElement=0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    console.log('storage before enqueue:', storage, 'size before:',size)
    if(storage[size]){
      size++;
      storage[size]=value;
    }
    else{
      storage[size]=value;
      size++;
  }


    console.log('storage after enqueue:', storage, 'size after:',size)
    };

  someInstance.dequeue = function(){
    if (size > 0){
      console.log('storage before dequeue:', storage, 'size before:',size)

      var element = storage[firstElement]
      delete storage[firstElement]
      size--;
      if (size > 0){
        firstElement++;
      }
      if (size === 0){
        firstElement = 0;
      }
      console.log('storage after dequeue:', storage,'size after:',size)

      return element;

    }
  }


  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

