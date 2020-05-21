const AuthorsController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api/authors', AuthorsController.allAuthors);
    app.post('/api/author/create', AuthorsController.createAuthor);
    app.put('/api/author/update/:id', AuthorsController.updateAuthor);
    app.delete('/api/author/delete/:id', AuthorsController.deleteAuthor);
    app.get('/api/author/:id', AuthorsController.oneAuthor);
}
