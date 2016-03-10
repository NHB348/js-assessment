exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
     fn.sayItCalled = true;
	 return fn(arr[0],arr[1],arr[2]);
  },

  speak : function(fn, obj) {
    return fn(obj);
  },

  functionFunction : function(str) {
      
  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {
      var c = fn(str1, str2,"!!!");
	
	  return (function() {return c;})
      fn.sayItCalled = true;
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
