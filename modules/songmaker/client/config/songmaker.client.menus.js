(function () {
  'use strict';

  angular
    .module('songmaker')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Songmaker',
      state: 'songmaker',
      type: 'dropdown',
      roles: ['*']
    });

    menuService.addMenuItem('topbar', {
      title: 'About',
      state: 'about',
      roles: ['*']
    });

    menuService.addMenuItem('topbar', {
      title: 'How To',
      state: 'how-to',
      roles: ['*']
    });


    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'songmaker', {
      title: 'List Songmaker',
      state: 'songmaker.list',
      roles: ['*']
    });
  }
}());
