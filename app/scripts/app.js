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
		// 'ngMockE2E',

		'notifications'
	])




	.run(function($rootScope, notificationsService) {

	// MockedData
	var mockedNotifications = [
		{
			id: 100,
			timestamp: 1409075938023,
			url: 'http://alpha.gaminglive.tv/#/channels/arcon',
			src: null,
			style: 'warning',
			text: 'The "arcon" chanel is now LIVE!',
			type: 'LIVE_STREAM'
		},
		{
			id: 101,
			timestamp: 1409075938038,
			url: null,
			src: 'https://pbs.twimg.com/profile_images/417276485439746049/ZCm6qSai_400x400.jpeg',
			style: 'success',
			text: 'You have new follower',
			type: 'NEW_FOLLOWER'
		},
		{
			id: 102,
			timestamp: 1409075938040,
			url: null,
			src: 'https://pbs.twimg.com/profile_images/417276485439746049/ZCm6qSai_400x400.jpeg',
			style: 'success',
			text: 'You have new subscription',
			type: 'NEW_SUBSCRIPTION'
		},
		{
			id: 107,
			timestamp: 1409075938041,
			url: null,
			src: 'https://pbs.twimg.com/profile_images/417276485439746049/ZCm6qSai_400x400.jpeg',
			style: 'info',
			text: 'Budmore accepted your invitation.',
			type: 'INVITATION_ACCEPT'
		},
		{
			id: 666,
			timestamp: 1409075938041,
			url: null,
			src: null,
			style: 'danger',
			text: 'Some error occurred. Please refresh player',
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
	 *	@name randomMessage
	 *
	 *	@param {array} data
	 *	@param {number} counter
	 *	@return {array} random messages
	 */
	function randomMessage(data, counter) {
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
	 *	@description Add random notification by ng-click to notificationsService
	 */
	$rootScope.addRandomMessages = function() {
		var mockedRespond = randomMessage(mockedNotifications, 1);
		notificationsService.notifications.pushToModel(mockedRespond[0]);
	};

	/*
	var mockedRespond = randomMessage(mockedNotifications, randomCounter(mockedNotifications));
	//mocking backend to simulate handling server notifications
	$httpBackend.when('GET', '/api/mock/notifications').respond(mockedRespond);
	*/
});

