'use strict';

describe('Service: FirebaseUrl', function () {

  // load the service's module
  beforeEach(module('schedulingSystemApp'));

  // instantiate service
  var FirebaseUrl;
  beforeEach(inject(function (_FirebaseUrl_) {
    FirebaseUrl = _FirebaseUrl_;
  }));

  it('should do something', function () {
    expect(!!FirebaseUrl).toBe(true);
  });

});
