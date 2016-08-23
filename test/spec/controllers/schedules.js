'use strict';

describe('Controller: SchedulesCtrl', function () {

  // load the controller's module
  beforeEach(module('schedulingSystemApp'));

  var SchedulesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchedulesCtrl = $controller('SchedulesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SchedulesCtrl.awesomeThings.length).toBe(3);
  });
});
