
const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.authors.findAll({
    include: [{ model: models.books }]
  })

  return res.send(authors)
}

const getAuthor = async (req, res) => {
  const { search } = req.params


  // books include genre
  const oneAuthor = await models.authors.findOne({
 
    where: {
      [models.Sequelize.Op.or]: [
        { id: search },
        { lastName: { [models.Sequelize.Op.like]: `%${search}%` } },
        { firstName: { [ models.Sequelize.Op.like]: `%${search}%` } }
      ]
    },
    include: [{
      model: models.books,
      include: [{ model: models.genres }]
    }]
  })


  return oneAuthor
    ? res.send(oneAuthor)
    : res.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthor }

