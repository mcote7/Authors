const { Author } = require('../models/author.model');


module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Product.create({
        name,
    })
        .then(author => res.json({ author: author }))
        .catch(err => res.status(400).json(err));
    }

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
    }

module.exports.allAuthors = (req, res) => {
    Product.find({})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ message: "Something went wrong . . .", error: err }));
    }

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
    }

    // module.exports.oneAuthor = (req, res) => {
    //     Author.findOne({_id:req.params.id})
    //         .then(author => res.json(author))
    //         .catch(err => res.json({ message: "Something went wrong . . .", error: err }));
    //     }
