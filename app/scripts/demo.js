angular.module('notificationApp')

.controller('DemoController', ['$rootScope', '$timeout', 'notificationsService',
function ($rootScope, $timeout, notificationsService) {
	'use strict';

	$rootScope.addRandomMessages = function() {
		var randomMsg = $rootScope.getRandomMessage();
		notificationsService.showNotifications(randomMsg);
	};

}]);
