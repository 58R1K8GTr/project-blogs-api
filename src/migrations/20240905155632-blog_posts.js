'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'blog_posts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          foreignKey: true,
          references: {
            model: 'users',
            key: 'id',
          },
          field: 'user_id',
        },
        published: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
    )
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.dropTable('blog_posts');
  }
};
