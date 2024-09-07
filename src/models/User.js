module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'User',
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

  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'blogPosts' }
    )
  }

  return Users;
};