(function () {
  'use strict';

  // Configuring the Songmaker Admin module
  angular
    .module('songmaker.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Songmaker',
      state: 'admin.songmaker.list'
    });
  }
}());
