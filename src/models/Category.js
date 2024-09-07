module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
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

  Category.associate = (models) => {
    Category.hasMany(
      models.PostsCategories,
      { foreignKey: 'postId', as: 'postsCategories' },
    );
  };

  return Category;
};