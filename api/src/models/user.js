const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
      },
    celphone: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  });
};
