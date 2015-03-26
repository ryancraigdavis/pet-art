var app = angular.module('petApp');
	app.controller('indexCtrl', function ($scope, $location, $rootScope) {
		$(".contact-us").click(function() {
    	$('html, body').animate({
        scrollTop: $("#cta").offset().top
    	}, 1500);
  	});

		$rootScope.$on('$locationChangeSuccess', function(event){
       var url = $location.url()
				if (url === "/") {
					$scope.myVar = "alt";
				} else {
					$scope.myVar = "skel-layers-fixed";
				}		
		})
	});