var myApp = angular.module('myApp',[]); 

myApp.controller('MainCtrl', function($scope) {
	$scope.todos = [];
	$scope.todosH = [];$scope
    $scope.textH = '';
    $scope.high = function() {
        if ($scope.text) {
        	$scope.todos.push(this.text);
          	$scope.todosH.push(this.text);
          	$scope.text = '';
        }
    }
    $scope.todosM = [];
    $scope.text = '';
	$scope.medium = function() {
        if ($scope.text) {
        	$scope.todos.push(this.text);
          	$scope.todosM.push(this.text);
          	$scope.text = '';
        }
    }
    $scope.todosL = [];
    $scope.text = '';
    $scope.low = function() {
        if ($scope.text) {
        	$scope.todos.push(this.text);
          	$scope.todosL.push(this.text);
          	$scope.text = '';
        }
    }

    $scope.alphabet = function() {
    	$scope.alph = true;
		$scope.beta = false; 
    	$scope.charlie = false; 
    }

    $scope.betabet = function() {
    	$scope.alph = false;
    	$scope.beta = true; 
    	$scope.charlie = false;  
    }

    $scope.charliebet = function() {
    	$scope.alph = false;
    	$scope.beta = false; 
    	$scope.charlie = true; 
    }





});


