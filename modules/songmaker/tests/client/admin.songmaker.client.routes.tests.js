﻿(function () {
  'use strict';

  describe('Songmaker Route Tests', function () {
    // Initialize global variables
    var $scope,
      SongmakerService;

    // We can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($rootScope, _SongmakerService_) {
      // Set a new global scope
      $scope = $rootScope.$new();
      SongmakerService = _SongmakerService_;
    }));

    describe('Route Config', function () {
      describe('Main Route', function () {
        var mainstate;
        beforeEach(inject(function ($state) {
          mainstate = $state.get('admin.songmaker');
        }));

        it('Should have the correct URL', function () {
          expect(mainstate.url).toEqual('/songmaker');
        });

        it('Should be abstract', function () {
          expect(mainstate.abstract).toBe(true);
        });

        it('Should have template', function () {
          expect(mainstate.template).toBe('<ui-view/>');
        });
      });

      describe('List Route', function () {
        var liststate;
        beforeEach(inject(function ($state) {
          liststate = $state.get('admin.songmaker.list');
        }));

        it('Should have the correct URL', function () {
          expect(liststate.url).toEqual('');
        });

        it('Should be not abstract', function () {
          expect(liststate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(liststate.templateUrl).toBe('/modules/songmaker/client/views/admin/list-songmaker.client.view.html');
        });
      });

      describe('Create Route', function () {
        var createstate,
          SongmakerAdminController,
          mockSong;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          createstate = $state.get('admin.songmaker.create');
          $templateCache.put('/modules/songmaker/client/views/admin/form-song.client.view.html', '');

          // Create mock song
          mockSong = new SongmakerService();

          // Initialize Controller
          SongmakerAdminController = $controller('SongmakerAdminController as vm', {
            $scope: $scope,
            songResolve: mockSong
          });
        }));

        it('Should have the correct URL', function () {
          expect(createstate.url).toEqual('/create');
        });

        it('Should have a resolve function', function () {
          expect(typeof createstate.resolve).toEqual('object');
          expect(typeof createstate.resolve.songResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(createstate)).toEqual('/admin/songmaker/create');
        }));

        it('should attach a song to the controller scope', function () {
          expect($scope.vm.song._id).toBe(mockSong._id);
          expect($scope.vm.song._id).toBe(undefined);
        });

        it('Should not be abstract', function () {
          expect(createstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(createstate.templateUrl).toBe('/modules/songmaker/client/views/admin/form-song.client.view.html');
        });
      });

      describe('Edit Route', function () {
        var editstate,
          SongmakerAdminController,
          mockSong;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          editstate = $state.get('admin.songmaker.edit');
          $templateCache.put('/modules/songmaker/client/views/admin/form-song.client.view.html', '');

          // Create mock song
          mockSong = new SongmakerService({
            _id: '525a8422f6d0f87f0e407a33',
            title: 'A Song about MEAN',
            content: 'MEAN rocks!'
          });

          // Initialize Controller
          SongmakerAdminController = $controller('SongmakerAdminController as vm', {
            $scope: $scope,
            songResolve: mockSong
          });
        }));

        it('Should have the correct URL', function () {
          expect(editstate.url).toEqual('/:songId/edit');
        });

        it('Should have a resolve function', function () {
          expect(typeof editstate.resolve).toEqual('object');
          expect(typeof editstate.resolve.songResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(editstate, {
            songId: 1
          })).toEqual('/admin/songmaker/1/edit');
        }));

        it('should attach a song to the controller scope', function () {
          expect($scope.vm.song._id).toBe(mockSong._id);
        });

        it('Should not be abstract', function () {
          expect(editstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(editstate.templateUrl).toBe('/modules/songmaker/client/views/admin/form-song.client.view.html');
        });

        xit('Should go to unauthorized route', function () {

        });
      });

    });
  });
}());
