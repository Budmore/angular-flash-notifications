angular.module('notifications.services').service('notificationsService',
	['$q', '$rootScope', 'notificationsResource', function($q, $rootScope, notificationsResource) {
		'use strict';
		var self = this;

		/**
		 *	@name settings
		 *
		 *	@description
		 *	ttl [ms] - Time To Live
		 *	requestEvery [ms] - How often make request to the backend
		 *	onlyUniqueMessages - Save last message in localStorage
		 */
		this.settings = {
			ttl: 20000,
			requestEvery: 10000,
			onlyUniqueMessages: true
		};


		/**
		 *	@name getNotifications
		 *	@description Get data from server
		 *	@return {object} promise
		 */
		this.getNotifications = function() {
			var dfd = $q.defer();

			notificationsResource.getNotifications(
				function getNotificationsSuccess(data) {
					dfd.resolve(data);
				}, function getNotificationsError(error) {
					dfd.reject(error);
				}
			);

			return dfd.promise;
		};

		/**
		 *	@name showNotifications
		 *	@param {array} notifications
		 *	@desdription Brodacast to the directive each notification
		 */
		this.showNotifications = function(notifications) {

			if (!angular.isArray(notifications)) {
				return;
			}

			angular.forEach(notifications, function(message) {

				var notification = {
					message: message,
					ttl: self.settings.ttl
				};

				$rootScope.$broadcast('notifications::CreateMessage', notification);
			});
		};

	}
]);
