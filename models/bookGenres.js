const booksGenres = (connection, Sequelize, genres, books) => {
  return connection.define('booksGenres', {
    genreid: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } },
    bookid: { type: Sequelize.INTEGER, references: { model: books, key: 'id' } },
 
  })
}

module.exports = booksGenres
