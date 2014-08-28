describe('notifications services', function() {
	'user strict';

	var $httpBackend, notificationsService, BASE_URL, successCb, errorCb;

	beforeEach(module('notifications.services'));
	beforeEach(module('notifications'));


	// beforeEach(inject(function (_$httpBackend_, _notificationsService_, _BASE_URL_) {
	beforeEach(inject(function ($injector) {
		$httpBackend = $injector.get('$httpBackend');
		notificationsService = $injector.get('notificationsService');
		BASE_URL = $injector.get('BASE_URL');

		successCb = jasmine.createSpy();
		errorCb = jasmine.createSpy();
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should getNotifications() - success', function () {
		var mockedData = [];
		$httpBackend.expectGET(BASE_URL + '/notifications').respond(200);

		notificationsService.getNotifications().then(successCb, errorCb);
		$httpBackend.flush();

		expect(successCb).toHaveBeenCalled();
	});

	it('should getNotifications() - error', function () {
		var mockedData = [];
		$httpBackend.expectGET(BASE_URL + '/notifications').respond(400);

		notificationsService.getNotifications().then(successCb, errorCb);
		$httpBackend.flush();

		expect(errorCb).toHaveBeenCalled();
	});

});
