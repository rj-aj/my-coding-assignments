//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
  
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }

  const stringArray = ["1", "cat", "2", "3", "4", "5", "6", "7", "8", "dog"];

  var _ = {
    map: function() {
      //code here;
    },
    reduce: function() { 
      // code here;
    },
    find: function() {   
      // code here;
    },
    filter: function() { 
      // code here;
    },
    reject: function() { 
      // code here;
    }
  }
 // you just created a library with 5 methods!
 