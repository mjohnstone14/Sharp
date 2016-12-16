(function () {
  'use strict';

  angular
    .module('songmaker')
    .controller('DropdownProgressionsCtrl', DropdownProgressionsCtrl)
    .controller('SongmakerListController', SongmakerListController);

  SongmakerListController.$inject = ['SongmakerService'];

  function DropdownProgressionsCtrl() {
    var vm = this;
    vm.title = 'Progressions';
    vm.getRandomIndex = function(min, max){
      return Math.floor(Math.random() * (max - min) + min)
    };
    vm.testProg = ['Select progression and key'];
    vm.keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    vm.notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    vm.steps = [0, 2, 4, 5, 7, 9, 11];
    vm.progressions = [
      { name: 'Pop', progression: 'I-IV-V', numprog: [1, 4, 5], minors: [] },
      { name: 'Pop 2', progression: 'I-V-IV', numprog: [1, 5, 4], minors: [] },
      { name: 'Fifties', progression: 'I-vi-IV-I', numprog: [1, 6, 4, 1], minors: [6] },
      { name: 'Rocky', progression: 'I-vi-IV-V', numprog: [1, 6, 4, 5], minors: [6] }
    ];

    vm.setCurrentProgression = function(val) {
      vm.currentProgression = val;
    };
    vm.setCurrentKey = function(val) {
      vm.currentKey = val;
    };
    vm.testCreate = function(v1, v2) {
      var prog = v1;
      var proglen = v1.length;
      var k = vm.notes.indexOf(v2);
      vm.testProg = [];
      for (var i = 0; i < proglen; i++) {
        var step = prog[i] - 1;
        vm.testProg[i] = vm.notes[(k + vm.steps[step]) % 12];
      }
      return vm.testProg.join(', ');
    };

  }

  function SongmakerListController(SongmakerService) {
    var vm = this;
    vm.songmaker = SongmakerService.query();
  }

}());
