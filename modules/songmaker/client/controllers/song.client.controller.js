(function () {
  'use strict';

  angular
    .module('songmaker')
    .controller('SongmakerController', SongmakerController);

  SongmakerController.$inject = ['$scope', 'songResolve', 'Authentication'];

  function SongmakerController($scope, song, Authentication) {
    var vm = this;

    vm.song = song;
    vm.authentication = Authentication;

  }
}());
