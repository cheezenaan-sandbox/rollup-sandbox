var hoge = (function () {
  'use strict';

  var Sound = /** @class */function () {
      function Sound() {}
      Sound.prototype.euphonium = function () {
          return 'Sound! Euphonium';
      };
      Sound.prototype.find = function () {
          return [1, 2, 3].find(function (n) {
              return n === 2;
          });
      };
      return Sound;
  }();
  var sound = new Sound();
  sound.euphonium();
  sound.find();

  return Sound;

}());
