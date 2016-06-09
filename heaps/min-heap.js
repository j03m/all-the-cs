//http://geeksquiz.com/binary-heap/
function MinHeap(capacity){
    this.capacity = capacity;
    this.nodes = [];
}

MinHeap.prototype = {
    get size(){
        return this.nodes.length;
    }
};

// It returns the root element of Min Heap. Time Complexity of this operation is O(1).
MinHeap.prototype.min = function(){
    return this.nodes[0];
};

// Removes the minimum element from Min Heap.
// Time Complexity of this Operation is O(Logn)
// as this operation needs to maintain the heap property (by calling heapify()) after removing root.
MinHeap.prototype.extractMin = function(){
    var n = this.nodes[0];
    this.nodes[0] = undefined;
    this.heapify();
    return n;
};

MinHeap.prototype.heapify = function(){

};

//Decreases value of key. Time complexity of this operation is O(Logn).
// If the decreases key value of a node is greater than parent of the node,
// then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.
MinHeap.prototype.decreaseKey = function(){

};

MinHeap.prototype.insert = function(data, value){
    this.nodes.push({data:data, value:value});
    this.heapify();
};

MinHeap.prototype.delete = function(index){
    this.decreaseKey(index);
};

MinHeap.prototype.left = function(index){
    return this.nodes[2*index + 1];
};

MinHeap.prototype.right = function(index){
    return this.nodes[2*index + 2];
};

MinHeap.prototype.parent = function(index){
    return this.nodes[index - 1 / 2];
};

module.exports = MinHeap;

