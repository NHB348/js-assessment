exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var c,i = start;
	function test()
	 {
	   if(start < end + 1)
	    {console.log(starttoString());}
		start = start + 1;
	}

        
     c = setInterval(test, 100);
        
    
    function cancel()
   {
       clearInterval(c);
    }
    
  }
};
