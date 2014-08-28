angular.module('notifications.directives').directive('notificationsFlash',
['$timeout', 'PATH_NOTIFICATIONS', 'notificationsService',
function($timeout, PATH_NOTIFICATIONS, notificationsService) {

	var settings = {
		ttl: notificationsService.ttl || 20000,
		localStorage: notificationsService.localStorage || true
	}

	return {
		restrict : 'E',
		replace : true,
		templateUrl : PATH_NOTIFICATIONS + '/views/notifications-messages.html',
		controller: function($scope) {

			$scope.removeNotification = function(notification){
         		notificationsService.notifications.removeModel(notification);
        	};

		},

		link : function(scope, element, attrs) {
			console.log('linked');
			element.parent().addClass('ns-show');

			$timeout(function() {
				element.parent().addClass('ns-hide');

				// Remove element from DOM
				$timeout(function() {
					console.log('aaa');
					element.parent().remove();
				}, 1000)

			}, settings.ttl);

		}
	};

}]);
