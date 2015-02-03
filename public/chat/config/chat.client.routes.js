angular.module('chat').config(['$routeProvider', function ($routerProvider) {
    $routerProvider.when('/chat', {
        templateUrl: 'chat/views/chat.client.view.html'
    });
}]);