const models = require('../models')

const getAllGenres = async (req, res) => {
  const genres = await models.genres.findAll()

  return res.send(genres)
}

const getGenre = async (req, res) => {
  const { search } = req.params

  const genres = await models.genres.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: search },
        { genre: { [models.Sequelize.Op.like]: `%${search}%` }, }
      ]
    },
  })


  return genres
    ? res.send(genres)
    : res.send(404)
}


module.exports = { getAllGenres, getGenre }
