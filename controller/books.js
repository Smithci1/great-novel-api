
const models = require('../models')

const getAllBooks = async (req, res) => {
  const books = await models.books.findAll({
    include: [{ model: models.authors }, { model: models.genres }]
  })

  return res.send(books)
}

const getBookbyid = async (req, res) => {
  const { id } = req.params
  const { authorId } = req.params
  const { title } = req.params
  const oneBook = await models.books.findOne({
    attributes: ['id', 'authorId', 'title'],
    where: { id: { [models.Op.like]: `%${id}%` } } ||
    { authorId: { [models.Op.like]: `%${authorId}%` } } ||
    { title: { [models.Op.like]: `%${title}%` } },
    include: [{
      model: models.books,
      attributes: ['id', 'authorId', 'title']
    }]
  })

  return oneBook
    ? res.send(oneBook)
    : res.send(404)
}

module.exports = { getAllBooks, getBookbyid }
