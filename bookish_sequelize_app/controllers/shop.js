exports.getBooks = (req, res, next) => {
    res.render('shop/books', {
        pageTitle : 'All Books'
    })
}

exports.getAuthors = (req, res, next) => {
    res.render('shop/authors', {
        pageTitle : 'All Authors'
    })
}

exports.getPublishers = (req, res, next) => {
    res.render('shop/publisher', {
        pageTitle : 'All Publishers'
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle : 'Your Cart'
    })
}