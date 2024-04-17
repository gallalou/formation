const User = require('../models/user');

exports.createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    user.save()
    .then( () => res.status(200).json({ message: 'user created'}))
    .catch( error => res.status(400).json({ error }))
}

exports.getUser = (req, res) => {
    res.end('get all user');
}

exports.deleteUser = (req, res) => {
    res.end('delete user');
}

exports.updateUser = (req, res) => {
    res.end('update user');
}

exports.getUserById = (req, res) => {
    res.end('get user by id');
}