(function () {
  'use strict';

  angular
    .module('songmaker')
    .controller('DropdownProgressionsCtrl', DropdownProgressionsCtrl)
    .controller('DropDownKeyCtrl', DropDownKeyCtrl)
    .controller('SongmakerListController', SongmakerListController);

  SongmakerListController.$inject = ['SongmakerService'];

  function DropdownProgressionsCtrl() {
    var vm = this;
    vm.title = 'Progressions';
    vm.progressions = [
      { name: 'Pop', progression: 'I-IV-V', numprog: [1, 4, 5], minors: [] },
      { name: 'Pop 2', progression: 'I-V-IV', numprog: [1, 5, 4], minors: [] },
      { name: 'Fifties', progression: 'I-vi-IV-I', numprog: [1, 6, 4, 1], minors: [6] },
      { name: 'Rocky', progression: 'I-vi-IV-V', numprog: [1, 6, 4, 5], minors: [6] }
    ];

    vm.setCurrent= function(val) {
         vm.current = val;
    }
  }

  function DropDownKeyCtrl() {
    var vm = this;
    vm.title = 'Keys';
    vm.keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    vm.setCurrent= function(val) {
         vm.current = val;
    }

  }

  function SongmakerListController(SongmakerService) {
    var vm = this;
    vm.songmaker = SongmakerService.query();
  }

/*
  function CreateButtonController(progression, key) {
    var vm = this;
    vm.scale = ['A','B','C','D','E','F','G'];

    if(progression.length === 0) // then do random progression
    if(key.length === 0) //do random key
    if(key === 'A') {
      for(int i = 0; i < progression.length; i++) {
        progression[i] = vm.scale[progression[i]]; //the number in the progression is replaced with a letter
      }
    }

  } */

}());
