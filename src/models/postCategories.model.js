module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define(
    'PostsCategories',
    {},
    {
      timestamps: false,
      tableName: 'post_categories',
      underscored: true,
    },
  );

  postsCategories.associate = (models) => {
    postsCategories.belongsTo(
      models.BlogPosts,
      { foreignKey: 'post_id', as: 'blog_posts' },
    );
    postsCategories.belongsTo(
      models.Categories,
      { foreignKey: 'category_id', as: 'category' },
    );

    return postsCategories;
  }
};