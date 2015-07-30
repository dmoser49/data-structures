var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack._size = 0;
  newStack._storage= {};
  _.extend(newStack, stackMethods);
  //console.log(newStack.size)

  return newStack;
};
stackMethods ={};

// var stackMethods = {
//    push: function (value){
//      this[size]= value;
//      this.size++new
//    },
//    pop: function (){
//      if (this.size > 0){
//        var element = this[size];
//        delete this[size];
//        this.size--
//        return element
//      }

//    },
//    size: function (){
//      return this.size;
//    }

// ;

stackMethods.push = function (value){
      this._storage[this._size]= value;
      this._size++;
   }
stackMethods.pop = function (){
     if (this._size > 0){
       this._size--
       var element = this._storage[this._size];
       delete this._storage[this._size];

       return element
     }
  }
stackMethods.size = function (){
     return this._size;
   }



