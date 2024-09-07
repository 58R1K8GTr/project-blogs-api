module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    {
      id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
      title: { type: DataTypes.STRING(255), allowNull: false },
      content: { type: DataTypes.STRING(255), allowNull: false },
      userId: { type: DataTypes.INTEGER, onUpdate: 'CASCADE', onDelete: 'CASCADE', allowNull: false, references: { model: 'users', key: 'id' } },
      published: { type: DataTypes.DATE, allowNull: false },
      updated: { type: DataTypes.DATE, allowNull: false },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    }
  );

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'user' },
    );
  };

  return BlogPosts;
};