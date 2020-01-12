angular.module('core')
    .filter('category', function () {
        return function (items, id) {
            var filtered = []
            if (id === 0) { return items }
            _.forEach(items, function (value) {
                _.includes(value.categoryID, id) ? filtered.push(value) : ''
            })
            return filtered
        }
    })