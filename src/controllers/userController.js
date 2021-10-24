const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.list_all_user = (req, res) => {
    User.find({}, (err, user) => {
        if(err)
            res.send(err)
        res.json(user)
    })
}

exports.create_a_user = (req, res) => {
    const new_user = new User(req.body)
    new_user.save((err, user) => {
        if(err)
            res.send
        res.json(user)
    })
}

exports.read_a_user = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err)
            res.send(err)
        res.send(user)
    })
}

exports.read_a_email = (req, res) => {
    User.findOne(req.params.email, (err, email) => {
        if(err)
            res.send(err)
        res.send(email)
    })
}
