var app=angular.module("myApp",[]);
/*Get all data from the json file */
app.controller('myCtrl',function($scope,$http){
    $http.get('empRecord.json').success(function(response){
        $scope.emp=response;
    });
});