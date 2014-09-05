angular.module('notifications.controllers').controller('NotificationsController',
	['$rootScope', '$scope', '$timeout', '$exceptionHandler', 'notificationsService',
	function($rootScope, $scope, $timeout, $exceptionHandler, notificationsService){
		'use strict';

		/**
		 *	@name getNotifications
		 *
		 *	@description TODO:
		 */
		$scope.getNotifications = function() {
			notificationsService.getNotifications().then(
				function getNotificationsSuccess(data) {
					if(data && data.notifications) {
						notificationsService.showNotifications(data.notifications);
					}
				}, function getNotificationsError(error) {
					//Handle error
					$exceptionHandler(error);
				}
			);
		};


		/**
		 *	@name checkNotifications
		 *
		 *	@description Invoke $scope.getNotifications() every 10sec.
		 */
		(function checkNotifications() {
			// $scope.getNotifications();

			var randomMsg = $rootScope.getRandomMessage();
			notificationsService.showNotifications(randomMsg);

			// TODO: Talk about $timeout() vs $httpProvider.interceptors
			$timeout(checkNotifications, notificationsService.settings.requestEvery);
		}());


	}
]);
