angular.module('notifications.directives').directive 'notificationsFlashDirective', [
	'$rootScope'
	($rootScope) ->
		'use strict'
		return (
			restrict: 'A'
			templateUrl: 'notification-template.html'
			replace: false
			scope: {}
			controller: [
				'$scope'
				'$timeout'
				'$location'
				($scope, $timeout, $location) ->
					addMessage = (message, ttl) ->
						$scope.messages.push message
						if ttl
							$timeout (->
								$scope.deleteMessage message
								return
							), ttl
						return
					$scope.messages = []
					$rootScope.$on 'notifications::CreateMessage', (event, notification) ->
						found = undefined
						message = notification.message
						angular.forEach $scope.messages, (msg) ->
							if message.timestamp is msg.timestamp and message.id is msg.id

								#TODO: remove console.log()
								console.log 'Duplicated message', message
								found = true
							return

						addMessage message, notification.ttl  unless found
						return

					$scope.deleteMessage = (message) ->
						index = $scope.messages.indexOf(message)
						$scope.messages.splice index, 1  if index > -1
						return

					$scope.redirect = (url) ->
						$location.url url  if url
						return
			]
		)
]
angular.module('notifications.directives').run [
	'$templateCache'
	($templateCache) ->
		'use strict'

		# jshint quotmark:false
		$templateCache.put "notification-template.html", "<section class=\"ns-wrapper\">" + "\t<div class=\"ns-item\" ng-repeat=\"message in messages\" ng-class=\"{" + "'cursor-pointer'" + ": message.url}\" ng-click=\"redirect(message.url)\">" + "\t\t<button type=\"button\" class=\"ns-close\" ng-click=\"deleteMessage(message)\">&times;</button>" + "\t\t<div class=\"ns-img\" ng-if=\"message.src\">" + "\t\t\t<img ng-src=\"{{message.src}}\" alt=\"avatar\">" + "\t\t</div>" + "\t\t<div class=\"ns-message\">" + "\t\t\t<div class=\"ns-title\" ng-bind-html=\"message.title\"></div>" + "\t\t\t<div class=\"ns-description\" ng-bind-html=\"message.description\"></div>" + "\t\t</div>" + "\t\t<div class=\"clear-both\"></div>" + "\t</div>" + "</section>"
]
