angular.module('core')
    .filter('itemsOnPage', function () {
        return function (items,page) {
            return _.chunk(items, 12)[+page - 1]
        }
    })