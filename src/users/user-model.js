const { Model, DataTypes } = require("sequelize");
//const sequelize = require("../config/database-config");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "user_name",
  },
  password: {
    allaowNull: false,
    type: DataTypes.STRING,
  },
  active: {
    allaowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Date.now(),
  },
};

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "user",
      timestamps: false,
    };
  }
}

module.exports = { User, UserSchema, USER_TABLE };

// const User = sequelize.define(
//   "usuario",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     nombre: DataTypes.STRING,
//     apellidos: DataTypes.STRING,
//     password: DataTypes.STRING,
//     eliminado: DataTypes.BOOLEAN,
//   },
//   { timestamps: false }
// );
// module.exports = User;
