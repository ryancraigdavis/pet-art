var app = angular.module('petApp');
	app.controller('indexCtrl', function ($scope) {
		$(".contact-us").click(function() {
    	$('html, body').animate({
        scrollTop: $("#cta").offset().top
    	}, 1500);
  	});
	});