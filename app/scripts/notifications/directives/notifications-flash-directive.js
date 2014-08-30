angular.module('notifications.directives').directive('notificationsFlashDirective',
	['$rootScope', function ($rootScope) {
		'use strict';

		return {
			restrict: 'A',
			templateUrl: 'notification-template.html',
			replace: false,
			scope: {},
			controller: ['$scope', '$timeout', '$location', function ($scope, $timeout, $location) {
				$scope.messages = [];

				function addMessage(message, ttl) {
					$scope.messages.push(message);

					if (ttl) {
						$timeout(function () {
							$scope.deleteMessage(message);
						}, ttl);
					}
				}

				$rootScope.$on('notifications::CreateMessage', function (event, notification) {
					var found;
					var message = notification.message;

					angular.forEach($scope.messages, function(msg) {
						if (message.timestamp === msg.timestamp && message.id === msg.id) {
							//TODO: remove console.log()
							console.log('Duplicated message', message);
							found = true;
						}
					});

					if (!found) {
						addMessage(message, notification.ttl);
					}
				});

				$scope.deleteMessage = function (message) {
					var index = $scope.messages.indexOf(message);
					if (index > -1) {
						$scope.messages.splice(index, 1);
					}

				};

				$scope.redirect = function(url) {
					if (url) {
						$location.url(url);
					}
				};

			}]
		};
	}
]);


angular.module('notifications.directives').run(['$templateCache', function($templateCache) {
	'use strict';
	/* jshint quotmark:false */
	$templateCache.put('notification-template.html',
		'<section class="ns-wrapper">' +
		'	<div class="ns-item" ng-repeat="message in messages" ng-class="{'+"'cursor-pointer'"+': message.url}" ng-click="redirect(message.url)">' +
		'		<button type="button" class="ns-close" ng-click="deleteMessage(message)">&times;</button>' +
		'		<div class="ns-img" ng-if="message.src">' +
		'			<img ng-src="{{message.src}}" alt="avatar">' +
		'		</div>' +
		'		<div class="ns-message">' +
		'			<div class="ns-title" ng-bind-html="message.title"></div>' +
		'			<div class="ns-description" ng-bind-html="message.description"></div>' +
		'		</div>' +
		'		<div class="clear-both"></div>' +
		'	</div>' +
		'</section>'
	);
}]);
