'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        displayName: {
          allowNull: false,
          type: Sequelize.STRING(255),
          field: 'display_name',
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(255),
          unique: true,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        image: {
          allowNull: true,
          type: Sequelize.STRING(255),
      },
    },
  )
},

  async down (queryInterface, _Sequelize) {
     await queryInterface.dropTable('users');
  }
};
