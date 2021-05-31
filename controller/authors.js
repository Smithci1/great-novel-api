const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.authors.findAll({
    include: [{ model: models.books }]
  })

  return res.send(authors)
}

const getAuthorbyid = async (req, res) => {
  const { firstName } = req.params
  const { lastName } = req.params
  const { id } = req.params


  // books include genre
  const oneAuthor = await models.authors.findAll({
    attributes: ['id', 'firstName', 'lastName'],
    where: { firstName: { [models.Op.like]: `%${firstName}%` } } ||
    { lastName: { [models.Op.like]: `%${lastName}%` } } ||
    { id: { [models.Op.like]: `%${id}%` } },
    include: [{
      model: models.authors,
      attributes: ['id', 'firstName', 'lastName']
    }]

  })

  return oneAuthor
    ? res.send(oneAuthor)
    : res.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorbyid }

