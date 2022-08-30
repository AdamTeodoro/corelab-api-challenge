'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Sessions', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			token: {
				type: Sequelize.TEXT,
				allowNull: false,
			}
		});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sessions');
  }
};
