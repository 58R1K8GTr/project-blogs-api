module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    'Categories',
    {
      id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING(255), allowNull: false },
    },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    },
  );

  categories.associate = (models) => {
    categories.hasMany(
      models.PostsCategories,
      { foreignKey: 'postId', as: 'postsCategories' },
    );
  };

  return categories;
};