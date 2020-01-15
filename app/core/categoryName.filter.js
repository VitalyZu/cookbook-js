angular.module('core')
    .filter('categoryName', function () {
        return function (items, categories) {
            var filtered = []
            var categ = categories
            _.forEach(items, function (item) {
                let elem = _.find(categ, { 'id': item })
                filtered.push(elem)
            })
            /* //console.log(categories)
            _.forEach(items, function (value) {
                filtered.push([_.find(categ, o=>o.id=value,).name,_.find(categ, o=>o.id=value,).id])
                //console.log(filtered)
            }) */
            return filtered
        }
    })