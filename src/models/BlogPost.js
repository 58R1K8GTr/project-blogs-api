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
      published: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      updated: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
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
  };

  return BlogPost;
};