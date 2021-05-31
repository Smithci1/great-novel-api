const models = require('../models')

const getAllGenres = async (req, res) => {
  const genres = await models.genres.findAll()

  return res.send(genres)
}

const getGenre = async (req, res) => {
  const { id } = req.params
  const { genre } = req.params
  const genres = await models.genres.findOne({
    where: { id: { [models.Op.like]: `%${id}%` } } ||
    { genre: { [models.Op.like]: `%${genre}%` } },
    include: [{
      model: models.books,
      attributes: ['id', 'authorId', 'title'],
      include: [{
        model: models.authors,
        attributes: ['id', 'firstName', 'lastName']
      }]
    }]
  })

  return genres
    ? res.send(genres)
    : res.send(404)
}

module.exports = { getAllGenres, getGenre }
