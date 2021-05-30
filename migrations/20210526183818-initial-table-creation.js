'use strict'

const { authors } = require('../models')

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
      id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKEY: true},
      genre: {type: Sequelize.STRING, allowNull: false},
      createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATED CURRENT_TIMESTAMP')},
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('books', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      authorId: { type: Sequelize.INTEGER, references: { model: authors, key: 'id' } },
      title: { type: Sequelize.STRING, allowNull: false },
      cratedAt: { tyupe: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  
  },
 

    return quetyInterface.createTable('bookGenres' {
       genreid: { type: Sequelize.INTEGER, references: { model: genres, key: 'id'}},
       bookid: {type: Sequelize.INTEGER, references: {model: books, key: 'id'}},
 })

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
