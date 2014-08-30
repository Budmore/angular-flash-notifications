'use strict';

describe('Controller: NotificationsController', function () {

	// load the controller's module
	beforeEach(module('notifications'));
	beforeEach(module('notifications.services'));
	beforeEach(module('notifications.controllers'));

	var $q, scope, notificationsService, CreateNotificationsController;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $injector) {
		scope = $rootScope.$new();
		$q = $injector.get('$q');
		notificationsService = $injector.get('notificationsService');

		CreateNotificationsController = function() {
			return $controller('NotificationsController', {
				$scope: scope,
				notificationsService: notificationsService
			});
		};
	}));

	it('getNotifications()', function () {
		var dfd = $q.defer();
		var mockedData = {
			notifications: []
		};

		spyOn(notificationsService, 'getNotifications').andReturn(dfd.promise);
		spyOn(notificationsService, 'showNotifications');
		new CreateNotificationsController();

		scope.getNotifications();
		dfd.resolve(mockedData);
		scope.$digest();

		expect(notificationsService.getNotifications).toHaveBeenCalled();
		expect(notificationsService.showNotifications).toHaveBeenCalledWith(mockedData.notifications);
	});

});
