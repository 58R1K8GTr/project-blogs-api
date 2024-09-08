module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
      title: { type: DataTypes.STRING(255), allowNull: false },
      content: { type: DataTypes.STRING(255), allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        foreignKey: true,
        references: { model: 'users', key: 'id' }
      },
      published: { type: DataTypes.DATE, allowNull: false },
      updated: { type: DataTypes.DATE, allowNull: false },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'user' },
    );
    BlogPost.belongsTo(
      models.PostCategory,
      { foreignKey: 'categoryId', as: 'postCategory' },
    )
  };

  return BlogPost;
};