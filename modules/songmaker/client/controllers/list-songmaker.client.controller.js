(function () {
  'use strict';

  angular
    .module('songmaker')
    .controller('SongmakerListController', SongmakerListController);

  SongmakerListController.$inject = ['SongmakerService'];

  function SongmakerListController(SongmakerService) {
    var vm = this;

    vm.songmaker = SongmakerService.query();
  }
}());
