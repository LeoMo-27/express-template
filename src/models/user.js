'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

const PASSWORD_SALT_ROUNDS = 10;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    checkPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty: false,
      validate: {
        notNull: {
          msg: 'First name is required'
        },
        notEmpty: {
          msg: 'First name is required'
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty: false,
      validate: {
        notNull: {
          msg: 'Last name is required'
        },
        notEmpty: {
          msg: 'Last name is required'
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty: false,
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: true
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        },
        len: [5, 150]
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeSave(async (instance) => {
    if (instance.changed('password')) {
      const hash = await bcrypt.hash(instance.password, PASSWORD_SALT_ROUNDS);
      instance.set('password', hash);
    }
  });

  return User;
};