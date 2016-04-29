var myApp = angular.module('myApp',[]); 

myApp.controller('MainCtrl', function($scope) {
	$scope.todos = [];
    $scope.text = '';
    $scope.submit = function() {
        if ($scope.text) {
          $scope.todos.push(this.text);
          $scope.text = '';
        }
     }
});


