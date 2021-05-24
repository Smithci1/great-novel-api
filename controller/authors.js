const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.authors.findAll({
    include: [{ model: models.books }]
  })

  return res.send(authors)
}

const getAuthorbyid = async (req, res) => {
  const { id } = req.params
  // books include genre
  const oneAuthor = await models.authors.findOne({
    where: { id },
    include: [{ model: models.books, include: [{ model: models.genres }] }]
  })

  return res.send(oneAuthor)
}

module.exports = { getAllAuthors, getAuthorbyid }
