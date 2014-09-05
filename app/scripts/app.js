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
		'ngResource',
		'ngRoute',
		'ngSanitize',
		// 'ngMockE2E',

		'notifications',
	])

	.run(['$rootScope', function($rootScope) {

		// MockedData
		var mockedNotifications = [
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
				id: 107,
				timestamp: 1409075938041,
				src: 'https://pbs.twimg.com/profile_images/417276485439746049/ZCm6qSai_400x400.jpeg',
				style: 'info',
				title: 'Budmore',
				description: 'Budmore accepted your invitation.',
				type: 'INVITATION_ACCEPT'
			},
			{
				id: 120,
				timestamp: 1409075938042,
				url: null,
				src: 'images/sw-jango-fett.jpg',
				style: 'danger',
				title: 'Heads up!',
				description: 'Jango fett is coming for you!',
				type: 'ERROR'
			},
			{
				id: 121,
				timestamp: 1409075938043,
				url: null,
				src: 'images/sw-yoda.jpg',
				title: 'Yoda writes to you',
				description: '"Do or do not. There is no try."',
			},
			{
				id: 122,
				timestamp: 1409075938044,
				url: null,
				src: 'images/sw-trooper.jpg',
				title: 'Clone trooper',
				description: 'Clone trooper joined the 501st Legion',
			},
			{
				id: 123,
				timestamp: 1409075938023,
				url: null,
				src: 'images/sw-anakin.jpg',
				style: 'success',
				title: 'Gratulations',
				description: 'You have new subscription',
				type: 'NEW_SUBSCRIPTION'
			},
			{
				id: 124,
				timestamp: 1409075938021,
				url: 'friends',
				src: 'images/sw-leia.jpg',
				style: 'success',
				title: 'Fuck Yeah!',
				description: 'Princess Leia is not your sister :)',
				type: 'NEW_SUBSCRIPTION'
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


		// var mockedRespond = {
		// 	notifications: randomData(mockedNotifications, randomCounter(mockedNotifications))
		// };

		//mocking backend to simulate handling server notifications
		// $httpBackend.when('GET', '/api/mock/notifications').respond(mockedRespond);

	}]
);

