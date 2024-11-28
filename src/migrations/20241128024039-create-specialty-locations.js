'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specialty_locations', {
      specialty_id: {
        type: Sequelize.INTEGER,
        references: { model: 'specialties', key: 'id' },
      },
      sede_id: {
        type: Sequelize.INTEGER,
        references: { model: 'locations', key: 'id' },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('specialty_locations');
  },
};
