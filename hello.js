define(function(require,exports,module){
    var $ = require('jquery');
    exports.sayHello = function(){
        $("#hello").toggle('slow');

   };
});
