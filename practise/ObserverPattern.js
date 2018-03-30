


var MyNotifier = function() {
    return {
      initObserver: function() {
        this.myObservers = [];
      },
      addObserver: function(myObserver) {
        this.myObservers.push(myObserver);
      },
      notifyObserver : function(observer) {
        var index = this.myObservers.indexOf(observer)
        this.myObservers[index].notify(index);
      }
    }
  }
  
  var MyObserver = function() {
    return {
      notify: function(index) {
        console.log("Observer Nottified of index " + index);
      }
    }
  }
  
  var myNotifier = new MyNotifier();
  
  var myObserver1 = new MyObserver();
  var myObserver2 = new MyObserver();
  var myObserver3 = new MyObserver();
  var myObserver4 = new MyObserver();
  
  myNotifier.initObserver();
  
  myNotifier.addObserver(myObserver1);
  myNotifier.addObserver(myObserver2);
  myNotifier.addObserver(myObserver3);
  myNotifier.addObserver(myObserver4);
  
  myNotifier.notifyObserver(myObserver3); // Observer notified of index 2
  

var printer = (function () {

  var printerInstance;

  function create () {

    function print() {
      // underlying printer mechanics
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() {
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

  

})();