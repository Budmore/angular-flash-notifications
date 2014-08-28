angular.module('notifications.services').service('notificationsService',
['$q', 'notificationsResource', function($q, notificationsResource){
	var self = this;

	/**
	 *	@name settings
	 *	@description basic settings
	 */
	this.ttl = 4000; // Time To Live [ms]
	this.requestEvery = 5000; // How often make request to the backend [ms]
	this.localStorage = true;

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
	 *	@name notifications
	 *	@return public methods setter and getter
	 *
	 *	@description Concept of model constructor
	 *	#LIVE DEMO - http://jsbin.com/detas/7/edit?js,output
	 */
	this.notifications = (function() {

		var notificationsAll = [];

		return {
			getModel: function() {
				return notificationsAll
			},
			pushToModel: function(data) {
				notificationsAll.push(data);
			},
			removeModel: function(data) {
				index = notificationsAll.indexOf(data);

				if (index > -1) {
					notificationsAll.splice(index, 1);
				}
			}
			/*
			save: function(data){
				if(self.settings.localStorage){
					localStorage.setItem('notificationTimestamp', data.timestamp);
				}
			},
			checkLocal: function(data) {
				return data.timestamp === localStorage.getItem('notificationTimestamp');
			}*/
		};
	}());


}])
