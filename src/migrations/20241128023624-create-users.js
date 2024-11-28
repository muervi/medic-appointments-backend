'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      full_name: Sequelize.STRING, 
      user_name: Sequelize.STRING, 
      password: {
        type: Sequelize.STRING(255), 
        allowNull: false, 
      },     
      date_of_birth: Sequelize.DATE,      
      role_id: {
        type: Sequelize.INTEGER,
        references: { model: 'roles', key: 'id' },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
