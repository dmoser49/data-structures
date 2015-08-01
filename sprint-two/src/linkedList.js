var LinkedList = function(){
  var list={}
  list.head = null;
  list.tail = null;
  list.nextToLast= null;

  list.addToTail = function(element){
    var newNode = Node(element)
    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
      list.nextToLast = newNode;
    }
    list.nextToLast = list.tail;
    list.tail = newNode;
    list.nextToLast.next = list.tail.value;
  };

  list.removeHead = function(){
    var formerHead = list.head.value;
    var second = list.head.next;
    list.head = Node(second);

    return formerHead;
  };

  list.contains = function(target){

    /////////////////////
    var checkValue = function (node){
      if (node.value===target){
        return true
      }
      else if(node.next===null){
        return false
      }
      else {

        return checkValue(Node(node.next))
      }

    }
      return checkValue(list.head)
  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
