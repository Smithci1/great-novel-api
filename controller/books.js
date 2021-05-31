
const models = require('../models')

const getAllBooks = async (req, res) => {
  const books = await models.books.findAll({
    include: [{ model: models.authors }, { model: models.genres }]
  })

  return res.send(books)
}

const getBookbyid = async (req, res) => {
  const { id } = req.params
  const oneBook = await models.books.findOne({
    where: { id },
    include: [{ model: models.authors }, { model: models.genres }]
  })

  return res.send(oneBook)
}

module.exports = { getAllBooks, getBookbyid }
