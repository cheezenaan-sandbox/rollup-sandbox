var hoge = (function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Sound = function () {
    function Sound() {
      classCallCheck(this, Sound);
    }

    createClass(Sound, [{
      key: 'euphonium',
      value: function euphonium() {
        return 'Sound! Euphonium';
      }
    }, {
      key: 'find',
      value: function find() {
        return [1, 2, 3].find(function (n) {
          return n === 2;
        });
      }
    }]);
    return Sound;
  }();


  var sound = new Sound();

  sound.euphonium();
  sound.find();

  return Sound;

}());
