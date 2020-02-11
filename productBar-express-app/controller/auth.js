const User = require('../model/user');
const bcrypt = require('bcrypt');

exports.getLogin = (req, res, next) => {
    res.render('auth/auth', {
        path: '/login',
        pageTitle: 'Login',
        isSignup: false
    })
}


exports.getSignup = (req, res, next) => {
    res.render('auth/auth', {
        path: '/signup',
        pageTitle: 'Signup',
        isSignup: true
    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.redirect('/signup')
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            res.redirect('/products')
                        })
                    }
                    return res.redirect('/login')
                })
        })
        .catch(err => console.log(err))
}


exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;



    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/signup')
            }
            return bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] }
                    })
                    return user.save()
                })
                .then(response => {
                    res.redirect('/login')
                })
        })
        .catch(err => console.log(err))
}


exports.logout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/products')
    })
}



