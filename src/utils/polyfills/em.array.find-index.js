//https://github.com/bkjain655/medium/blob/development/js/polyfills/array.findIndex/index.js
/**
 * Array findIndex method
 * findIndex method is used to find Index of specific data from an Array.
 * e.x. : This can be used when we want to reorder the List of Data by changing the order property of the JSON
 *
 * findIndex method is an ES6 method which is supported in all the latest browsers, but if you still want to support in Legacy browsers like IE8 or IE9 or IE10
 * Then we can use polyfills library.
 *
 * findIndex takes a callback  & thisArg as an argument.
 * callback = (currentVal, index, arr) => currentVal
 *
 * findIndex method returns the index of the first element from an Array which satisified the condition else it returns -1.
 */

Array.prototype.findIndex = function(callback, thisArg) {
  if(!callback || typeof callback !== 'function') {
    throw TypeError();
  }
  const size = this.length;
  const that = thisArg || this;
  for(var i = 0; i < size; i++) {
    try {
      if(callback.apply(that,[ this[i], i, this ])) {
        return i;
      }
    } catch(e) {
      return -1;
    }
  }
  return -1;
};