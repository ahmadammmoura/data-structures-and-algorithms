class Node{
  constructor(value, parent = null, children = []){
    this.value = value;
    this.parent = parent;
    this.children = children;
  }
}


module.exports = Node;
