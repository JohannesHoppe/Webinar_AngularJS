angular.module('exampleApp', [])

    .controller('exampleController', function () {
        var vm = this;
        vm.model = {
            text: 'Hello World'
        };
        vm.changeText = function () {
            vm.model = { text: 'Text changed' };
        }
    });