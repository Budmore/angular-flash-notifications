angular.module('notifications.services').service('notificationsResource',
	['$resource', 'BASE_URL', function($resource, BASE_URL){
		'use strict';
		//$resource(url, paramDefaults, actions)
		return $resource(BASE_URL + '/notifications/:id',
			{
				id: '@notificationId'
			},
			{

				getNotifications: {
					method: 'GET'
				}
			}
		);

}]);
