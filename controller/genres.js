const models = require('../models')

const getAllGenres = async (req, res) => {
  const genres = await models.genres.findAll()

  return res.send(genres)
}

const getGenre = async (req, res) => {
  const { id } = req.params
  const genre = await models.genres.findOne({
    where: { id },
    include: [{ model: models.books, include: [{ model: models.authors }] }]
  })

  return res.send(genre)
}

module.exports = { getAllGenres, getGenre }
