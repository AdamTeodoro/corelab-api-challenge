'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
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
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			brand: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			color: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			year: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			plate: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.DOUBLE,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			}
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};
