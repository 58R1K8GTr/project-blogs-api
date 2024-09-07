module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories',
    {},
    {
      timestamps: false,
      tableName: 'post_categories',
      underscored: true,
    },
  );

  PostsCategories.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPosts,
      { foreignKey: 'categoryId', as: 'blog_posts', otherKey: 'postId', through: PostsCategories },
    );
    models.BlogPosts.belongsToMany(
      models.Category,
      { foreignKey: 'postId', as: 'category', otherKey: 'categoryId', through: PostsCategories },
    );
  }

  return PostsCategories;
};