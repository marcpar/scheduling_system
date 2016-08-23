'use strict';

describe('Service: rootRef', function () {

  // load the service's module
  beforeEach(module('schedulingSystemApp'));

  // instantiate service
  var rootRef;
  beforeEach(inject(function (_rootRef_) {
    rootRef = _rootRef_;
  }));

  it('should do something', function () {
    expect(!!rootRef).toBe(true);
  });

});
