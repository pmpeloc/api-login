module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: 'El nombre solo puede tener letras',
          },
          len: {
            args: [2, 255],
            msg: 'El nombre tiene que ser de al menos dos caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'El mail tiene que tener un formato válido',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: 'La contraseña tiene que tener mínimamente 6 caracteres',
          },
        },
      },
    },
    {
      tableName: 'users',
    }
  );

  return User;
};
