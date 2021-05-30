'use strict';

const { genres } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize, genres, books) => {
    await queryInterface.createTable('genres', { 
      id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKEY: true},
      genre: {type: Sequelize.STRING, allowNull: false},
      createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATED CURRENT_TIMESTAMP')},
      deletedAt: { type: Sequelize.DATE },
    })

    return quetyInterface.createTable('bookGenres' {
       genreid: { type: Sequelize.INTEGER, references: { model: genres, key: 'id'}},
       bookid: {type: Sequelize.INTEGER, references: {model: books, key: 'id'}},
 })

    
 
     
  },

  down: async (queryInterface, Sequelize) => {
    
}
