Angular notifications - flash messages
===============


Quickstart
---

copy folder ```app/scripts/notifications``` to your application

add dependency to your app

```javascript
 angular.module('yourApp', [
   ...,
   'notifications'
 ]);
```

add directive notifications-flash-directive to the view

```html
	<section ng-controller="NotificationsController">
		<div notifications-flash-directive></div>
	</section>
```

- Demo page: http://demo.budmore.pl/angular-flash-notifications/
