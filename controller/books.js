const models = require('../models')

const getAllBooks = async (req, res) => {
  const books = await models.books.findAll({
    include: [{ model: models.authors }, { model: models.genres }]
  })

  return res.send(books)
}

module.exports = { getAllBooks }
