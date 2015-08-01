var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods)

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value))
};

treeMethods.contains = function (target){
    var isFound = false
    var checkValue = function (node){

      for (var i = 0;i<node.children.length;i++){
        if(node.children[i].value===target){
          isFound = true
        }
        else if(node.children[i].children){
          checkValue(node.children[i])
        }
      }
    }
    checkValue(this);
    return isFound;
  }


/*
 * Complexity: What is the time complexity of the above functions?
 */
