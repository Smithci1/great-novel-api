const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const booksModel = require('./books')
const genresModel = require('./genres')
const BGmodel = require('./bookGenres')

const connection = new Sequelize('novels', 'readers', 'reader1',
  { host: 'localhost', dialect: 'mysql' })

const authors = authorsModel(connection, Sequelize)
const genres = genresModel(connection, Sequelize,)
const books = booksModel(connection, Sequelize, authors)
const booksGenres = BGmodel(connection, Sequelize, genres, books)

books.belongsTo(authors)
authors.hasMany(books)

genres.belongsToMany(books, { through: booksGenres })
books.belongsToMany(genres, { through: booksGenres })

module.exports = { authors, genres, books, booksGenres }
