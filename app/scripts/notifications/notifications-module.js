/**
 *	@name notifications
 *	@description Notification module with flash messages.
 *
 *	@exmaple

	<section ng-controller="NotificationsController">
		<div notifications-flash-directive></div>
	</section>

 */


angular.module('notifications.controllers', []);
angular.module('notifications.directives', []);
angular.module('notifications.services', ['ngResource']);

angular.module('notifications', [
	'notifications.controllers',
	'notifications.directives',
	'notifications.services',
])
.constant('BASE_URL', '/api/mock');

