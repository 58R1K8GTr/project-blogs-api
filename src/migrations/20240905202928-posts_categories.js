'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'posts_categories',
      {
        postId: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          foreignKey: true,
          references: {
            model: 'blog_posts',
            key: 'id',
          },
          field: 'post_id',
        },
        categoryId: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          foreignKey: true,
          references: {
            model: 'categories',
            key: 'id',
          },
          field: 'category_id',
        },
      },
    )
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.dropTable('posts_categories');
  }
};
