exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
     var result = [];
    
        var i = null;
        var length = str.length;
        var previous = null;
        for (i = 0; i < length; i += amount)
        {
            var current = str.charAt(i);
    
            if (current !== previous)
            {
                result.push(current);
            }
    
            previous = current;
        }
    
        return result.join("");

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
            
   return   str.split('').reverse().join('');
      
    

  }
};

