function stack() {
  this.storage = {};
  this.count = 0;
}

stack.prototype.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
  return this.storage;
};
var newInstance = new stack();

stack.prototype.pop = function() {
  delete this.storage[--this.count];
  return this.storage;
};

stack.prototype.peek = function() {
  return this.storage[--this.count];
};
console.log(newInstance.push(3));
console.log(newInstance.push(4));
console.log(newInstance.push(5));
console.log(newInstance.peek());
