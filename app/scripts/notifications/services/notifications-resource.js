angular.module('notifications.services').service('notificationsResource',
	['$resource', 'BASE_URL', function($resource, BASE_URL){
		//$resource(url, paramDefaults, actions)
		return $resource(BASE_URL + '/notifications/:id',
			{
				id: '@notificationId'
			},
			{

				getNotification: {
					method: 'GET',
				},

				getNotifications: {
					method: 'GET',
					isArray: true,
				}
			}
		);

}]);
