/**
 *	@name notification
 *	@description Notification module with flash messages.
 *
 *	@example

	<section ng-controller="NotificationsController">
		<div class="notifications-wrapper">
			<div ng-repeat="notification in notificationsAll track by $index">
				<notifications-flash></notifications-flash>
			</div>
		</div>
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
.constant('BASE_URL', '/api/mock')
.constant('PATH_NOTIFICATIONS', './scripts/notifications');
