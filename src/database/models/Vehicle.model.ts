import { Sequelize, DataTypes, BuildOptions, Model } from "sequelize";

import { IVehicle } from "../../interfaces/IVehicle";

import { db } from "../database";

export type VehicleModel = typeof Model & {
  new (values?: Partial<IVehicle>, options?: BuildOptions): IVehicle
}

function build(sequelize: Sequelize) {
	return sequelize.define("Vehicle", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		idSession: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				key: 'id',
				model: {
					name: 'Session',
					tableName: 'Sessions'
				},
			}
		},
		brand: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		plate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		}
	}, { tableName: "Vehicles", timestamps: true }) as VehicleModel;
}

export type VehicleData = {
	idSession: number;
	name: string;
	brand: string;
	color: string;
	year: string;
	plate: string;
	price: number;
	description: string;
}
export const vehicleModel = build(db);
