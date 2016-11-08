'use strict';

describe('Songmaker E2E Tests:', function () {
  describe('Test songmaker page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/songmaker');
      expect(element.all(by.repeater('song in songmaker')).count()).toEqual(0);
    });
  });
});
