module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      {
        foreignKey: 'categoryId',
        as: 'blog_posts',
        otherKey: 'postId',
        through: PostCategory,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
    models.BlogPost.belongsToMany(
      models.Category,
      {
        foreignKey: 'postId',
        as: 'category',
        otherKey: 'categoryId',
        through: PostCategory,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
  }

  return PostCategory;
};