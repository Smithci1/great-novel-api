
const models = require('../models')

const getAllBooks = async (req, res) => {
  const books = await models.books.findAll({
    include: [{ model: models.authors }, { model: models.genres }]
  })

  return res.send(books)
}

const getBook = async (req, res) => {
  const { search } = req.params
  const oneBook = await models.books.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: search },
        { title: { [models.Sequelize.Op.like]: `%${search}%` }, }
      ]
    },
    include: [{ model: models.authors }, { model: models.genres }]
  })

  return oneBook
    ? res.send(oneBook)
    : res.sendStatus(404)
}

module.exports = { getAllBooks, getBook }
