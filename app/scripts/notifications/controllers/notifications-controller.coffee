angular.module('notifications.controllers').controller 'NotificationsController', [
	'$scope'
	'$timeout'
	'$exceptionHandler'
	'notificationsService'
	($scope, $timeout, $exceptionHandler, notificationsService) ->
		'use strict'

		###
		@name getNotifications
		@description TODO:
		###
		$scope.getNotifications = ->
			notificationsService.getNotifications().then (getNotificationsSuccess = (data) ->
				notificationsService.showNotifications data.notifications  if data and data.notifications
				return
			), getNotificationsError = (error) ->

				#Handle error
				$exceptionHandler error
				return

			return


		###
		@name checkNotifications

		@description Invoke $scope.getNotifications() every 10sec.
		###
		(checkNotifications = ->
			$scope.getNotifications()

			# TODO: Talk about $timeout() vs $httpProvider.interceptors
			$timeout checkNotifications, notificationsService.settings.requestEvery
			return
		)()
]
