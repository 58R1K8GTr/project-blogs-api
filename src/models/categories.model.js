module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
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

  Categories.associate = (models) => {
    Categories.hasMany(
      models.PostsCategories,
      { foreignKey: 'postId', as: 'postsCategories' },
    );
  };

  return Categories;
};