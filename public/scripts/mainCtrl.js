'use strict';

var app = angular.module('petApp');
	app.controller('mainCtrl', function ($scope,service) {

			service.phoneChristophe().then(function(data){
				$scope.phone = data[0].phone;
			});
	});