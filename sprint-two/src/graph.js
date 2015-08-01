

var Graph = function(){

  this.nodes = {};
  this.edges = [];

};

Graph.prototype.addNode = function(node){
  this.nodes[node] = node;
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]){
    return true
  }
  return false
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node]
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var doesHaveEdge = false;
  // for(var i= 0;i<this.edges.length;i++)

  _.each(this.edges, function(edge){

    // console.log('fromNode',fromNode,'toNode', toNode)
    // console.log('array',[fromNode, toNode])
  if (edge[0] === fromNode && edge[1] === toNode){
    doesHaveEdge = true
  }

})
  return doesHaveEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode])
  this.edges.push([toNode, fromNode])
  console.log(this.edges)
};
Graph.prototype.removeEdge = function(fromNode, toNode){
   _.each(this.edges, function(edge, i, collection){
     if(edge[0]===fromNode && edge[1] === toNode){
       collection.splice(i, 1)
     }
     if(edge[0]===toNode && edge[1] === fromNode){
       collection.splice(i, 1)
     }
   })
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



