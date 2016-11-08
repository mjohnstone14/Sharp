(function () {
  'use strict';

  angular
    .module('songmaker.admin')
    .controller('SongmakerAdminListController', SongmakerAdminListController);

  SongmakerAdminListController.$inject = ['SongmakerService'];

  function SongmakerAdminListController(SongmakerService) {
    var vm = this;

    vm.songmaker = SongmakerService.query();
  }
}());
