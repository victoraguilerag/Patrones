﻿var mySingleton = (function () {
   // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
    // Singleton
    // Private methods and variables
    function privateMethod(){
        print( "I am private" );
    }
    var privateRandomNumber = Math.round(Math.random()*1000);
 
    return {
      // Public methods and variables
      publicMethod: function () {
		  privateMethod();
        print( "The public can see me!" );
      },
      publicProperty: "I am also public",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
 
  };
 
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
 
})();

// Usage:
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
//singleA.publicMethod();
//singleA.privateMethod();
print( singleB.getRandomNumber() );
print(" es el mismo?? " + (singleA.getRandomNumber() === singleB.getRandomNumber()) ); // true
