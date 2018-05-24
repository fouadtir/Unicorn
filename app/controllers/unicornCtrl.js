app.controller('UnicornCtrl', function ($scope, UnicornFactory) {

  //UnicornFactory.setTask();

  $scope.unicorns = UnicornFactory.unicorns;

  $scope.unicorn = {};

  $scope.unicornMom = {};
  $scope.unicornDad = {};
  $scope.unicornChild = {};

  $scope.addUnicorn = function(){
  var object = angular.extend({}, $scope.unicorn)
  UnicornFactory.addUnicorn(object);
   console.log($scope.unicorn);

  }
  $scope.mateUnicorn = function(a,b){
    UnicornFactory.mateUnicorn(a,b);
    console.log($scope.unicornChild);
  }
});
