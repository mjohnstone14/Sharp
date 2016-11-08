(function () {
  'use strict';

  angular
    .module('songmaker.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.songmaker', {
        abstract: true,
        url: '/songmaker',
        template: '<ui-view/>'
      })
      .state('admin.songmaker.list', {
        url: '',
        templateUrl: '/modules/songmaker/client/views/admin/list-songmaker.client.view.html',
        controller: 'SongmakerAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.songmaker.create', {
        url: '/create',
        templateUrl: '/modules/songmaker/client/views/admin/form-song.client.view.html',
        controller: 'SongmakerAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          songmakeResolve: newSong
        }
      })
      .state('admin.songmaker.edit', {
        url: '/:songId/edit',
        templateUrl: '/modules/songmaker/client/views/admin/form-song.client.view.html',
        controller: 'SongmakerAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          songResolve: getSong
        }
      });
  }

  getSong.$inject = ['$stateParams', 'SongmakerService'];

  function getSong($stateParams, SongmakerService) {
    return SongmakerService.get({
      songId: $stateParams.songId
    }).$promise;
  }

  newSong.$inject = ['SongmakerService'];

  function newSong(SongmakerService) {
    return new SongmakerService();
  }
}());
