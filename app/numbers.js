exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
     return  parseInt( str.split('').join(''), 2 );
  },

  convertToBinary: function(num) {
     var oct = parseInt(num, 8);
	 return (oct >>> 0).toString(2);
  },

  multiply: function(a, b) {
      var commonMultiplier = 1000000;

    a *= commonMultiplier;
    b *= commonMultiplier;

    return (a * b) / (commonMultiplier * commonMultiplier);

  }
};
