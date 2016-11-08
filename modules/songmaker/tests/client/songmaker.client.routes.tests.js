(function () {
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
          mainstate = $state.get('songmaker');
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
          liststate = $state.get('songmaker.list');
        }));

        it('Should have the correct URL', function () {
          expect(liststate.url).toEqual('');
        });

        it('Should not be abstract', function () {
          expect(liststate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(liststate.templateUrl).toBe('/modules/songmaker/client/views/list-songmaker.client.view.html');
        });
      });

      describe('View Route', function () {
        var viewstate,
          SongmakerController,
          mockSong;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          viewstate = $state.get('songmaker.view');
          $templateCache.put('/modules/songmaker/client/views/view-song.client.view.html', '');

          // create mock song
          mockSong = new SongmakerService({
            _id: '525a8422f6d0f87f0e407a33',
            title: 'A Song about MEAN',
            content: 'MEAN rocks!'
          });

          // Initialize Controller
          SongmakerController = $controller('SongmakerController as vm', {
            $scope: $scope,
            songResolve: mockSong
          });
        }));

        it('Should have the correct URL', function () {
          expect(viewstate.url).toEqual('/:songId');
        });

        it('Should have a resolve function', function () {
          expect(typeof viewstate.resolve).toEqual('object');
          expect(typeof viewstate.resolve.songResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(viewstate, {
            songId: 1
          })).toEqual('/songmaker/1');
        }));

        it('should attach a song to the controller scope', function () {
          expect($scope.vm.song._id).toBe(mockSong._id);
        });

        it('Should not be abstract', function () {
          expect(viewstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(viewstate.templateUrl).toBe('/modules/songmaker/client/views/view-song.client.view.html');
        });
      });

      describe('Handle Trailing Slash', function () {
        beforeEach(inject(function ($state, $rootScope, $templateCache) {
          $templateCache.put('/modules/songmaker/client/views/list-songmaker.client.view.html', '');

          $state.go('songmaker.list');
          $rootScope.$digest();
        }));

        it('Should remove trailing slash', inject(function ($state, $location, $rootScope) {
          $location.path('songmaker/');
          $rootScope.$digest();

          expect($location.path()).toBe('/songmaker');
          expect($state.current.templateUrl).toBe('/modules/songmaker/client/views/list-songmaker.client.view.html');
        }));
      });
    });
  });
}());
