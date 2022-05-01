module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  /* eslint-disable no-unused-vars */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
