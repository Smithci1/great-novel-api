'use strict';

const { authors } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('authors', { 
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    createdAt: {type: Sequelize.DATE, defaulValue: Sequelize.literal('CURRENT_TIMESTAMP')},
    upstatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
      deletedAt: { type: Sequelize.DATE}, 
})

 return queryInterface.createTable.('books', {
   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
   authorId: { type:Sequelize.INTEGER, references: { model: authors, key: 'id'}},
   title: { type: Sequelize.STRING, allowNull:false},
   cratedAt: {tyupe: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
   updatedAt: {
     type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')},
    deletedAt: {type: Sequelize.DATE},
 })
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
