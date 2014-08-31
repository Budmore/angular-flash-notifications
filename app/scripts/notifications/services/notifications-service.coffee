angular.module('notifications.services').service 'notificationsService', [
	'$q'
	'$rootScope'
	'notificationsResource'
	($q, $rootScope, notificationsResource) ->
		'use strict'
		self = this

		###
		@name settings
		@description
		ttl [ms] - Time To Live
		requestEvery [ms] - How often make request to the backend
		onlyUniqueMessages - Save last message in localStorage
		###
		@settings =
			ttl: 20000
			requestEvery: 10000
			onlyUniqueMessages: true


		###
		@name getNotifications
		@description Get data from server
		@return {object} promise
		###
		@getNotifications = ->
			dfd = $q.defer()
			notificationsResource.getNotifications (getNotificationsSuccess = (data) ->
				dfd.resolve data
				return
			), getNotificationsError = (error) ->
				dfd.reject error
				return

			dfd.promise


		###
		@name showNotifications
		@param {array} notifications
		@desdription Brodacast to the directive each notification
		###
		@showNotifications = (notifications) ->
			return  unless angular.isArray(notifications)
			angular.forEach notifications, (message) ->
				notification =
					message: message
					ttl: self.settings.ttl

				$rootScope.$broadcast 'notifications::CreateMessage', notification
				return

			return
]
