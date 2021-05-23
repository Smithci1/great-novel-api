const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.authors.findAll({
    include: [{ model: models.books }]
  })

  return res.send(authors)
}

module.exports = { getAllAuthors }
