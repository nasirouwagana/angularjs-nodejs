(function() {
    // Module principal
    var booksApp = angular.module('booksApp', ['ngResource', 'ngRoute']);

    // Route
    booksApp.config(["$routeProvider", function($routeProvider) {
            $routeProvider.
                    when('/actualites', {
                        templateUrl: "templates/actualites.html",
                        controller: "ActualitesCtrl"
                    })
                    .when('/coupsdecoeur', {
                        templateUrl: "templates/coupsdecoeur.html",
                        controller: "CoupsDeCoeurCtrl"
                    })
                    .when('/addition/:a/:b', {
                        templateUrl: "templates/addition.html",
                        controller: "AdditionCtrl"
                    })
                    .otherwise({
                        redirectTo: "/"
                    });
        }]);

    // Filters
    booksApp.filter("stars", function() {
        return function(data) {
            switch (data) {
                case "tres bon":
                    return "***";
                    break;
                case "bon":
                    return "**";
                    break;
                case "débutant":
                    return "*";
                    break;
            }
        };
    });

}());