module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(255), allowNull: false },
      image: { type: DataTypes.STRING(255), allowNull: false },
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    },
  );

  users.associate = (models) => {
    users.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'blogPosts' }
    )
  }

  return users;
};