import { Sequelize, DataTypes, BuildOptions, Model } from "sequelize";

import { IFavorite } from "../../interfaces/IFavorite";

import { db } from "../database";

export type FavoriteModel = typeof Model & {
  new (values?: Partial<IFavorite>, options?: BuildOptions): IFavorite
}

function build(sequelize: Sequelize) {
	return sequelize.define("Favorite", {
		idVehicle: {
			type: DataTypes.INTEGER,
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
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				key: 'id',
				model: {
					name: 'Session',
					tableName: 'Sessions'
				},
			}
		}
	}, { tableName: "Favorites", timestamps: false }) as FavoriteModel;
}

export type FavoriteData = {
	idSession: number;
	idVehicle: number;
}
export const favoriteModel = build(db);
