'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'posts_categories',
      {
        post_id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'blog_posts',
            key: 'id',
          },
        },
        category_id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'categories',
            key: 'id',
          },
        },
      },
    )
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.dropTable('posts_categories');
  }
};
