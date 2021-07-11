var app = angular.module("myApp", []);
app.controller ("myCtrl",
                function ($scope){
                    $scope.initGame = function() {
                        $scope.guess = null;
                        $scope.randNum = Math.floor((Math.random() * 100) + 1);
                        $scope.diff = null;
                     }

                    $scope.checkGuess = function() {
                        $scope.diff = $scope.randNum - $scope.guess;
                    }

                    $scope.showAns = function() {
                        $scope.reveal = $scope.randNum;
                    }

          $scope.initGame();
    }
);
