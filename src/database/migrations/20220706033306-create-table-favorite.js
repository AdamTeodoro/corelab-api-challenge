'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			idVehicle: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					key: 'id',
					model: {
						name: 'Vehicle',
						tableName: 'Vehicles'
					},
				}
			},
			idSession: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					key: 'id',
					model: {
						name: 'Session',
						tableName: 'Sessions'
					},
				}
			}
		});
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Favorites');
  }
};
