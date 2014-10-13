(function() {
    // Controleur ActualitesCtrl
    var ActualitesCtrl = function($scope) {
        $scope.title = "Actualites";
        $scope.news = [
            {title: "Un nouveau Stephen King à venir?"}
            , {title: "Le Kindle paperwhite est juste une turie"}
            , {title: "Le format epub 3 en détail"}
        ];
    };

    ActualitesCtrl.$inject = ["$scope"];

    angular.module("booksApp").controller("ActualitesCtrl", ActualitesCtrl);

}());