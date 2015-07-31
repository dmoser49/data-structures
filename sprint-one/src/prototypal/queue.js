var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods)
  newQueue._storage= {};
  newQueue._size=0;
  newQueue._firstElement=0;

  return newQueue
};

var queueMethods = {};

queueMethods.enqueue = function (value){
  if(this._storage[this._size]){
    this._size++
    this._storage[this._size]= value;
  }
  else {
    this._storage[this._size]= value;
    this._size++
  }
}

queueMethods.dequeue = function () {
  if (this._size > 0){

    var element = this._storage[this._firstElement];
    delete this._storage[this._firstElement];
    this._size--;
  }
  if (this._size > 0){
    this._firstElement++
  }

  if (this._size===0){
    this._firstElement=0;
  }
    return element

}

queueMethods.size = function (){
  return this._size;
}



