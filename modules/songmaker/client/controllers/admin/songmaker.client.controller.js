(function () {
  'use strict';

  angular
    .module('songmaker.admin')
    .controller('SongmakerAdminController', SongmakerAdminController);

  SongmakerAdminController.$inject = ['$scope', '$state', '$window', 'songResolve', 'Authentication', 'Notification'];

  function SongmakerAdminController($scope, $state, $window, song, Authentication, Notification) {
    var vm = this;

    vm.song = song;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Song
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.song.$remove(function() {
          $state.go('admin.songmaker.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Song deleted successfully!' });
        });
      }
    }

    // Save Song
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.songForm');
        return false;
      }

      // Create a new song, or update the current instance
      vm.song.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.songmaker.list'); // should we send the User to the list or the updated Songmake's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Song saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Song save error!' });
      }
    }
  }
}());
