(function () {
  'use strict';

  angular
    .module('songmaker.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('songmaker', {
        abstract: true,
        url: '/songmaker',
        template: '<ui-view/>'
      })
      .state('songmaker.list', {
        url: '',
        templateUrl: '/modules/songmaker/client/views/list-songmaker.client.view.html',
        controller: 'SongmakerListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Songmaker List'
        }
      })
      .state('songmaker.view', {
        url: '/:songId',
        templateUrl: '/modules/songmaker/client/views/view-song.client.view.html',
        controller: 'SongmakerController',
        controllerAs: 'vm',
        resolve: {
          songResolve: getSong
        },
        data: {
          pageTitle: 'Song {{ songResolve.title }}'
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'modules/songmaker/client/views/about.client.view.html'
      })
      .state('how-to', {
        url: '/how-to',
        templateUrl: 'modules/songmaker/client/views/how-to.client.view.html'
      });
  }

  getSong.$inject = ['$stateParams', 'SongmakerService'];

  function getSong($stateParams, SongmakerService) {
    return SongmakerService.get({
      songId: $stateParams.songId
    }).$promise;
  }
}());
