'use strict'

const { authors, genres, books, booksGenres } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaulValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      upstatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('genres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKEY: true },
      genre: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATED CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('books', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING, allowNull: false },
      authorId: { type: Sequelize.INTEGER, references: { model: authors, key: 'id' } },
      cratedAt: { tyupe: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return quetyInterface.createTable('booksGenres', {
      bookid: { type: Sequelize.INTEGER, references: { model: books, key: 'id' } },
      genreid: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE }
    })
  },

}
