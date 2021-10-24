const mongoose = require('mongoose')
const Login = mongoose.model('Login')

exports.user_login = (req, res) => {
    const login = new Login(req.body)
    login.save((err, result) => {
        if(err)
            res.send(err)
        res.json(result)
    })
}