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
    User.find(req.query)
    .then( users => res.status(200).json(users))
    .catch( error => res.status(400).json({ error }))
}

exports.deleteUser = (req, res) => {
    res.end('delete user');
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.iduser}, { ...req.body, _id: req.params.iduser }, {new: true})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }))
}

exports.getUserById = (req, res) => {
    User.findOne({ _id: req.params.iduser })
    .then(user => res.status(200).json(user))
    .catch( error => res.status(400).json({ error }))
}