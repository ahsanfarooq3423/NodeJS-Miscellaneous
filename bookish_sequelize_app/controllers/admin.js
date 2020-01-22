exports.getWareHouse = (req, res, next) => {
    res.render('admin/warehouse', {
        pageTitle : 'WareHouse'
    })
}

exports.getCustomers = (req, res, next) => {
    res.render('admin/customer', {
        pageTitle : 'All Customers'
    })
}