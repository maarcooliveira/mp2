var imdbController = angular.module('imdbController', []);

imdbController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('./data/imdb250.json').success(function(data) {
	$scope.imdb = data;
	$scope.sort = 'title';

	$('#navbar').css("height", "100%");

	$('#query-input').on("keyup", function(){
		if($('#query-input').val().length > 0){
			$('#navbar').css("height", "170px");
			$('#search-container').removeClass('center');
			$('#search-container').removeClass('full-height');
		}
		else{
			$('#navbar').css("height", "100%");
			$('#search-container').addClass('full-height');
			$('#search-container').addClass('center');
		}
	});

  });
}]);

imdbController.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('./data/imdb250.json').success(function(data) {
		$scope.imdb = data;
		$scope.id = $routeParams.rank - 1;
		$scope.next = ($routeParams.rank < $scope.imdb.length ? Number($routeParams.rank) + 1 : 1);
		$scope.prev = ($routeParams.rank > 1 ? Number($routeParams.rank) - 1 : $scope.imdb.length);
  	});
}]);

imdbController.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
	$http.get('./data/imdb250.json').success(function(data) {
		$scope.imdb = data;

		$('#categories a').on('click', function() {
			$('#categories a').removeClass('selected');
			$(this).addClass('selected');
		});

	});
}]);