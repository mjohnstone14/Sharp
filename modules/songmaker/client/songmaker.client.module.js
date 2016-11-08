(function (app) {
  'use strict';

  app.registerModule('songmaker', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('songmaker.admin', ['core.admin']);
  app.registerModule('songmaker.admin.routes', ['core.admin.routes']);
  app.registerModule('songmaker.services');
  app.registerModule('songmaker.routes', ['ui.router', 'core.routes', 'songmaker.services']);
}(ApplicationConfiguration));
