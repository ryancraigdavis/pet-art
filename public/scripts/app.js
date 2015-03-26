var app = angular.module('petApp',['ui.router']);

// app.config(function($stateProvider, $urlRouterProvider) {
 
//     $stateProvider
//         .state('home', {
//             url:'/',
//             templateUrl: 'homeView.html',
//             controller: 'mainCtrl'
//         })
//         .state('artists', {
//             url:'/artists',
//             controller: 'artistsCtrl',
//             templateUrl: 'artists.html'
//         })
//         .state('gallery', {
//             url:'/gallery',
//             templateUrl: 'gallery.html',
//             controller: 'galleryCtrl'
//         })
//     	$urlRouterProvider.otherwise('/');

 
// });

var app = angular.module('petApp', ['ngRoute'])

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "homeView.html",
			controller:  "mainCtrl"
		})
		.when('/artists', {
			templateUrl: 'artists.html',
			controller: 'artistsCtrl'
		})
		.when('/gallery', {
			templateUrl: 'gallery.html',
			controller: 'galleryCtrl'
		})

		.otherwise({
			redirectTo: "/"
		})
	})