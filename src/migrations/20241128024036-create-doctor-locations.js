'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctor_locations', {
      doctor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'doctors', key: 'id' },
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: { model: 'locations', key: 'id' },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctor_locations');
  },
};
