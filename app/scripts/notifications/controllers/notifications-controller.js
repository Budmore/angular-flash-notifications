angular.module('notifications.controllers').controller('NotificationsController',
	['$rootScope', '$timeout', '$exceptionHandler', 'notificationsService',
	function($rootScope, $timeout, $exceptionHandler, notificationsService){
		'use strict';

		/**
		 *	@name getNotifications
		 *
		 *	@description TODO:
		 */
		$rootScope.getNotifications = function() {
			notificationsService.getNotifications().then(
				function getNotificationsSuccess(data) {
					notificationsService.notifications.pushToModel(data)
				}, function getNotificationsError(error) {
					//Handle error
					$exceptionHandler(error);
				}
			);
		};


		$rootScope.notificationsAll = notificationsService.notifications.getModel();


		/**
		 *	@name checkNotifications
		 *
		 *	@description Invoke $rootScope.getNotifications() every 10sec.
		 */

		(function checkNotifications() {
			// $rootScope.getNotifications();
			// notificationsService.notifications.push(mockedMsg);

			// TODO: remove this mocked method in app.js
			$rootScope.addRandomMessages();

			// TODO: check which method has better performance: $timeout() vs $interval()
			$timeout(checkNotifications, notificationsService.requestEvery)
		}());


	}]);
