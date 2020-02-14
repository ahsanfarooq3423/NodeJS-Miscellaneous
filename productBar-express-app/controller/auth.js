const User = require('../model/user');
const bcrypt = require('bcrypt');

const nodemailer = require('nodemailer');
const sendgridTransporter = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(sendgridTransporter({
    auth : {
        api_key : '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'
    }
})) 

exports.getLogin = (req, res, next) => {
    let message = req.flash('error')
    if (message.length > 0) {
        message = message[0]
    } else {
        message = null;
    }

    res.render('auth/auth', {
        path: '/login',
        pageTitle: 'Login',
        isSignup: false,
        errorMessage : message
    })
}


exports.getSignup = (req, res, next) => {
    let message = req.flash('error')
    if (message.length > 0) {
        message = message[0]
    } else {
        message = null;
    }
    res.render('auth/auth', {
        path: '/signup',
        pageTitle: 'Signup',
        isSignup: true,
        errorMessage : message
    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                req.flash('error', 'Invalid Email or Password')
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
                    req.flash('error', 'Password your enter is Invalid')
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
                    return trasnsporter.sendMail({
                        to :  email,
                        from : 'shop@productBar.com',
                        subject : 'Sign Up Succeded at Product Bar Store',
                        html : '<h1> Welcome to the Store... </h1>'
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}


exports.logout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/products')
    })
}



