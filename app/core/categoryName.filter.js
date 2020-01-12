angular.module('core')
    .filter('categoryName', function () {
        return function (items, id,categories) {
            var filtered = []
            _.forEach(items, function (value) {
                filtered.push([_.find(categories,{'id':value}).name,_.find(categories,{'id':value}).id])
            })
            return filtered
        }
    })