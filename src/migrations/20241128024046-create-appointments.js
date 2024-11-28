'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: { model: 'locations', key: 'id' },
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        references: { model: 'specialties', key: 'id' },
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: { model: 'patients', key: 'id' },
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'doctors', key: 'id' },
      },
      date: Sequelize.DATE,
      time: Sequelize.TIME,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');
  },
};
