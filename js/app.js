var imdbApp = angular.module('imdbApp', ['ngRoute', 'imdbController']);

imdbApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
	  templateUrl: './partials/list.html',
	  controller: 'ListController'
	}).
	when('/gallery', {
	  templateUrl: './partials/gallery.html',
	  controller: 'GalleryController'
	}).
	when('/details/:rank', {
	  templateUrl: './partials/details.html',
	  controller: 'DetailsController'
	}).
	otherwise({
	  redirectTo: '/list'
	});
}]);