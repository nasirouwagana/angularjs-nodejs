(function() {// Factory Models

    var Models = function() {
        var levels = function() {
            return [
                "tres bon", "bon", "débutant"
            ];
        };

        return {
            levels: levels
        };
    };
    
    //Models.$inject = []; pas d'injection

    angular.module("booksApp").factory("Models", Models);

}());