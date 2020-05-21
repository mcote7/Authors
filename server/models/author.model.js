const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    name: { 
        type: String,
        minlength: [
            3,
            "name must be at least 3 letters long . . ."
        ],
        required: [
            true,
            "name is required . . ."
        ]
    },

}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);
