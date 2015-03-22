'use strict';

var app = angular.module('petApp');
	app.service('service', function service($q,$http) {
		this.phoneChristophe = function(){
			var deferred = $q.defer();
			$http({
				method: 'GET', url: 'http://www.foreverpetart.com/phone'
			}).success(function(data) {
			    deferred.resolve(data);
			}).error(function(err){
			    deferred.reject(err);
			});
			return deferred.promise;
		};

	});