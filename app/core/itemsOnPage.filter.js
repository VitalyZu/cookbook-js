angular.module('core')
    .filter('itemsOnPage', function () {
        return function (items,page) {
            return _.chunk(items, 10)[+page - 1]
        }
    })