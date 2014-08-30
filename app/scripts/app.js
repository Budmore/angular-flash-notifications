'use strict';

/**
 * @ngdoc overview
 * @name notificationApp
 * @description
 * # notificationApp
 *
 * Main module of the application.
 */
angular
	.module('notificationApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ngMockE2E',

		'notifications',
	])

	.run(['$rootScope', '$httpBackend', function($rootScope, $httpBackend) {

		// MockedData
		var mockedNotifications = [
			{
				id: 100,
				timestamp: 1409075938023,
				url: 'channels/arcon',
				src: null,
				style: 'warning',
				title: 'LIVE! LIVE! LIVE!',
				description: 'The "arcon" chanel is now LIVE!',
				type: 'LIVE_STREAM'
			},
			{
				id: 101,
				timestamp: 1409075938021,
				url: null,
				src: 'https://pbs.twimg.com/profile_images/417276485439746049/ZCm6qSai_400x400.jpeg',
				style: 'success',
				title: 'Gratulations',
				description: 'You have new follower',
				type: 'NEW_FOLLOWER'
			},
			{
				id: 102,
				timestamp: 1409075938023,
				url: 'subscriptions',
				src: 'images/yeoman.png',
				style: 'success',
				title: 'Gratulations',
				description: 'You have new subscription',
				type: 'NEW_SUBSCRIPTION'
			},
			{
				id: 107,
				timestamp: 1409075938041,
				src: 'https://pbs.twimg.com/profile_images/417276485439746049/ZCm6qSai_400x400.jpeg',
				style: 'info',
				title: 'Budmore',
				description: 'Budmore accepted your invitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad voluptates pariatur neque dolorem quo eius, voluptas nulla maxime voluptatem quibusdam, voluptate incidunt natus culpa rem quidem obcaecati laudantium, voluptatibus.',
				type: 'INVITATION_ACCEPT'
			},
			{
				id: 666,
				timestamp: 1409075938041,
				url: null,
				src: null,
				style: 'danger',
				title: '<i class="glyphicon glyphicon-cog"></i> Some error occurred',
				description: 'Please refresh player',
				type: 'ERROR'
			}
		];

		/**
		 *	@name randomCounter
		 *	@retrun {number} Return random number  < 0 - array.length >
		 */
		function randomCounter(array) {
			return Math.floor(Math.random() * array.length);
		}

		/**
		 *	@name randomData
		 *
		 *	@param {array} data
		 *	@param {number} counter
		 *	@return {array} random data
		 */
		function randomData(data, counter) {
			counter = counter || 1;
			var result = [];
			for (var i=0; i<counter; i++) {
				var randomItem = randomCounter(data);
				result.push(data[randomItem]);
			}

			return result;
		}

		/**
		 *	@name addRandomMessages
		 *
		 *	@description For DEMO only. Add random notification by ng-click
		 */
		$rootScope.getRandomMessage = function() {
			return randomData(mockedNotifications);
		};


		var mockedRespond = {
			notifications: randomData(mockedNotifications, randomCounter(mockedNotifications))
		};

		//mocking backend to simulate handling server notifications
		$httpBackend.when('GET', '/api/mock/notifications').respond(mockedRespond);

	}]
);

