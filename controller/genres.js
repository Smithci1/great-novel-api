const models = require('../models')

const getAllGenres = async (req, res) => {
  const genres = await models.genres.findAll()

  return res.send(genres)
}

module.exports = { getAllGenres }
